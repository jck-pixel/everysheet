import { AppLanguage } from "../../i18n";

type GuideContent = {
  guides: string; formulaTool: string; badge: string; title: string; subtitle: string;
  introTitle: string; intro: string; tags: string[]; syntaxTitle: string; syntaxFormula: string;
  syntaxItems: [string, string][]; examples: { title: string; description: string; formula: string }[];
  errorsTitle: string; errors: [string, string][]; ctaTitle: string; ctaText: string; ctaButton: string; back: string;
};

export const vlookupGuideContent: Record<AppLanguage, GuideContent> = {
  "zh-TW": {
    guides: "Excel 教學中心", formulaTool: "公式產生器", badge: "查找函數", title: "Excel VLOOKUP 函數教學",
    subtitle: "用編號或姓名從資料表找出對應資料，一次學會精確比對、固定範圍與常見錯誤。",
    introTitle: "VLOOKUP 是什麼？", intro: "VLOOKUP 會在資料表最左欄尋找指定值，再傳回同一列中的其他資料。常用於員工、商品、客戶與成績資料。",
    tags: ["員工編號帶出姓名", "商品編號帶出價格", "客戶編號帶出電話", "學號帶出成績"],
    syntaxTitle: "VLOOKUP 語法", syntaxFormula: "=VLOOKUP(查找值, 資料範圍, 回傳欄數, FALSE)",
    syntaxItems: [["查找值", "例如 A2 的員工編號"], ["資料範圍", "例如 員工資料!A:B"], ["回傳欄數", "第 2 欄就填 2"], ["比對方式", "FALSE 代表精確比對"]],
    examples: [
      { title: "範例一：用員工編號查姓名", description: "A2 是員工編號；到「員工資料」工作表的 A:B 欄查找並傳回第 2 欄姓名。", formula: "=VLOOKUP(A2,員工資料!A:B,2,FALSE)" },
      { title: "範例二：用商品編號查價格", description: "A2 是商品編號，商品表的第 3 欄是價格。", formula: "=VLOOKUP(A2,商品表!A:C,3,FALSE)" },
      { title: "範例三：複製公式時固定範圍", description: "使用 $ 固定查找範圍，向下複製公式時資料表不會移動。", formula: "=VLOOKUP(A2,$F$2:$H$100,3,FALSE)" },
      { title: "範例四：找不到時顯示提示", description: "搭配 IFERROR，找不到資料時顯示「查無資料」。", formula: "=IFERROR(VLOOKUP(A2,$F$2:$H$100,3,FALSE),\"查無資料\")" },
    ],
    errorsTitle: "常見錯誤", errors: [["出現 #N/A", "確認查找值存在、文字與數字格式一致，並移除多餘空格。"], ["回傳欄數填錯", "欄數從資料範圍最左欄開始算，第 1 欄、2 欄依序計算。"], ["忘記使用 FALSE", "一般編號或姓名查找應使用 FALSE 做精確比對。"], ["查找欄不在最左邊", "VLOOKUP 只能向右查找；需要向左時可改用 XLOOKUP 或 INDEX＋MATCH。"]],
    ctaTitle: "資料範圍很複雜，不知道怎麼寫？", ctaText: "描述查找欄與回傳欄，EverySheet 會替你建立公式。", ctaButton: "建立 VLOOKUP 公式", back: "← 返回 Excel 教學中心",
  },
  en: {
    guides: "Excel Guides", formulaTool: "Formula tool", badge: "Lookup function", title: "Excel VLOOKUP Guide",
    subtitle: "Find matching data by ID or name and learn exact match, fixed ranges, and common errors.",
    introTitle: "What does VLOOKUP do?", intro: "VLOOKUP searches the leftmost column of a table and returns a value from the same row. It is useful for employee, product, customer, and grade records.",
    tags: ["Employee ID to name", "Product ID to price", "Customer ID to phone", "Student ID to grade"],
    syntaxTitle: "VLOOKUP syntax", syntaxFormula: "=VLOOKUP(lookup_value, table_array, col_index_num, FALSE)",
    syntaxItems: [["Lookup value", "For example, the ID in A2"], ["Table range", "For example, Employees!A:B"], ["Column number", "Use 2 for the second column"], ["Match type", "FALSE means exact match"]],
    examples: [
      { title: "Example 1: Find an employee name", description: "Use the employee ID in A2 to return the name from column 2.", formula: "=VLOOKUP(A2,Employees!A:B,2,FALSE)" },
      { title: "Example 2: Find a product price", description: "A2 contains the product ID and the price is in column 3.", formula: "=VLOOKUP(A2,Products!A:C,3,FALSE)" },
      { title: "Example 3: Lock the table range", description: "Dollar signs keep the table range fixed when the formula is copied down.", formula: "=VLOOKUP(A2,$F$2:$H$100,3,FALSE)" },
      { title: "Example 4: Show a friendly message", description: "Use IFERROR to display Not found instead of an error.", formula: "=IFERROR(VLOOKUP(A2,$F$2:$H$100,3,FALSE),\"Not found\")" },
    ],
    errorsTitle: "Common mistakes", errors: [["#N/A appears", "Check that the value exists, number and text formats match, and extra spaces are removed."], ["Wrong column number", "Count columns from the left edge of the selected table range."], ["FALSE is missing", "Use FALSE for an exact ID or name match."], ["Lookup column is not first", "VLOOKUP only looks right; use XLOOKUP or INDEX and MATCH when needed."]],
    ctaTitle: "Is your lookup table complicated?", ctaText: "Describe the lookup and return columns and EverySheet will build the formula.", ctaButton: "Create a VLOOKUP formula", back: "← Back to Excel Guides",
  },
  ja: {
    guides: "Excel 学習センター", formulaTool: "数式ツール", badge: "検索関数", title: "Excel VLOOKUP 関数ガイド",
    subtitle: "番号や氏名から対応データを検索し、完全一致、範囲固定、よくあるエラーを学びます。",
    introTitle: "VLOOKUP 関数とは？", intro: "VLOOKUP は表の左端列で値を検索し、同じ行の別の値を返します。社員、商品、顧客、成績表に便利です。",
    tags: ["社員番号から氏名", "商品番号から価格", "顧客番号から電話", "学籍番号から成績"],
    syntaxTitle: "VLOOKUP の構文", syntaxFormula: "=VLOOKUP(検索値, 範囲, 列番号, FALSE)",
    syntaxItems: [["検索値", "例：A2 の社員番号"], ["範囲", "例：社員!A:B"], ["列番号", "2列目なら 2"], ["検索方法", "FALSE は完全一致"]],
    examples: [
      { title: "例1：社員番号から氏名を検索", description: "A2 の社員番号を検索し、2列目の氏名を返します。", formula: "=VLOOKUP(A2,社員!A:B,2,FALSE)" },
      { title: "例2：商品番号から価格を検索", description: "A2 は商品番号、価格は商品表の3列目です。", formula: "=VLOOKUP(A2,商品表!A:C,3,FALSE)" },
      { title: "例3：検索範囲を固定", description: "$ を付けると、数式をコピーしても範囲が移動しません。", formula: "=VLOOKUP(A2,$F$2:$H$100,3,FALSE)" },
      { title: "例4：見つからない場合の表示", description: "IFERROR でエラーの代わりに「該当なし」と表示します。", formula: "=IFERROR(VLOOKUP(A2,$F$2:$H$100,3,FALSE),\"該当なし\")" },
    ],
    errorsTitle: "よくある間違い", errors: [["#N/A が表示される", "値の存在、文字列と数値の形式、余分な空白を確認します。"], ["列番号が違う", "選択範囲の左端を1列目として数えます。"], ["FALSE がない", "番号や氏名の完全一致検索には FALSE を使います。"], ["検索列が左端にない", "VLOOKUP は右方向のみです。XLOOKUP または INDEX＋MATCH を使います。"]],
    ctaTitle: "検索範囲が複雑ですか？", ctaText: "検索列と返す列を説明すると EverySheet が数式を作成します。", ctaButton: "VLOOKUP 数式を作成", back: "← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides: "Excel 教学中心", formulaTool: "公式生成器", badge: "查找函数", title: "Excel VLOOKUP 函数教学",
    subtitle: "根据编号或姓名查找对应数据，一次学会精确匹配、固定范围与常见错误。",
    introTitle: "VLOOKUP 是什么？", intro: "VLOOKUP 在数据表最左列查找指定值，再返回同一行的其他数据。常用于员工、商品、客户与成绩资料。",
    tags: ["员工编号带出姓名", "商品编号带出价格", "客户编号带出电话", "学号带出成绩"],
    syntaxTitle: "VLOOKUP 语法", syntaxFormula: "=VLOOKUP(查找值, 数据范围, 返回列数, FALSE)",
    syntaxItems: [["查找值", "例如 A2 的员工编号"], ["数据范围", "例如 员工资料!A:B"], ["返回列数", "第 2 列就填 2"], ["匹配方式", "FALSE 代表精确匹配"]],
    examples: [
      { title: "示例一：用员工编号查姓名", description: "A2 是员工编号，到员工资料表查找并返回第2列姓名。", formula: "=VLOOKUP(A2,员工资料!A:B,2,FALSE)" },
      { title: "示例二：用商品编号查价格", description: "A2 是商品编号，商品表第3列是价格。", formula: "=VLOOKUP(A2,商品表!A:C,3,FALSE)" },
      { title: "示例三：复制公式时固定范围", description: "使用 $ 固定范围，向下复制公式时数据表不会移动。", formula: "=VLOOKUP(A2,$F$2:$H$100,3,FALSE)" },
      { title: "示例四：找不到时显示提示", description: "搭配 IFERROR，在找不到时显示“未找到”。", formula: "=IFERROR(VLOOKUP(A2,$F$2:$H$100,3,FALSE),\"未找到\")" },
    ],
    errorsTitle: "常见错误", errors: [["出现 #N/A", "确认查找值存在、文本与数字格式一致，并删除多余空格。"], ["返回列数错误", "从数据范围最左列开始计算列数。"], ["忘记使用 FALSE", "编号或姓名查找通常应使用 FALSE 精确匹配。"], ["查找列不在最左边", "VLOOKUP 只能向右查找，可改用 XLOOKUP 或 INDEX＋MATCH。"]],
    ctaTitle: "数据范围很复杂，不知道怎么写？", ctaText: "描述查找列与返回列，EverySheet 会帮你创建公式。", ctaButton: "生成 VLOOKUP 公式", back: "← 返回 Excel 教学中心",
  },
};
