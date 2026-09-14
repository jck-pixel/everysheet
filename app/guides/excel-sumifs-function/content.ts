import { AppLanguage } from "../../i18n";

export type SumifsContent = {
  guides: string; formulaTool: string; badge: string; title: string; subtitle: string;
  introTitle: string; intro: string; tags: string[]; syntaxTitle: string; syntaxFormula: string;
  syntaxItems: [string, string][]; examples: { title: string; description: string; formula: string }[];
  tipsTitle: string; tips: [string, string][]; errorsTitle: string; errors: [string, string][];
  ctaTitle: string; ctaText: string; ctaButton: string; back: string;
};

export const sumifsContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides: "Excel 教學中心", formulaTool: "公式產生器", badge: "統計函數", title: "Excel SUMIFS 函數教學",
    subtitle: "依照部門、日期、商品等多個條件加總資料，快速完成薪資、業績與報表統計。",
    introTitle: "SUMIFS 是什麼？", intro: "SUMIFS 會找出同時符合多個條件的資料，再將指定欄位加總。它很適合製作每月業績、部門費用與商品銷售報表。",
    tags: ["指定部門加總", "指定月份業績", "商品與地區雙條件", "排除特定狀態"],
    syntaxTitle: "SUMIFS 語法", syntaxFormula: "=SUMIFS(加總範圍, 條件範圍1, 條件1, [條件範圍2, 條件2]…)",
    syntaxItems: [["加總範圍", "要加總的金額欄"], ["條件範圍", "例如部門或日期欄"], ["條件", "例如「業務部」"], ["更多條件", "可繼續成對加入"]],
    examples: [
      { title: "範例一：加總業務部薪資", description: "C 欄是薪資、B 欄是部門，只加總「業務部」。", formula: '=SUMIFS(C:C,B:B,"業務部")' },
      { title: "範例二：商品與地區雙條件", description: "加總商品為蘋果且地區為台北的銷售額。", formula: '=SUMIFS(D:D,B:B,"蘋果",C:C,"台北")' },
      { title: "範例三：指定日期區間", description: "加總 2026 年 8 月份的金額；起訖日期分別使用 >= 與 <。", formula: '=SUMIFS(C:C,A:A,">="&DATE(2026,8,1),A:A,"<"&DATE(2026,9,1))' },
      { title: "範例四：條件來自儲存格", description: "F2 放部門名稱、G2 放地區，修改條件儲存格即可更新結果。", formula: "=SUMIFS(D:D,B:B,F2,C:C,G2)" },
    ],
    tipsTitle: "實用技巧", tips: [["文字萬用字元", "* 代表任意多個字元，? 代表一個字元。"], ["比較運算要加引號", "大於等於寫成 \">=100\"；與儲存格連接則寫 \">=\"&F2。"], ["日期用 DATE", "用 DATE 建立日期條件，較不受電腦日期格式影響。"], ["範圍大小一致", "加總範圍與每個條件範圍應從相同行開始並有相同大小。"]],
    errorsTitle: "常見錯誤", errors: [["結果是 0", "確認條件文字、空格、日期與數字格式是否一致。"], ["條件與範圍順序顛倒", "SUMIFS 的第一個參數是加總範圍，之後才是條件範圍與條件。"], ["日期條件直接輸入文字", "建議使用 DATE，或將比較符號與日期儲存格用 & 連接。"], ["範圍列數不同", "所有範圍大小必須一致，否則可能出現 #VALUE!。"]],
    ctaTitle: "條件很多，不知道公式順序？", ctaText: "描述要加總的欄位與條件，EveryFormula 會替你建立 SUMIFS 公式。", ctaButton: "建立 SUMIFS 公式", back: "← 返回 Excel 教學中心",
  },
  en: {
    guides: "Excel Guides", formulaTool: "Formula tool", badge: "Statistical function", title: "Excel SUMIFS Guide",
    subtitle: "Sum values using multiple conditions such as department, date, product, and region.",
    introTitle: "What does SUMIFS do?", intro: "SUMIFS adds values only when all specified conditions are met. It is ideal for monthly sales, department costs, and product reports.",
    tags: ["Sum by department", "Monthly sales", "Product and region", "Exclude a status"],
    syntaxTitle: "SUMIFS syntax", syntaxFormula: "=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2]…)",
    syntaxItems: [["Sum range", "The values to add"], ["Criteria range", "A department or date column"], ["Criteria", "For example, \"Sales\""], ["More criteria", "Add range and criterion pairs"]],
    examples: [
      { title: "Example 1: Sum Sales salaries", description: "Column C contains salary and B contains department.", formula: '=SUMIFS(C:C,B:B,"Sales")' },
      { title: "Example 2: Product and region", description: "Sum sales where the product is Apples and the region is Taipei.", formula: '=SUMIFS(D:D,B:B,"Apples",C:C,"Taipei")' },
      { title: "Example 3: Date range", description: "Sum values in August 2026 using an inclusive start and exclusive end date.", formula: '=SUMIFS(C:C,A:A,">="&DATE(2026,8,1),A:A,"<"&DATE(2026,9,1))' },
      { title: "Example 4: Criteria in cells", description: "F2 contains the department and G2 contains the region.", formula: "=SUMIFS(D:D,B:B,F2,C:C,G2)" },
    ],
    tipsTitle: "Useful tips", tips: [["Text wildcards", "* matches any number of characters; ? matches one character."], ["Quote comparison operators", "Use \">=100\" or join a cell as \">=\"&F2."], ["Use DATE", "DATE creates reliable date criteria across regional formats."], ["Match range sizes", "Every criteria range should align with the sum range."]],
    errorsTitle: "Common mistakes", errors: [["The result is 0", "Check text, spaces, dates, and number formats."], ["Arguments are reversed", "SUMIFS starts with the sum range, followed by criteria range and criterion pairs."], ["Date entered as plain text", "Use DATE or join the operator to a date cell with &."], ["Ranges have different sizes", "All ranges must match or Excel may return #VALUE!."]],
    ctaTitle: "Too many criteria to arrange?", ctaText: "Describe the sum column and conditions and EveryFormula will build the formula.", ctaButton: "Create a SUMIFS formula", back: "← Back to Excel Guides",
  },
  ja: {
    guides: "Excel 学習センター", formulaTool: "数式ツール", badge: "集計関数", title: "Excel SUMIFS 関数ガイド",
    subtitle: "部署、日付、商品など複数の条件に一致する数値を合計します。",
    introTitle: "SUMIFS 関数とは？", intro: "SUMIFS は複数の条件をすべて満たすデータだけを合計します。月別売上、部署費用、商品レポートに便利です。",
    tags: ["部署別合計", "月別売上", "商品と地域", "特定状態を除外"],
    syntaxTitle: "SUMIFS の構文", syntaxFormula: "=SUMIFS(合計範囲, 条件範囲1, 条件1, [条件範囲2, 条件2]…)",
    syntaxItems: [["合計範囲", "合計する金額列"], ["条件範囲", "部署や日付の列"], ["条件", "例：\"営業部\""], ["追加条件", "範囲と条件を対で追加"]],
    examples: [
      { title: "例1：営業部の給与を合計", description: "C列は給与、B列は部署です。", formula: '=SUMIFS(C:C,B:B,"営業部")' },
      { title: "例2：商品と地域の2条件", description: "商品がリンゴ、地域が東京の売上を合計します。", formula: '=SUMIFS(D:D,B:B,"リンゴ",C:C,"東京")' },
      { title: "例3：日付範囲を指定", description: "2026年8月の金額を合計します。", formula: '=SUMIFS(C:C,A:A,">="&DATE(2026,8,1),A:A,"<"&DATE(2026,9,1))' },
      { title: "例4：セルの条件を使用", description: "F2 に部署、G2 に地域を入力します。", formula: "=SUMIFS(D:D,B:B,F2,C:C,G2)" },
    ],
    tipsTitle: "実用的なヒント", tips: [["ワイルドカード", "* は任意の文字列、? は1文字を表します。"], ["比較演算子は引用符内", "\">=100\"、セル参照なら \">=\"&F2 と書きます。"], ["DATE を使用", "地域ごとの日付形式に左右されにくくなります。"], ["範囲サイズを統一", "合計範囲と条件範囲を同じ大きさにします。"]],
    errorsTitle: "よくある間違い", errors: [["結果が 0", "文字、空白、日付、数値の形式を確認します。"], ["引数の順序が逆", "最初は合計範囲、その後に条件範囲と条件です。"], ["日付を文字で入力", "DATE または日付セルとの & 結合を使います。"], ["範囲サイズが異なる", "すべての範囲を同じサイズにします。"]],
    ctaTitle: "条件の順序が分かりませんか？", ctaText: "合計列と条件を説明すると EveryFormula が数式を作成します。", ctaButton: "SUMIFS 数式を作成", back: "← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides: "Excel 教学中心", formulaTool: "公式生成器", badge: "统计函数", title: "Excel SUMIFS 函数教学",
    subtitle: "根据部门、日期、商品等多个条件汇总数据，快速完成工资、业绩与报表统计。",
    introTitle: "SUMIFS 是什么？", intro: "SUMIFS 会找出同时符合多个条件的数据，再将指定列求和。适合制作每月业绩、部门费用与商品销售报表。",
    tags: ["指定部门求和", "指定月份业绩", "商品与地区双条件", "排除特定状态"],
    syntaxTitle: "SUMIFS 语法", syntaxFormula: "=SUMIFS(求和范围, 条件范围1, 条件1, [条件范围2, 条件2]…)",
    syntaxItems: [["求和范围", "要汇总的金额列"], ["条件范围", "例如部门或日期列"], ["条件", "例如“销售部”"], ["更多条件", "继续成对添加"]],
    examples: [
      { title: "示例一：汇总销售部工资", description: "C 列是工资、B 列是部门，只汇总销售部。", formula: '=SUMIFS(C:C,B:B,"销售部")' },
      { title: "示例二：商品与地区双条件", description: "汇总商品为苹果且地区为北京的销售额。", formula: '=SUMIFS(D:D,B:B,"苹果",C:C,"北京")' },
      { title: "示例三：指定日期区间", description: "汇总 2026 年 8 月的金额。", formula: '=SUMIFS(C:C,A:A,">="&DATE(2026,8,1),A:A,"<"&DATE(2026,9,1))' },
      { title: "示例四：条件来自单元格", description: "F2 放部门、G2 放地区，修改单元格即可更新结果。", formula: "=SUMIFS(D:D,B:B,F2,C:C,G2)" },
    ],
    tipsTitle: "实用技巧", tips: [["文本通配符", "* 代表任意多个字符，? 代表一个字符。"], ["比较运算符加引号", "写成 \">=100\"；与单元格连接则写 \">=\"&F2。"], ["日期使用 DATE", "避免受到电脑日期格式影响。"], ["范围大小一致", "求和范围与每个条件范围应对齐并且大小相同。"]],
    errorsTitle: "常见错误", errors: [["结果是 0", "确认条件文本、空格、日期与数字格式是否一致。"], ["参数顺序颠倒", "第一个参数是求和范围，之后才是条件范围与条件。"], ["日期条件直接输入文本", "建议使用 DATE，或用 & 连接比较符号与日期单元格。"], ["范围行数不同", "所有范围大小必须一致，否则可能出现 #VALUE!。"]],
    ctaTitle: "条件很多，不知道公式顺序？", ctaText: "描述求和列与条件，EveryFormula 会帮你创建 SUMIFS 公式。", ctaButton: "生成 SUMIFS 公式", back: "← 返回 Excel 教学中心",
  },
};
