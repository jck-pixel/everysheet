import { AppLanguage } from "../../i18n";

export type XlookupGuideContent = {
  guides: string; formulaTool: string; badge: string; title: string; subtitle: string;
  introTitle: string; intro: string; tags: string[]; syntaxTitle: string; syntaxFormula: string;
  syntaxItems: [string, string][]; examples: { title: string; description: string; formula: string }[];
  compareTitle: string; compareItems: [string, string][]; errorsTitle: string; errors: [string, string][];
  ctaTitle: string; ctaText: string; ctaButton: string; back: string;
};

export const xlookupGuideContent: Record<AppLanguage, XlookupGuideContent> = {
  "zh-TW": {
    guides: "Excel 教學中心", formulaTool: "公式產生器", badge: "查找函數", title: "Excel XLOOKUP 函數教學",
    subtitle: "比 VLOOKUP 更直覺的現代查找方式，可向左或向右查找，並自訂找不到時的結果。",
    introTitle: "XLOOKUP 是什麼？", intro: "XLOOKUP 會在一個範圍中尋找指定值，再從另一個範圍傳回同列資料。它不必計算欄數，也不限制查找方向。",
    tags: ["員工編號查姓名", "商品名稱查價格", "由右向左查找", "找不到時顯示提示"],
    syntaxTitle: "XLOOKUP 語法", syntaxFormula: "=XLOOKUP(查找值, 查找範圍, 回傳範圍, [找不到時])",
    syntaxItems: [["查找值", "例如 A2 的員工編號"], ["查找範圍", "例如 員工資料!A:A"], ["回傳範圍", "例如 員工資料!B:B"], ["找不到時", "例如「查無資料」"]],
    examples: [
      { title: "範例一：員工編號查姓名", description: "在員工資料 A 欄尋找 A2 的編號，傳回 B 欄姓名。", formula: '=XLOOKUP(A2,員工資料!A:A,員工資料!B:B,"查無資料")' },
      { title: "範例二：商品名稱查價格", description: "在商品表 B 欄尋找名稱，傳回 C 欄價格。", formula: '=XLOOKUP(A2,商品表!B:B,商品表!C:C,"查無商品")' },
      { title: "範例三：向左查找", description: "在 B 欄尋找姓名，再傳回左側 A 欄的員工編號。", formula: '=XLOOKUP(D2,員工資料!B:B,員工資料!A:A,"查無資料")' },
      { title: "範例四：同時傳回多欄", description: "回傳範圍選取 B:D，可一次帶出姓名、部門與薪資。", formula: '=XLOOKUP(A2,員工資料!A:A,員工資料!B:D,"查無資料")' },
    ],
    compareTitle: "XLOOKUP 與 VLOOKUP 的差別", compareItems: [["不必計算欄數", "直接指定要回傳的範圍。"], ["可向左查找", "回傳欄可以在查找欄的左側。"], ["內建找不到提示", "不一定要另外搭配 IFERROR。"], ["適用版本", "主要支援 Microsoft 365 與新版 Excel。"]],
    errorsTitle: "常見錯誤", errors: [["出現 #NAME?", "Excel 版本可能不支援 XLOOKUP；舊版可改用 VLOOKUP 或 INDEX＋MATCH。"], ["查找與回傳範圍大小不同", "兩個範圍必須有相同的列數或欄數。"], ["文字與數字格式不同", "例如文字「001」不一定等於數字 1，請先統一格式。"], ["整欄範圍造成速度變慢", "大型檔案可改用 A2:A5000 等實際資料範圍。"]],
    ctaTitle: "不知道查找範圍與回傳範圍怎麼選？", ctaText: "描述資料位置，EveryFormula 會替你建立 XLOOKUP 公式。", ctaButton: "建立 XLOOKUP 公式", back: "← 返回 Excel 教學中心",
  },
  en: {
    guides: "Excel Guides", formulaTool: "Formula tool", badge: "Lookup function", title: "Excel XLOOKUP Guide",
    subtitle: "A modern alternative to VLOOKUP that can look left or right and display a custom result when no match is found.",
    introTitle: "What does XLOOKUP do?", intro: "XLOOKUP searches one range and returns the matching row from another. There is no column number to count and no restriction on lookup direction.",
    tags: ["ID to employee name", "Product to price", "Look left", "Custom not-found message"],
    syntaxTitle: "XLOOKUP syntax", syntaxFormula: "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])",
    syntaxItems: [["Lookup value", "For example, the ID in A2"], ["Lookup range", "For example, Employees!A:A"], ["Return range", "For example, Employees!B:B"], ["If not found", "For example, \"Not found\""]],
    examples: [
      { title: "Example 1: Find an employee name", description: "Find the ID from A2 in column A and return the name from column B.", formula: '=XLOOKUP(A2,Employees!A:A,Employees!B:B,"Not found")' },
      { title: "Example 2: Find a product price", description: "Find the product name in column B and return its price from column C.", formula: '=XLOOKUP(A2,Products!B:B,Products!C:C,"Not found")' },
      { title: "Example 3: Look to the left", description: "Find a name in column B and return the employee ID from column A.", formula: '=XLOOKUP(D2,Employees!B:B,Employees!A:A,"Not found")' },
      { title: "Example 4: Return multiple columns", description: "Select B:D as the return range to return name, department, and salary together.", formula: '=XLOOKUP(A2,Employees!A:A,Employees!B:D,"Not found")' },
    ],
    compareTitle: "XLOOKUP vs VLOOKUP", compareItems: [["No column counting", "Select the return range directly."], ["Looks left or right", "The return column may be left of the lookup column."], ["Built-in not-found result", "IFERROR is often unnecessary."], ["Excel version", "Primarily available in Microsoft 365 and newer Excel versions."]],
    errorsTitle: "Common mistakes", errors: [["#NAME? appears", "Your Excel version may not support XLOOKUP. Use VLOOKUP or INDEX and MATCH instead."], ["Ranges have different sizes", "Lookup and return ranges must contain the same number of rows or columns."], ["Text and number formats differ", "Text \"001\" may not match the number 1; make the formats consistent."], ["Whole-column ranges are slow", "For large workbooks, use practical ranges such as A2:A5000."]],
    ctaTitle: "Not sure which lookup and return ranges to use?", ctaText: "Describe where your data is and EveryFormula will build the XLOOKUP formula.", ctaButton: "Create an XLOOKUP formula", back: "← Back to Excel Guides",
  },
  ja: {
    guides: "Excel 学習センター", formulaTool: "数式ツール", badge: "検索関数", title: "Excel XLOOKUP 関数ガイド",
    subtitle: "VLOOKUP より直感的で、左右どちらにも検索でき、見つからない場合の表示も指定できます。",
    introTitle: "XLOOKUP 関数とは？", intro: "XLOOKUP は1つの範囲で値を検索し、別の範囲から同じ行の値を返します。列番号を数える必要がなく、検索方向の制限もありません。",
    tags: ["社員番号から氏名", "商品名から価格", "左方向に検索", "該当なしの表示"],
    syntaxTitle: "XLOOKUP の構文", syntaxFormula: "=XLOOKUP(検索値, 検索範囲, 戻り範囲, [見つからない場合])",
    syntaxItems: [["検索値", "例：A2 の社員番号"], ["検索範囲", "例：社員!A:A"], ["戻り範囲", "例：社員!B:B"], ["見つからない場合", "例：\"該当なし\""]],
    examples: [
      { title: "例1：社員番号から氏名を検索", description: "A列で A2 の番号を検索し、B列の氏名を返します。", formula: '=XLOOKUP(A2,社員!A:A,社員!B:B,"該当なし")' },
      { title: "例2：商品名から価格を検索", description: "商品表 B列で名称を検索し、C列の価格を返します。", formula: '=XLOOKUP(A2,商品表!B:B,商品表!C:C,"該当なし")' },
      { title: "例3：左方向に検索", description: "B列の氏名を検索し、左側 A列の社員番号を返します。", formula: '=XLOOKUP(D2,社員!B:B,社員!A:A,"該当なし")' },
      { title: "例4：複数列を返す", description: "戻り範囲を B:D にすると氏名、部署、給与をまとめて返せます。", formula: '=XLOOKUP(A2,社員!A:A,社員!B:D,"該当なし")' },
    ],
    compareTitle: "XLOOKUP と VLOOKUP の違い", compareItems: [["列番号は不要", "戻り範囲を直接指定します。"], ["左右に検索可能", "検索列の左側も返せます。"], ["該当なしを指定可能", "IFERROR が不要な場合があります。"], ["対応バージョン", "主に Microsoft 365 と新しい Excel で利用できます。"]],
    errorsTitle: "よくある間違い", errors: [["#NAME? が表示される", "Excel が XLOOKUP に未対応の可能性があります。VLOOKUP などを使います。"], ["範囲サイズが異なる", "検索範囲と戻り範囲の行数または列数を一致させます。"], ["文字列と数値が違う", "文字列「001」と数値 1 は一致しない場合があります。"], ["列全体の指定が遅い", "大きいファイルでは A2:A5000 のような範囲を使います。"]],
    ctaTitle: "検索範囲と戻り範囲の選び方が分かりませんか？", ctaText: "データ位置を説明すると EveryFormula が XLOOKUP 数式を作成します。", ctaButton: "XLOOKUP 数式を作成", back: "← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides: "Excel 教学中心", formulaTool: "公式生成器", badge: "查找函数", title: "Excel XLOOKUP 函数教学",
    subtitle: "比 VLOOKUP 更直观的现代查找方式，可向左或向右查找，并自定义未找到时的结果。",
    introTitle: "XLOOKUP 是什么？", intro: "XLOOKUP 在一个范围内查找指定值，再从另一个范围返回同一行数据。无需计算列数，也不限制查找方向。",
    tags: ["员工编号查姓名", "商品名称查价格", "从右向左查找", "未找到时显示提示"],
    syntaxTitle: "XLOOKUP 语法", syntaxFormula: "=XLOOKUP(查找值, 查找范围, 返回范围, [未找到时])",
    syntaxItems: [["查找值", "例如 A2 的员工编号"], ["查找范围", "例如 员工资料!A:A"], ["返回范围", "例如 员工资料!B:B"], ["未找到时", "例如“未找到”"]],
    examples: [
      { title: "示例一：员工编号查姓名", description: "在员工资料 A 列查找 A2 的编号，返回 B 列姓名。", formula: '=XLOOKUP(A2,员工资料!A:A,员工资料!B:B,"未找到")' },
      { title: "示例二：商品名称查价格", description: "在商品表 B 列查找名称，返回 C 列价格。", formula: '=XLOOKUP(A2,商品表!B:B,商品表!C:C,"未找到")' },
      { title: "示例三：向左查找", description: "在 B 列查找姓名，再返回左侧 A 列的员工编号。", formula: '=XLOOKUP(D2,员工资料!B:B,员工资料!A:A,"未找到")' },
      { title: "示例四：同时返回多列", description: "返回范围选择 B:D，可一次返回姓名、部门与工资。", formula: '=XLOOKUP(A2,员工资料!A:A,员工资料!B:D,"未找到")' },
    ],
    compareTitle: "XLOOKUP 与 VLOOKUP 的区别", compareItems: [["无需计算列数", "直接指定返回范围。"], ["可向左查找", "返回列可以在查找列左侧。"], ["内置未找到提示", "不一定需要搭配 IFERROR。"], ["适用版本", "主要支持 Microsoft 365 与新版 Excel。"]],
    errorsTitle: "常见错误", errors: [["出现 #NAME?", "Excel 版本可能不支持 XLOOKUP，可改用 VLOOKUP 或 INDEX＋MATCH。"], ["查找与返回范围大小不同", "两个范围必须拥有相同的行数或列数。"], ["文本与数字格式不同", "文本“001”不一定等于数字 1，请统一格式。"], ["整列范围导致速度变慢", "大型文件可改用 A2:A5000 等实际范围。"]],
    ctaTitle: "不知道查找范围与返回范围怎么选？", ctaText: "描述数据位置，EveryFormula 会帮你创建 XLOOKUP 公式。", ctaButton: "生成 XLOOKUP 公式", back: "← 返回 Excel 教学中心",
  },
};
