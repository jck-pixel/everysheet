import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const andContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides:"Excel 教學中心", formulaTool:"公式產生器", badge:"邏輯函數", title:"Excel AND 函數教學", subtitle:"確認多個條件是否全部成立，並搭配 IF 完成資格、出勤、審核與達標判斷。",
    introTitle:"AND 是什麼？", intro:"AND 會檢查所有條件；只有每一個條件都成立時才回傳 TRUE，只要其中一個不成立就回傳 FALSE。", tags:["分數與出席率","資格審核","庫存與效期","多項條件達標"],
    syntaxTitle:"AND 語法", syntaxFormula:"=AND(條件1, 條件2, …)", syntaxItems:[["條件1","例如 B2>=60"],["條件2","例如 C2>=80%"],["全部成立","回傳 TRUE"],["任一不成立","回傳 FALSE"]],
    examples:[
      {title:"範例一：分數與出席率",description:"兩項都達標才回傳 TRUE。",formula:"=AND(B2>=60,C2>=80%)"},
      {title:"範例二：搭配 IF 顯示文字",description:"全部成立顯示通過，否則顯示未通過。",formula:'=IF(AND(B2>=60,C2>=80%),"通過","未通過")'},
      {title:"範例三：日期與狀態",description:"到期日尚未超過今天，且狀態是啟用。",formula:'=AND(B2>=TODAY(),C2="啟用")'},
      {title:"範例四：三個條件",description:"年齡、年資及測驗分數都要達標。",formula:"=AND(B2>=18,C2>=1,D2>=80)"},
    ],
    tipsTitle:"實用技巧", tips:[["AND 只回傳真假","需要顯示自訂文字時，將 AND 放進 IF。"],["條件不限兩個","可加入多個條件，但公式過長時應拆分輔助欄。"],["可搭配 OR","例如必須符合資格，且兩種證件任一有效。"],["空白要注意","比較數字或日期時，空白可能被當成 0。"]],
    errorsTitle:"常見錯誤", errors:[["以為任一成立即可","AND 要求所有條件成立；任一成立應使用 OR。"],["文字沒有雙引號","文字條件如「啟用」必須放在雙引號內。"],["百分比格式錯誤","80% 可寫成 80% 或 0.8，需確認儲存格實際值。"],["直接顯示 TRUE／FALSE","若希望顯示通過／未通過，需搭配 IF。"]],
    ctaTitle:"多個條件不知道怎麼組合？", ctaText:"描述所有必要條件，EverySheet 會建立 AND 或 IF 公式。", ctaButton:"建立條件公式", back:"← 返回 Excel 教學中心",
  },
  en: {
    guides:"Excel Guides", formulaTool:"Formula tool", badge:"Logical function", title:"Excel AND Guide", subtitle:"Check whether every condition is true and combine AND with IF for eligibility, attendance, and approval rules.",
    introTitle:"What does AND do?", intro:"AND returns TRUE only when every condition is true. If any one condition is false, it returns FALSE.", tags:["Score and attendance","Eligibility checks","Stock and expiry","Multiple requirements"],
    syntaxTitle:"AND syntax", syntaxFormula:"=AND(condition1, condition2, …)", syntaxItems:[["Condition 1","For example, B2>=60"],["Condition 2","For example, C2>=80%"],["All are true","Returns TRUE"],["Any is false","Returns FALSE"]],
    examples:[
      {title:"Example 1: Score and attendance",description:"Both requirements must be met.",formula:"=AND(B2>=60,C2>=80%)"},
      {title:"Example 2: Show text with IF",description:"Display Pass only when both conditions are true.",formula:'=IF(AND(B2>=60,C2>=80%),"Pass","Fail")'},
      {title:"Example 3: Date and status",description:"The expiry date has not passed and status is Active.",formula:'=AND(B2>=TODAY(),C2="Active")'},
      {title:"Example 4: Three conditions",description:"Age, service, and test score must all qualify.",formula:"=AND(B2>=18,C2>=1,D2>=80)"},
    ],
    tipsTitle:"Useful tips", tips:[["AND returns Boolean values","Wrap it in IF to display custom text."],["More than two tests","You can add many conditions, but helper columns improve long formulas."],["Combine with OR","Require one condition plus either of two alternatives."],["Watch blank cells","Blanks may be treated as zero in numeric or date comparisons."]],
    errorsTitle:"Common mistakes", errors:[["Expecting any condition to pass","AND requires all conditions; use OR when any one may pass."],["Text is not quoted","Text criteria such as Active require double quotation marks."],["Percentage format differs","80% equals 0.8; confirm the stored value."],["TRUE/FALSE is displayed","Use IF when you want Pass/Fail text."]],
    ctaTitle:"Not sure how to combine requirements?", ctaText:"Describe every required condition and EverySheet will build the AND or IF formula.", ctaButton:"Create a condition formula", back:"← Back to Excel Guides",
  },
  ja: {
    guides:"Excel 学習センター", formulaTool:"数式ツール", badge:"論理関数", title:"Excel AND 関数ガイド", subtitle:"複数条件がすべて成立するか確認し、IF と組み合わせて資格や出席を判定します。",
    introTitle:"AND 関数とは？", intro:"AND はすべての条件が成立した場合だけ TRUE を返します。1つでも不成立なら FALSE です。", tags:["点数と出席率","資格審査","在庫と期限","複数要件"],
    syntaxTitle:"AND の構文", syntaxFormula:"=AND(条件1, 条件2, …)", syntaxItems:[["条件1","例：B2>=60"],["条件2","例：C2>=80%"],["すべて成立","TRUE"],["1つでも不成立","FALSE"]],
    examples:[
      {title:"例1：点数と出席率",description:"両方の基準を満たす必要があります。",formula:"=AND(B2>=60,C2>=80%)"},
      {title:"例2：IF と組み合わせる",description:"両方成立なら合格を表示します。",formula:'=IF(AND(B2>=60,C2>=80%),"合格","不合格")'},
      {title:"例3：日付と状態",description:"期限内かつ状態が有効か確認します。",formula:'=AND(B2>=TODAY(),C2="有効")'},
      {title:"例4：3つの条件",description:"年齢、勤続年数、試験点数がすべて基準以上。",formula:"=AND(B2>=18,C2>=1,D2>=80)"},
    ],
    tipsTitle:"実用的なヒント", tips:[["結果は TRUE／FALSE","文字を表示する場合は IF に入れます。"],["複数条件を追加可能","長すぎる場合は補助列を使います。"],["OR と組み合わせる","必須条件と選択条件を組み合わせられます。"],["空白に注意","数値や日付比較では空白が 0 と扱われる場合があります。"]],
    errorsTitle:"よくある間違い", errors:[["どれか1つでよいと思う","AND はすべて必要です。どれか1つなら OR を使います。"],["文字に引用符がない","文字条件はダブルクォーテーションで囲みます。"],["パーセント形式","80% と 0.8 は同じですが、保存値を確認します。"],["TRUE／FALSE が表示", "合格などを表示するには IF を使います。"]],
    ctaTitle:"複数条件の組み合わせが分かりませんか？", ctaText:"必要条件を説明すると EverySheet が AND または IF 数式を作成します。", ctaButton:"条件数式を作成", back:"← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides:"Excel 教学中心", formulaTool:"公式生成器", badge:"逻辑函数", title:"Excel AND 函数教学", subtitle:"确认多个条件是否全部成立，并搭配 IF 完成资格、考勤与审核判断。",
    introTitle:"AND 是什么？", intro:"AND 检查所有条件；只有每个条件都成立时返回 TRUE，只要一个不成立就返回 FALSE。", tags:["分数与出勤率","资格审核","库存与效期","多项条件达标"],
    syntaxTitle:"AND 语法", syntaxFormula:"=AND(条件1, 条件2, …)", syntaxItems:[["条件1","例如 B2>=60"],["条件2","例如 C2>=80%"],["全部成立","返回 TRUE"],["任一不成立","返回 FALSE"]],
    examples:[
      {title:"示例一：分数与出勤率",description:"两项都达标才返回 TRUE。",formula:"=AND(B2>=60,C2>=80%)"},
      {title:"示例二：搭配 IF 显示文本",description:"全部成立显示通过，否则显示未通过。",formula:'=IF(AND(B2>=60,C2>=80%),"通过","未通过")'},
      {title:"示例三：日期与状态",description:"到期日尚未超过今天且状态为启用。",formula:'=AND(B2>=TODAY(),C2="启用")'},
      {title:"示例四：三个条件",description:"年龄、工龄及测验分数都要达标。",formula:"=AND(B2>=18,C2>=1,D2>=80)"},
    ],
    tipsTitle:"实用技巧", tips:[["AND 只返回真假","需要显示自定义文本时，将 AND 放入 IF。"],["条件不限两个","可以加入多个条件，过长时建议使用辅助列。"],["可以搭配 OR","组合必选条件与任选条件。"],["注意空白", "比较数字或日期时，空白可能被当作 0。"]],
    errorsTitle:"常见错误", errors:[["以为任一成立即可","AND 要求所有条件成立；任一成立应使用 OR。"],["文本没有双引号","“启用”等文本条件必须放在双引号内。"],["百分比格式错误","80% 等于 0.8，请确认单元格实际值。"],["直接显示 TRUE／FALSE","如需显示通过／未通过，应搭配 IF。"]],
    ctaTitle:"多个条件不知道怎么组合？", ctaText:"描述所有必要条件，EverySheet 会创建 AND 或 IF 公式。", ctaButton:"生成条件公式", back:"← 返回 Excel 教学中心",
  },
};
