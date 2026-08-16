import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const datedifContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides: "Excel 教學中心", formulaTool: "公式產生器", badge: "日期與時間", title: "Excel DATEDIF 函數教學", subtitle: "計算兩個日期相差幾年、幾個月或幾天，適用於年齡、年資、合約與期限統計。",
    introTitle: "DATEDIF 是什麼？", intro: "DATEDIF 會計算開始日期與結束日期之間的差距。依單位不同，可取得完整年數、完整月數、總天數或扣除整年後的剩餘月數與天數。", tags: ["計算年齡", "計算年資", "相差月份", "相差天數"],
    syntaxTitle: "DATEDIF 語法", syntaxFormula: '=DATEDIF(開始日期, 結束日期, "單位")', syntaxItems: [["開始日期", "例如出生日期 A2"], ["結束日期", "例如 TODAY()"], ["Y", "完整年數"], ["M／D", "完整月數／總天數"]],
    examples: [
      { title: "範例一：計算年齡", description: "A2 是出生日期，計算截至今天已滿幾歲。", formula: '=DATEDIF(A2,TODAY(),"Y")' },
      { title: "範例二：計算完整年資", description: "A2 是到職日，B2 是離職日或統計日。", formula: '=DATEDIF(A2,B2,"Y")' },
      { title: "範例三：顯示幾年幾個月", description: "Y 取得完整年數，YM 取得扣除整年後的剩餘月數。", formula: '=DATEDIF(A2,B2,"Y")&"年"&DATEDIF(A2,B2,"YM")&"個月"' },
      { title: "範例四：計算總天數", description: "計算開始日到結束日相差的總天數。", formula: '=DATEDIF(A2,B2,"D")' },
    ],
    tipsTitle: "單位怎麼選？", tips: [["Y", "兩日期之間的完整年數。"], ["M", "兩日期之間的完整月數。"], ["D", "兩日期之間的總天數。"], ["YM／MD／YD", "忽略整年或整月後的剩餘差距；MD 在部分日期組合可能不直覺。"]],
    errorsTitle: "常見錯誤", errors: [["出現 #NUM!", "開始日期晚於結束日期時會出錯，請確認日期順序。"], ["日期其實是文字", "看起來像日期不代表 Excel 已辨識，請轉成真正的日期值。"], ["單位沒有雙引號", "Y、M、D、YM 等單位必須寫在雙引號內。"], ["找不到函數提示", "DATEDIF 是相容性函數，輸入時可能不出現在提示清單，但完整公式仍可使用。"]],
    ctaTitle: "日期條件很複雜，不知道怎麼算？", ctaText: "描述開始日、結束日與想要的結果，EverySheet 會建立日期公式。", ctaButton: "建立日期公式", back: "← 返回 Excel 教學中心",
  },
  en: {
    guides: "Excel Guides", formulaTool: "Formula tool", badge: "Date & time", title: "Excel DATEDIF Guide", subtitle: "Calculate complete years, months, or days between two dates for age, service, contracts, and deadlines.",
    introTitle: "What does DATEDIF do?", intro: "DATEDIF calculates the difference between a start and end date. Its unit controls whether the result is complete years, complete months, total days, or a remaining portion.", tags: ["Calculate age", "Years of service", "Months elapsed", "Days elapsed"],
    syntaxTitle: "DATEDIF syntax", syntaxFormula: '=DATEDIF(start_date, end_date, "unit")', syntaxItems: [["Start date", "For example, birth date in A2"], ["End date", "For example, TODAY()"], ["Y", "Complete years"], ["M / D", "Complete months / total days"]],
    examples: [
      { title: "Example 1: Calculate age", description: "A2 contains a birth date; return completed years as of today.", formula: '=DATEDIF(A2,TODAY(),"Y")' },
      { title: "Example 2: Completed years of service", description: "A2 is the start date and B2 is the end or reporting date.", formula: '=DATEDIF(A2,B2,"Y")' },
      { title: "Example 3: Years and remaining months", description: "Y returns full years and YM returns months remaining after those years.", formula: '=DATEDIF(A2,B2,"Y")&" years "&DATEDIF(A2,B2,"YM")&" months"' },
      { title: "Example 4: Total days", description: "Return the total number of days between the dates.", formula: '=DATEDIF(A2,B2,"D")' },
    ],
    tipsTitle: "Choosing a unit", tips: [["Y", "Complete years between dates."], ["M", "Complete months between dates."], ["D", "Total days between dates."], ["YM / MD / YD", "Remaining difference after ignoring years or months; MD can be unintuitive for some date combinations."]],
    errorsTitle: "Common mistakes", errors: [["#NUM! appears", "The start date must not be later than the end date."], ["The date is text", "A value that looks like a date may not be recognized by Excel."], ["The unit is not quoted", "Y, M, D, and other units require double quotation marks."], ["No function suggestion appears", "DATEDIF is a compatibility function and may not appear in autocomplete, but a complete formula still works."]],
    ctaTitle: "Is your date calculation complicated?", ctaText: "Describe the start date, end date, and desired result and EverySheet will build the formula.", ctaButton: "Create a date formula", back: "← Back to Excel Guides",
  },
  ja: {
    guides: "Excel 学習センター", formulaTool: "数式ツール", badge: "日付と時刻", title: "Excel DATEDIF 関数ガイド", subtitle: "2つの日付の年数、月数、日数の差を計算し、年齢、勤続年数、期限管理に利用します。",
    introTitle: "DATEDIF 関数とは？", intro: "DATEDIF は開始日と終了日の差を計算します。単位によって満年数、満月数、総日数、年や月を除いた残りを返します。", tags: ["年齢計算", "勤続年数", "経過月数", "経過日数"],
    syntaxTitle: "DATEDIF の構文", syntaxFormula: '=DATEDIF(開始日, 終了日, "単位")', syntaxItems: [["開始日", "例：A2 の生年月日"], ["終了日", "例：TODAY()"], ["Y", "満年数"], ["M / D", "満月数 / 総日数"]],
    examples: [
      { title: "例1：年齢を計算", description: "A2 の生年月日から今日時点の満年齢を求めます。", formula: '=DATEDIF(A2,TODAY(),"Y")' },
      { title: "例2：勤続年数を計算", description: "A2 は入社日、B2 は退職日または基準日です。", formula: '=DATEDIF(A2,B2,"Y")' },
      { title: "例3：何年何か月と表示", description: "Y は満年数、YM は年を除いた残りの月数です。", formula: '=DATEDIF(A2,B2,"Y")&"年"&DATEDIF(A2,B2,"YM")&"か月"' },
      { title: "例4：総日数を計算", description: "開始日から終了日までの総日数を返します。", formula: '=DATEDIF(A2,B2,"D")' },
    ],
    tipsTitle: "単位の選び方", tips: [["Y", "2日付間の満年数。"], ["M", "2日付間の満月数。"], ["D", "2日付間の総日数。"], ["YM / MD / YD", "年や月を除いた残り。MD は一部の日付で直感的でない場合があります。"]],
    errorsTitle: "よくある間違い", errors: [["#NUM! が表示", "開始日が終了日より後になっていないか確認します。"], ["日付が文字列", "見た目が日付でも Excel が日付値として認識しているとは限りません。"], ["単位に引用符がない", "Y、M、D などはダブルクォーテーションで囲みます。"], ["候補に表示されない", "互換性関数のため候補に出ない場合がありますが、完全な数式は使用できます。"]],
    ctaTitle: "日付計算が複雑ですか？", ctaText: "開始日、終了日、希望する結果を説明すると EverySheet が数式を作成します。", ctaButton: "日付数式を作成", back: "← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides: "Excel 教学中心", formulaTool: "公式生成器", badge: "日期与时间", title: "Excel DATEDIF 函数教学", subtitle: "计算两个日期相差几年、几个月或几天，适用于年龄、工龄、合同与期限统计。",
    introTitle: "DATEDIF 是什么？", intro: "DATEDIF 计算开始日期与结束日期之间的差距。根据单位可返回完整年数、完整月数、总天数或剩余月份与天数。", tags: ["计算年龄", "计算工龄", "相差月份", "相差天数"],
    syntaxTitle: "DATEDIF 语法", syntaxFormula: '=DATEDIF(开始日期, 结束日期, "单位")', syntaxItems: [["开始日期", "例如 A2 的出生日期"], ["结束日期", "例如 TODAY()"], ["Y", "完整年数"], ["M / D", "完整月数 / 总天数"]],
    examples: [
      { title: "示例一：计算年龄", description: "A2 是出生日期，计算截至今天的周岁。", formula: '=DATEDIF(A2,TODAY(),"Y")' },
      { title: "示例二：计算完整工龄", description: "A2 是入职日，B2 是离职日或统计日。", formula: '=DATEDIF(A2,B2,"Y")' },
      { title: "示例三：显示几年几个月", description: "Y 返回完整年数，YM 返回扣除整年后的剩余月数。", formula: '=DATEDIF(A2,B2,"Y")&"年"&DATEDIF(A2,B2,"YM")&"个月"' },
      { title: "示例四：计算总天数", description: "返回开始日到结束日的总天数。", formula: '=DATEDIF(A2,B2,"D")' },
    ],
    tipsTitle: "单位怎么选？", tips: [["Y", "两个日期间的完整年数。"], ["M", "两个日期间的完整月数。"], ["D", "两个日期间的总天数。"], ["YM / MD / YD", "忽略整年或整月后的剩余差距；MD 在部分日期组合中可能不直观。"]],
    errorsTitle: "常见错误", errors: [["出现 #NUM!", "开始日期不能晚于结束日期。"], ["日期其实是文本", "看起来像日期不代表 Excel 已识别为日期值。"], ["单位没有双引号", "Y、M、D 等单位必须放在双引号内。"], ["没有函数提示", "DATEDIF 是兼容性函数，可能不显示在提示列表，但完整公式仍可使用。"]],
    ctaTitle: "日期条件复杂，不知道怎么算？", ctaText: "描述开始日、结束日与目标结果，EverySheet 会创建日期公式。", ctaButton: "生成日期公式", back: "← 返回 Excel 教学中心",
  },
};
