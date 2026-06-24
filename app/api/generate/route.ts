import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { request, tool } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "尚未設定 OPENAI_API_KEY。" }, { status: 500 });
    }

    if (!request || typeof request !== "string") {
      return NextResponse.json({ error: "請輸入需求。" }, { status: 400 });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content: `你是專業 Excel / Google Sheets 公式助理。請用繁體中文回答。
你必須只輸出 JSON，不要使用 markdown。
JSON 格式如下：
{
  "formula": "公式本體，只放公式，不要解釋",
  "explanation": "用白話中文解釋公式邏輯",
  "howToUse": "告訴使用者要貼在哪裡、需要改哪些儲存格",
  "example": "提供一個簡短範例",
  "warning": "提醒使用者注意欄位、版本或分隔符號差異"
}
規則：
1. 優先產生可直接貼上的公式。
2. 公式請符合使用者選擇的工具：Excel 或 Google Sheets。
3. 如果需求資訊不足，請用合理假設，例如 A1 是輸入值，B1 是輸出位置。
4. 不要編造不存在的函數。
5. 若有地區分隔符號差異，提醒逗號可能需改分號。
6. 不要輸出任何 JSON 以外的文字。`,
        },
        {
          role: "user",
          content: `工具：${tool || "Excel"}\n使用者需求：${request}`,
        },
      ],
      response_format: { type: "json_object" },
    });

    const text = completion.choices[0]?.message?.content;
    if (!text) {
      return NextResponse.json({ error: "AI 沒有回傳內容。" }, { status: 500 });
    }

    const parsed = JSON.parse(text);
    return NextResponse.json(parsed);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "產生公式時發生錯誤。" }, { status: 500 });
  }
}
