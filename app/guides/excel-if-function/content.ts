import { AppLanguage } from "../../i18n";

type IfGuideContent = {
  guides: string; formulaTool: string; badge: string; title: string; subtitle: string;
  introTitle: string; intro: string; tags: string[]; syntaxTitle: string; syntaxFormula: string;
  syntaxItems: [string, string][]; examples: { title: string; description: string; formula: string }[];
  errorsTitle: string; errors: [string, string][]; ctaTitle: string; ctaText: string; ctaButton: string; back: string;
};

export const ifGuideContent: Record<AppLanguage, IfGuideContent> = {
  "zh-TW": {
    guides: "Excel 教學中心", formulaTool: "公式產生器", badge: "邏輯函數", title: "Excel IF 函數教學",
    subtitle: "從基本條件判斷到 AND、OR 多條件公式，一次學會 IF 函數的語法、範例與常見錯誤。",
    introTitle: "IF 函數是什麼？", intro: "IF 函數會先判斷條件是否成立，再依結果顯示不同內容。常用於成績、庫存、達成率、逾期與 OK／NG 判斷。",
    tags: ["分數 ≥ 60 顯示及格", "庫存低於 10 顯示補貨", "金額超過 1,000 顯示高額", "日期逾期顯示提醒"],
    syntaxTitle: "IF 函數語法", syntaxFormula: "=IF(條件, 成立時的結果, 不成立時的結果)",
    syntaxItems: [["條件", "例如 A2>=60"], ["成立時結果", "例如「及格」"], ["不成立時結果", "例如「不及格」"]],
    examples: [
      { title: "範例一：判斷是否及格", description: "B2 是分數，達到 60 分顯示及格，否則顯示不及格。", formula: '=IF(B2>=60,"及格","不及格")' },
      { title: "範例二：判斷是否需要補貨", description: "A2 的庫存低於 10 時顯示需要補貨。", formula: '=IF(A2<10,"需要補貨","庫存正常")' },
      { title: "範例三：搭配 AND", description: "分數達 60 且出席率達 80% 才顯示通過。", formula: '=IF(AND(B2>=60,C2>=80%),"通過","未通過")' },
      { title: "範例四：搭配 OR", description: "A2 大於 100 或 B2 大於 50 時顯示 PASS。", formula: '=IF(OR(A2>100,B2>50),"PASS","")' },
    ],
    errorsTitle: "常見錯誤", errors: [["文字沒有加雙引號", "文字結果必須使用雙引號，例如「及格」要寫成 \"及格\"。"], ["括號或逗號缺少", "IF 需要三個部分，缺少逗號或右括號會造成錯誤。"], ["百分比格式錯誤", "80% 也可寫成 0.8，但要確認儲存格的實際格式。"], ["巢狀 IF 太多層", "條件太多時可考慮 IFS、XLOOKUP 或建立對照表。"]],
    ctaTitle: "條件太複雜，不知道 IF 怎麼寫？", ctaText: "直接描述條件，EveryFormula 會替你建立公式。", ctaButton: "立即產生 IF 公式", back: "← 返回 Excel 教學中心",
  },
  en: {
    guides: "Excel Guides", formulaTool: "Formula tool", badge: "Logical function", title: "Excel IF Function Guide",
    subtitle: "Learn IF syntax, practical examples, AND/OR conditions, and common mistakes.",
    introTitle: "What does IF do?", intro: "IF tests whether a condition is true and returns one result when true and another when false. It is useful for grades, stock levels, targets, deadlines, and status labels.",
    tags: ["Score ≥ 60: Pass", "Stock below 10: Reorder", "Amount over 1,000: High", "Past due date: Alert"],
    syntaxTitle: "IF syntax", syntaxFormula: "=IF(condition, value_if_true, value_if_false)",
    syntaxItems: [["Condition", "Example: A2>=60"], ["If true", "Example: \"Pass\""], ["If false", "Example: \"Fail\""]],
    examples: [
      { title: "Example 1: Pass or fail", description: "B2 contains the score. Show Pass at 60 or above; otherwise show Fail.", formula: '=IF(B2>=60,"Pass","Fail")' },
      { title: "Example 2: Reorder stock", description: "Show Reorder when stock in A2 is below 10.", formula: '=IF(A2<10,"Reorder","Stock OK")' },
      { title: "Example 3: Use AND", description: "Pass only when the score is at least 60 and attendance is at least 80%.", formula: '=IF(AND(B2>=60,C2>=80%),"Pass","Fail")' },
      { title: "Example 4: Use OR", description: "Show PASS when A2 is above 100 or B2 is above 50.", formula: '=IF(OR(A2>100,B2>50),"PASS","")' },
    ],
    errorsTitle: "Common mistakes", errors: [["Missing quotation marks", "Text results must be enclosed in double quotation marks."], ["Missing commas or parentheses", "IF needs three arguments and a closing parenthesis."], ["Wrong percentage format", "80% can also be written as 0.8; check the actual cell format."], ["Too many nested IFs", "For many conditions, consider IFS, XLOOKUP, or a lookup table."]],
    ctaTitle: "Is your IF condition getting complicated?", ctaText: "Describe the conditions and EveryFormula will create the formula.", ctaButton: "Create an IF formula", back: "← Back to Excel Guides",
  },
  ja: {
    guides: "Excel 学習センター", formulaTool: "数式ツール", badge: "論理関数", title: "Excel IF 関数ガイド",
    subtitle: "IF の構文、実用例、AND・OR 条件、よくある間違いをまとめて学びます。",
    introTitle: "IF 関数とは？", intro: "IF 関数は条件が成立するかを判定し、成立時と不成立時で異なる結果を返します。成績、在庫、達成率、期限、OK／NG 判定に便利です。",
    tags: ["点数 ≥ 60：合格", "在庫 10 未満：補充", "金額 1,000 超：高額", "期限超過：警告"],
    syntaxTitle: "IF 関数の構文", syntaxFormula: "=IF(条件, 成立時の結果, 不成立時の結果)",
    syntaxItems: [["条件", "例：A2>=60"], ["成立時", "例：\"合格\""], ["不成立時", "例：\"不合格\""]],
    examples: [
      { title: "例1：合否を判定", description: "B2 の点数が 60 以上なら合格、それ以外は不合格と表示します。", formula: '=IF(B2>=60,"合格","不合格")' },
      { title: "例2：在庫補充を判定", description: "A2 の在庫が 10 未満なら補充が必要と表示します。", formula: '=IF(A2<10,"補充が必要","在庫あり")' },
      { title: "例3：AND と組み合わせる", description: "点数 60 以上かつ出席率 80% 以上の場合のみ合格。", formula: '=IF(AND(B2>=60,C2>=80%),"合格","不合格")' },
      { title: "例4：OR と組み合わせる", description: "A2 が 100 超または B2 が 50 超なら PASS。", formula: '=IF(OR(A2>100,B2>50),"PASS","")' },
    ],
    errorsTitle: "よくある間違い", errors: [["文字列の引用符がない", "文字列の結果はダブルクォーテーションで囲みます。"], ["カンマや括弧が不足", "IF には3つの引数と閉じ括弧が必要です。"], ["パーセント形式の誤り", "80% は 0.8 とも書けます。セルの形式を確認してください。"], ["IF の入れ子が多すぎる", "条件が多い場合は IFS、XLOOKUP、対応表を検討します。"]],
    ctaTitle: "IF の条件が複雑ですか？", ctaText: "条件を文章で入力すると EveryFormula が数式を作成します。", ctaButton: "IF 数式を作成", back: "← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides: "Excel 教学中心", formulaTool: "公式生成器", badge: "逻辑函数", title: "Excel IF 函数教学",
    subtitle: "一次学会 IF 函数的语法、实用示例、AND／OR 多条件与常见错误。",
    introTitle: "IF 函数是什么？", intro: "IF 函数先判断条件是否成立，再根据结果显示不同内容。常用于成绩、库存、达成率、逾期与 OK／NG 判断。",
    tags: ["分数 ≥ 60 显示及格", "库存低于 10 显示补货", "金额超过 1,000 显示高额", "日期逾期显示提醒"],
    syntaxTitle: "IF 函数语法", syntaxFormula: "=IF(条件, 成立时的结果, 不成立时的结果)",
    syntaxItems: [["条件", "例如 A2>=60"], ["成立时结果", "例如“及格”"], ["不成立时结果", "例如“不及格”"]],
    examples: [
      { title: "示例一：判断是否及格", description: "B2 是分数，达到 60 分显示及格，否则显示不及格。", formula: '=IF(B2>=60,"及格","不及格")' },
      { title: "示例二：判断是否需要补货", description: "A2 的库存低于 10 时显示需要补货。", formula: '=IF(A2<10,"需要补货","库存正常")' },
      { title: "示例三：搭配 AND", description: "分数达到 60 且出勤率达到 80% 才显示通过。", formula: '=IF(AND(B2>=60,C2>=80%),"通过","未通过")' },
      { title: "示例四：搭配 OR", description: "A2 大于 100 或 B2 大于 50 时显示 PASS。", formula: '=IF(OR(A2>100,B2>50),"PASS","")' },
    ],
    errorsTitle: "常见错误", errors: [["文本没有加双引号", "文本结果必须使用双引号。"], ["缺少逗号或括号", "IF 需要三个参数和右括号。"], ["百分比格式错误", "80% 也可以写成 0.8，请确认单元格格式。"], ["嵌套 IF 太多层", "条件太多时可考虑 IFS、XLOOKUP 或建立对照表。"]],
    ctaTitle: "条件太复杂，不知道 IF 怎么写？", ctaText: "直接描述条件，EveryFormula 会帮你创建公式。", ctaButton: "立即生成 IF 公式", back: "← 返回 Excel 教学中心",
  },
};
