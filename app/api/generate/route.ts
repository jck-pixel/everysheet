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

你的任務是修正使用者提供的公式，而不是重新建立新公式。

請先判斷公式本身是否有語法、函數、參數、括號、引用範圍等問題。

如果公式本身沒有明顯錯誤：
- 直接回傳 status = "ready"
- 保留原公式
- explanation 說明公式本身沒有問題
- 不要因為可能存在儲存格格式、資料內容、隱藏字元、空白字元或其他外部因素而回傳 needs_info。

只有在：
- 缺少公式
- 或公式內容不足以判斷

才回傳 status = "needs_info"。`;
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

請讓專業模式明顯不同於一般模式，但不要為了不同而硬產不同公式。

專業模式要求：
1. 第一優先是判斷是否存在更佳、更現代、更易維護或效能更好的公式。
2. 如果有更好的公式，formula 請直接輸出該最佳公式。
3. 常見升級方向：
- VLOOKUP 可優先考慮 XLOOKUP。
- INDEX+MATCH 可優先考慮 XLOOKUP。
- 複雜或重複計算可考慮 LET。
- 多條件篩選可考慮 FILTER。
- 文字拆分可考慮 TEXTBEFORE、TEXTAFTER、TEXTSPLIT。
4. 如果目前公式已經是最佳實務，請維持原公式，不要為了區分一般模式而硬改成 LET 或其他進階函數。
5. 若公式相同，必須在 explanation 或 warning 明確說明：「目前公式已是簡潔且穩定的寫法，不建議刻意改得更複雜。」
6. explanation 要說明為什麼採用這個公式。
7. warning 要提醒版本相容性、效能、欄位範圍、資料格式或分隔符號差異。
8. placementGuide 仍要清楚，讓使用者知道公式貼在哪裡。`
    : `目前使用者選擇「一般使用」輸出。

請讓一般模式簡單、直接、容易懂。

一般模式要求：
1. formula 給最容易使用的公式。
2. explanation 控制在 80 字以內。
3. 不要講太多函數原理。
4. howToUse 像教新手一樣，一步一步說明公式貼在哪裡。
5. warning 只提醒真正重要的事情。
6. 不提供替代公式、進階函數或最佳實務。
7. placementGuide 要簡單清楚，重點是資料放哪裡、公式貼哪裡。`;

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
"warning": "提醒使用者注意欄位、版本、分隔符號或可能錯誤",
"professionalTips": [
  "專業建議1",
  "專業建議2"
],
"modernFormula": {
  "title": "Microsoft 365 最佳寫法",
  "formula": "",
  "reason": ""
}

【最高優先規則】

對於 Excel 常見需求，只要可以依照一般 Excel 使用習慣合理假設，就不要回傳 needs_info。

例如：

- 良率
- 不良率
- 達成率
- IF 判斷
- 日期差
- VLOOKUP
- XLOOKUP
- INDEX+MATCH
- 依姓名查薪資
- 依料號查價格
- 依編號查資料

以上需求請直接回傳 status = "ready"，並建立 placementGuide。

只有真正缺少「計算規則」時，例如：

- 獎金
- 抽成
- 階梯式費率
- 薪資計算方式
- 分潤規則

才允許回傳 status = "needs_info"。

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

12. 對於常見查找需求（VLOOKUP、XLOOKUP、INDEX+MATCH、依姓名查薪資、依料號查價格、依編號查資料等），即使沒有提供欄位位置，也請依照一般 Excel 習慣合理假設，不要回傳 needs_info。

預設假設：
- 查找資料放在 A、B 欄。
- 查詢值放在 E2。
- 公式放在 F2。

並建立 placementGuide。

warning 應提醒：
「本公式依一般 Excel 常見欄位配置建立，若你的欄位不同，請修改儲存格位置。」

不要因為缺少欄位位置、查詢值位置而回傳 needs_info。

【回答模式】

如果 outputMode = "general"：

- 用一般上班族看得懂的方式回答。
- 不要講太多函數原理。
- 步驟越少越好。
- howToUse 要一步一步告訴使用者貼在哪裡。
- explanation 不超過 80 字。
- warning 只提醒真正重要的事項。

如果 outputMode = "professional"：

- 使用較完整的 Excel 專業說明。
- explanation 要說明公式邏輯。
- howToUse 要包含適用情境。
- warning 要提醒版本相容性、效能、可能替代函數。
- 若有更佳公式，也可以在 explanation 中一起說明。
- professionalTips 必須提供 2～4 個專業建議。
- 如果沒有特別替代公式，也要提供至少一項最佳實務。
若 Microsoft 365 有更現代、更容易維護的公式（例如 LET、XLOOKUP、FILTER、TAKE、DROP、TEXTSPLIT 等），請放在 modernFormula。

如果目前公式已經是最佳寫法，modernFormula.formula 請回傳空字串，不要硬寫 LET。

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
  professionalTips: Array.isArray(parsed.professionalTips)
    ? parsed.professionalTips
    : [],

  modernFormula:
  parsed.modernFormula && typeof parsed.modernFormula === "object"
    ? {
        title: parsed.modernFormula.title || "Microsoft 365 最佳寫法",
        formula: parsed.modernFormula.formula || "",
        reason: parsed.modernFormula.reason || "",
      }
    : null,
});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "產生公式時發生錯誤，請稍後再試。" }, { status: 500 });
  }
}
