import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const countifsContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides: "Excel 教學中心", formulaTool: "公式產生器", badge: "統計函數", title: "Excel COUNTIFS 函數教學", subtitle: "依照部門、狀態、日期等多個條件計算筆數，快速完成出勤、人數與訂單統計。",
    introTitle: "COUNTIFS 是什麼？", intro: "COUNTIFS 會計算同時符合所有條件的資料筆數。它不會加總金額，而是回答「共有幾筆」或「共有幾人」。", tags: ["部門人數", "合格人數", "月份訂單數", "未完成工作數"],
    syntaxTitle: "COUNTIFS 語法", syntaxFormula: "=COUNTIFS(條件範圍1, 條件1, [條件範圍2, 條件2]…)", syntaxItems: [["條件範圍1", "例如部門欄"], ["條件1", "例如「業務部」"], ["條件範圍2", "例如狀態欄"], ["條件2", "例如「完成」"]],
    examples: [
      { title: "範例一：統計業務部女性人數", description: "B 欄是部門、C 欄是性別，兩個條件必須同時成立。", formula: '=COUNTIFS(B:B,"業務部",C:C,"女")' },
      { title: "範例二：統計 60 分以上且已交作業", description: "B 欄是分數、C 欄是繳交狀態。", formula: '=COUNTIFS(B:B,">=60",C:C,"已交")' },
      { title: "範例三：統計指定月份訂單", description: "計算 2026 年 8 月內且狀態為完成的訂單。", formula: '=COUNTIFS(A:A,">="&DATE(2026,8,1),A:A,"<"&DATE(2026,9,1),C:C,"完成")' },
      { title: "範例四：統計介於兩個數字", description: "計算 B 欄大於等於 60 且小於等於 80 的筆數。", formula: '=COUNTIFS(B:B,">=60",B:B,"<=80")' },
    ],
    tipsTitle: "實用技巧", tips: [["條件是同時成立", "COUNTIFS 使用 AND 邏輯，每個條件都要符合。"], ["比較符號加引號", "例如 \">=60\"；引用儲存格則寫 \">=\"&F2。"], ["日期使用 DATE", "日期區間以起日 >=、下一期起日 < 最穩定。"], ["文字可用萬用字元", "* 代表任意字串，? 代表單一字元。"]],
    errorsTitle: "常見錯誤", errors: [["結果是 0", "檢查文字空格、全形半形、日期及數字格式。"], ["條件範圍大小不同", "每個條件範圍必須具有相同列數與起訖位置。"], ["把 COUNTIFS 當 OR 使用", "COUNTIFS 是 AND；任一條件成立時需分別 COUNTIF 後相加。"], ["比較符號沒有引號", "大於、小於等運算符要放在雙引號內。"]],
    ctaTitle: "條件很多，不知道怎麼排列？", ctaText: "描述要統計的資料與條件，EverySheet 會建立 COUNTIFS 公式。", ctaButton: "建立 COUNTIFS 公式", back: "← 返回 Excel 教學中心",
  },
  en: {
    guides: "Excel Guides", formulaTool: "Formula tool", badge: "Statistical function", title: "Excel COUNTIFS Guide", subtitle: "Count records using multiple conditions such as department, status, score, and date.",
    introTitle: "What does COUNTIFS do?", intro: "COUNTIFS counts rows where every specified condition is met. It answers how many records match instead of summing their values.", tags: ["Employees by department", "Passing students", "Monthly orders", "Incomplete tasks"],
    syntaxTitle: "COUNTIFS syntax", syntaxFormula: "=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2]…)", syntaxItems: [["Criteria range 1", "For example, department"], ["Criteria 1", "For example, \"Sales\""], ["Criteria range 2", "For example, status"], ["Criteria 2", "For example, \"Done\""]],
    examples: [
      { title: "Example 1: Count women in Sales", description: "Column B contains department and C contains gender.", formula: '=COUNTIFS(B:B,"Sales",C:C,"Female")' },
      { title: "Example 2: Passing and submitted", description: "Count scores of at least 60 where work was submitted.", formula: '=COUNTIFS(B:B,">=60",C:C,"Submitted")' },
      { title: "Example 3: Orders in a month", description: "Count completed orders during August 2026.", formula: '=COUNTIFS(A:A,">="&DATE(2026,8,1),A:A,"<"&DATE(2026,9,1),C:C,"Done")' },
      { title: "Example 4: Between two numbers", description: "Count values from 60 through 80.", formula: '=COUNTIFS(B:B,">=60",B:B,"<=80")' },
    ],
    tipsTitle: "Useful tips", tips: [["All conditions must match", "COUNTIFS uses AND logic."], ["Quote operators", "Use \">=60\" or join a cell as \">=\"&F2."], ["Use DATE", "Use >= for the start and < for the next period."], ["Use wildcards", "* matches text of any length; ? matches one character."]],
    errorsTitle: "Common mistakes", errors: [["The result is 0", "Check spaces, text, dates, and number formats."], ["Ranges differ in size", "Every criteria range must have the same dimensions."], ["Expecting OR logic", "COUNTIFS uses AND; add separate COUNTIF results for OR logic."], ["Operators are not quoted", "Greater-than and less-than operators belong inside quotation marks."]],
    ctaTitle: "Too many criteria to arrange?", ctaText: "Describe what to count and EverySheet will build the COUNTIFS formula.", ctaButton: "Create a COUNTIFS formula", back: "← Back to Excel Guides",
  },
  ja: {
    guides: "Excel 学習センター", formulaTool: "数式ツール", badge: "集計関数", title: "Excel COUNTIFS 関数ガイド", subtitle: "部署、状態、日付など複数条件に一致する件数を集計します。",
    introTitle: "COUNTIFS 関数とは？", intro: "COUNTIFS は指定したすべての条件に一致するデータ件数を数えます。金額の合計ではなく「何件あるか」を求めます。", tags: ["部署別人数", "合格者数", "月別注文数", "未完了件数"],
    syntaxTitle: "COUNTIFS の構文", syntaxFormula: "=COUNTIFS(条件範囲1, 条件1, [条件範囲2, 条件2]…)", syntaxItems: [["条件範囲1", "例：部署列"], ["条件1", "例：\"営業部\""], ["条件範囲2", "例：状態列"], ["条件2", "例：\"完了\""]],
    examples: [
      { title: "例1：営業部の女性人数", description: "B列は部署、C列は性別です。", formula: '=COUNTIFS(B:B,"営業部",C:C,"女性")' },
      { title: "例2：60点以上かつ提出済み", description: "B列は点数、C列は提出状態です。", formula: '=COUNTIFS(B:B,">=60",C:C,"提出済み")' },
      { title: "例3：指定月の注文数", description: "2026年8月の完了注文を数えます。", formula: '=COUNTIFS(A:A,">="&DATE(2026,8,1),A:A,"<"&DATE(2026,9,1),C:C,"完了")' },
      { title: "例4：2つの数値の間", description: "60以上80以下の件数を数えます。", formula: '=COUNTIFS(B:B,">=60",B:B,"<=80")' },
    ],
    tipsTitle: "実用的なヒント", tips: [["すべての条件が一致", "COUNTIFS は AND 条件です。"], ["演算子は引用符内", "\">=60\" または \">=\"&F2 と書きます。"], ["DATE を使用", "開始日は >=、次の期間開始日は < を使います。"], ["ワイルドカード", "* は任意の文字列、? は1文字です。"]],
    errorsTitle: "よくある間違い", errors: [["結果が 0", "空白、文字、日付、数値形式を確認します。"], ["範囲サイズが異なる", "各条件範囲を同じ大きさにします。"], ["OR 条件と誤解", "COUNTIFS は AND です。OR は別々に数えて加算します。"], ["演算子に引用符がない", "比較演算子はダブルクォーテーション内に書きます。"]],
    ctaTitle: "条件の並べ方が分かりませんか？", ctaText: "集計内容を説明すると EverySheet が数式を作成します。", ctaButton: "COUNTIFS 数式を作成", back: "← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides: "Excel 教学中心", formulaTool: "公式生成器", badge: "统计函数", title: "Excel COUNTIFS 函数教学", subtitle: "根据部门、状态、日期等多个条件计算数量，快速完成考勤、人数与订单统计。",
    introTitle: "COUNTIFS 是什么？", intro: "COUNTIFS 会计算同时符合所有条件的数据条数。它不汇总金额，而是回答“共有多少条”。", tags: ["部门人数", "及格人数", "月份订单数", "未完成工作数"],
    syntaxTitle: "COUNTIFS 语法", syntaxFormula: "=COUNTIFS(条件范围1, 条件1, [条件范围2, 条件2]…)", syntaxItems: [["条件范围1", "例如部门列"], ["条件1", "例如“销售部”"], ["条件范围2", "例如状态列"], ["条件2", "例如“完成”"]],
    examples: [
      { title: "示例一：统计销售部女性人数", description: "B 列是部门、C 列是性别。", formula: '=COUNTIFS(B:B,"销售部",C:C,"女")' },
      { title: "示例二：60 分以上且已提交", description: "B 列是分数、C 列是提交状态。", formula: '=COUNTIFS(B:B,">=60",C:C,"已提交")' },
      { title: "示例三：统计指定月份订单", description: "计算 2026 年 8 月内已完成的订单。", formula: '=COUNTIFS(A:A,">="&DATE(2026,8,1),A:A,"<"&DATE(2026,9,1),C:C,"完成")' },
      { title: "示例四：介于两个数字", description: "计算 60 到 80 分的数量。", formula: '=COUNTIFS(B:B,">=60",B:B,"<=80")' },
    ],
    tipsTitle: "实用技巧", tips: [["所有条件同时成立", "COUNTIFS 使用 AND 逻辑。"], ["比较符号加引号", "例如 \">=60\"，引用单元格写 \">=\"&F2。"], ["日期使用 DATE", "开始日用 >=，下一期间开始日用 <。"], ["文本通配符", "* 代表任意字符串，? 代表一个字符。"]],
    errorsTitle: "常见错误", errors: [["结果是 0", "检查空格、文本、日期与数字格式。"], ["条件范围大小不同", "每个条件范围必须具有相同大小。"], ["误当成 OR 逻辑", "COUNTIFS 是 AND；OR 需要分别 COUNTIF 后相加。"], ["比较符号没有引号", "大于、小于等运算符应放在双引号内。"]],
    ctaTitle: "条件很多，不知道怎么排列？", ctaText: "描述要统计的数据与条件，EverySheet 会创建 COUNTIFS 公式。", ctaButton: "生成 COUNTIFS 公式", back: "← 返回 Excel 教学中心",
  },
};
