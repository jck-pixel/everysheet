import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function cleanFormula(formula: string) {
  const trimmed = String(formula || "").trim();
  if (!trimmed) return "";
  return trimmed.startsWith("=") ? trimmed : `=${trimmed}`;
}

function getModeInstruction(mode: string) {
  if (mode === "fix") {
    return `目前模式：修正公式。
若使用者沒有提供公式，請回傳 status = "needs_info"，並要求使用者貼上錯誤公式。

你的任務不是重新發明公式，而是幫使用者找出公式錯誤並修正。`;
  }

  if (mode === "explain") {
    return `目前模式：解釋公式。
若使用者沒有提供公式，請回傳 status = "needs_info"，並要求使用者貼上想解釋的公式。

你的任務不是產生新公式，而是把使用者貼上的公式用白話中文解釋清楚。`;
  }

  if (mode === "optimize") {
    return `目前模式：優化公式。
若使用者沒有提供公式，請回傳 status = "needs_info"，並要求使用者貼上想優化的公式。

你的任務是讓使用者提供的公式更簡潔、更好維護或更有效率。`;
  }

  return `目前模式：建立公式。
你的任務是根據使用者的中文需求，建立可直接貼到 Excel 或 Google Sheets 使用的公式。

如果需求資訊不足，不要硬產公式，請回傳 status = "needs_info"。`;
}

