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

export async function POST(req: Request) {
  try {
    const { request, tool, outputMode } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "尚未設定 OPENAI_API_KEY。" }, { status: 500 });
    }

    if (!request || typeof request !== "string") {
      return NextResponse.json({ error: "請輸入需求。" }, { status: 400 });
    }

    const selectedTool = tool || "Excel";
    const selectedOutputMode = outputMode || "general";

    const modeInstruction =
      selectedOutputMode === "professional"
        ? `目前使用者選擇「專業 Excel」模式。
請盡量保持結果為可計算的數值，不要用 TEXT() 把數字轉成文字。
例如百分比請回傳 =IF(A1=0,0,(A1-B1)/A1)，並在 howToUse 提醒使用者將儲存格格式設為百分比、小數兩位。`
        : `目前使用者選擇「一般使用」模式。
請優先讓使用者貼上公式後就能直接看到想要的顯示結果。
如果使用者要求百分比、小數兩位、金額格式，可以使用 TEXT() 讓結果直接顯示成使用者期待的樣子。
但 warning 要提醒：若後續還要平均、排序、圖表或樞紐分析，建議改用專業 Excel 模式。`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.1,
      messages: [
        {
          role: "system",
          content: `你是專業 Excel / Google Sheets 公式助理。請用繁體中文回答。

你必須只輸出 JSON，不要使用 markdown，不要輸出 JSON 以外的任何文字。

JSON 格式如下：
{
  "formula": "可直接貼到 Excel 或 Google Sheets 的完整公式，必須以 = 開頭",
  "explanation": "用白話中文解釋公式邏輯",
  "howToUse": "明確告訴使用者每個儲存格代表什麼，以及公式要貼在哪裡",
  "example": "提供一個簡短範例，說明輸入值與輸出結果",
  "warning": "提醒使用者注意欄位、版本、分隔符號或需要自行調整的地方"
}

重要規則：
1. formula 一定要是完整公式，而且一定要以 = 開頭。
2. 優先使用簡單、穩定、一般上班族看得懂的公式。
3. 若使用 A1、B1、C1 等儲存格，必須在 howToUse 裡清楚說明每個儲存格代表什麼。
4. 不要使用未解釋的 B1、C1、D1。
5. 如果使用者沒有提供欄位，優先假設 A1 是主要輸入值。
6. 如果需求是「超過 8 小時算加班費」，且沒有提供時薪，請用加班時數公式：=IF(A1>8,(A1-8)*1.33,0)，不要自行假設 B1 是時薪。
7. 如果需要金額計算但使用者沒有提供時薪，可以在 warning 提醒：若要計算實際金額，需再乘以時薪。
8. 公式請符合使用者選擇的工具：Excel 或 Google Sheets。
9. 不要編造不存在的函數。
10. 若有地區分隔符號差異，提醒逗號可能需要改成分號。
11. 常用產業定義：
- 良率 = (投入數量 - 不良數量) / 投入數量
- 不良率 = 不良數量 / 投入數量
- 達成率 = 實際完成數量 / 目標數量
- 加班時數 = 總工時 - 8
12. 若使用者提到「良率」，不要回傳不良率公式。
13. ${modeInstruction}`,
        },
        {
          role: "user",
          content: `工具：${selectedTool}\n輸出模式：${selectedOutputMode}\n使用者需求：${request}`,
        },
      ],
      response_format: { type: "json_object" },
    });

    const text = completion.choices[0]?.message?.content;

    if (!text) {
      return NextResponse.json({ error: "AI 沒有回傳內容。" }, { status: 500 });
    }

    const parsed = JSON.parse(text);

    return NextResponse.json({
      formula: cleanFormula(parsed.formula),
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