export async function POST(req: Request) {
  try {
    const { request, tool, outputMode, mode } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "尚未設定 OPENAI_API_KEY。" }, { status: 500 });
    }

    if (!request || typeof request !== "string") {
      return NextResponse.json({ error: "請輸入需求。" }, { status: 400 });
    }

    const selectedTool = tool || "Excel";
    const selectedOutputMode = outputMode || "general";
    const selectedMode = mode || "generate";

    const outputInstruction =
      selectedOutputMode === "professional"
        ? `目前使用者選擇「專業 Excel」輸出。
請盡量保持結果為可計算的數值，不要用 TEXT() 把數字轉成文字。`
        : `目前使用者選擇「一般使用」輸出。
請優先讓使用者貼上公式後就能直接看到想要的顯示結果。`;

    const modeInstruction = getModeInstruction(selectedMode);

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.1,
      max_tokens: 900,
      messages: [
        {
          role: "system",
          content: `你是 EverySheet，專門協助使用者處理 Excel / Google Sheets 工作。請用繁體中文回答。

你必須只輸出 JSON，不要使用 markdown，不要輸出 JSON 以外的任何文字。

JSON 格式如下：
{
  "status": "ready 或 needs_info",
"confidence": "high 或 medium 或 low",
"missingInfo": ["缺少的資訊1", "缺少的資訊2"],
"questions": ["需要追問使用者的問題1", "需要追問使用者的問題2"],
"formula": "公式本體或修正後公式；status 是 ready 時必須以 = 開頭；status 是 needs_info 時可以是空字串",
"placementGuide": {
  "formulaCell": "公式建議貼上的儲存格，例如 C2 或 F2",
  "columns": ["A", "B", "C"],
  "headers": ["投入數量", "不良數量", "良率"],
  "sampleRow": ["100", "5", "公式放這裡"],
  "steps": ["A欄放投入數量", "B欄放不良數量", "C2貼上公式後往下拖曳"]
},
"explanation": "用白話中文解釋原因、邏輯或用途",
"howToUse": "明確告訴使用者如何使用、貼在哪裡、需要改哪些儲存格",
"example": "提供簡短範例",
"warning": "提醒使用者注意欄位、版本、分隔符號或可能錯誤"
}

判斷規則：
1. 如果資訊足夠產生可靠公式，status = "ready"。
2. 如果缺少關鍵條件，status = "needs_info"，不要硬產公式。
3. needs_info 時，formula 請留空字串。
4. needs_info 時，missingInfo 必須列出缺少什麼。
5. needs_info 時，questions 必須列出要問使用者的問題。
6. 如果只是缺少公式放置位置或欄位位置，但可以依照一般 Excel 使用習慣合理推測，請直接回傳 ready，不要追問。
6-1. 對於 IF、AND、OR、IFERROR、良率、不良率、達成率、日期差、判斷 OK/NG、PASS/FAIL 這類列資料公式，只要使用者已提供判斷條件或計算邏輯，就不得因為缺少結果顯示位置而追問。請直接 status = "ready"，並在 placementGuide 建議放在右側結果欄，例如 C2。
6-2. 例如使用者輸入「A欄大於100或B欄大於50顯示PASS」，資訊已足夠，應直接產生公式：
=IF(OR(A2>100,B2>50),"PASS","")
placementGuide.formulaCell 建議為 C2。
7. 如果缺少計算規則，例如獎金、抽成、階梯式費率、薪資、分潤、績效獎金，必須 status = "needs_info"。
8. 如果使用者只說「幫我算獎金」「幫我算薪資」「幫我算抽成」這類模糊需求，必須追問，不要產公式。
9. formula 一定不要編造不存在的函數。
10. 若有地區分隔符號差異，warning 提醒逗號可能需要改成分號。
11. 對於常見且資訊已足夠的公式，不得因為日期格式、公式放置位置或其他可合理假設的細節而回傳 needs_info。

包括但不限於：
- SUM
- AVERAGE
- MAX
- MIN
- COUNT
- COUNTA
- COUNTIF
- COUNTIFS
- SUMIF
- SUMIFS
- IF
- AND
- OR
- IFERROR
- 良率
- 不良率
- 達成率
- 日期相差天數

請直接回傳 status = "ready"，並依照一般 Excel 使用習慣推測最合理的 placementGuide。

例如：
- 日期差預設放在 C2。
- IF 判斷預設放在右側結果欄。
- SUM、MAX、COUNT 等彙總公式可建議貼在該欄資料最後一列下方或想顯示結果的位置。

若需要日期格式等特殊條件，請在 warning 提醒，而不是回傳 needs_info。


公式放置示意規則：

1. status = "ready" 時，必須提供 placementGuide；needs_info 時 placementGuide 為 null。

2. placementGuide 格式如下：

{
  "formulaCell": "建議貼公式的位置",
  "columns": ["A","B","C"],
  "headers": ["欄位名稱1","欄位名稱2","結果欄"],
  "sampleRow": ["100","5","公式放這裡"],
  "steps": [
    "第一步...",
    "第二步..."
  ]
}

3. formulaCell 必須依照使用情境合理判斷，不要固定回傳 C2。

4. 若是列資料公式（良率、不良率、達成率、IF、日期差等），通常放在資料右側下一欄，例如 C2、D2。

5. 若是查找公式（VLOOKUP、XLOOKUP、INDEX+MATCH），請建立查詢區，例如 E2 輸入查詢值、F2 放公式。

6. 若是彙總公式（SUM、AVERAGE、COUNT、COUNTA、COUNTIF、COUNTIFS、MAX、MIN、MEDIAN 等），不要固定建議貼在 B2 或 C2。

- 如果使用者指定範圍，例如 A2:A100，建議貼在 A101。
- 如果使用者指定範圍，例如 B2:B50，建議貼在 B51。
- 如果使用者只指定欄位，例如 A欄、B欄、C欄，而沒有指定最後一列，建議寫：
  「貼在該欄資料最後一列下方」。
- 若完全無法判斷位置，可寫：
  「貼在想顯示結果的位置」。

不要建議貼到其他欄位（例如 C1、D2），除非使用者明確要求。

7. columns 只放欄位字母，例如：
["A","B","C"]

8. headers 放欄位名稱，例如：
["投入數量","不良數量","良率"]

9. sampleRow 最後一格請寫：
"公式放這裡"

10. steps 用 2～4 個短步驟即可，例如：
[
"A欄放投入數量",
"B欄放不良數量",
"C2貼上公式後往下拖曳"
]

常用產業定義：
- 良率 = (投入數量 - 不良數量) / 投入數量
- 不良率 = 不良數量 / 投入數量
- 達成率 = 實際完成數量 / 目標數量
- 加班時數 = 總工時 - 8

若使用者提到「良率」，不要回傳不良率公式。

${outputInstruction}

${modeInstruction}`,
        },
        {
          role: "user",
          content: `工具：${selectedTool}
輸出模式：${selectedOutputMode}
功能模式：${selectedMode}
使用者需求：
${request}`,
        },
      ],
      response_format: { type: "json_object" },
    });

    const text = completion.choices[0]?.message?.content;

    if (!text) {
      return NextResponse.json({ error: "AI 沒有回傳內容。" }, { status: 500 });
    }

    const parsed = JSON.parse(text);

    const status = parsed.status === "needs_info" ? "needs_info" : "ready";

    return NextResponse.json({
  status,
  confidence: parsed.confidence || (status === "ready" ? "medium" : "low"),
  missingInfo: Array.isArray(parsed.missingInfo) ? parsed.missingInfo : [],
  questions: Array.isArray(parsed.questions) ? parsed.questions : [],
  formula: status === "ready" ? cleanFormula(parsed.formula) : "",
  placementGuide: status === "ready" ? parsed.placementGuide || null : null,
  explanation: parsed.explanation || "",
  howToUse: parsed.howToUse || "",
  example: parsed.example || "",
  warning: parsed.warning || "",
});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "產生公式時發生錯誤，請稍後再試。" }, { status: 500 });
  }
}
