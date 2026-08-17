import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const orContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides:"Excel 教學中心", formulaTool:"公式產生器", badge:"邏輯函數", title:"Excel OR 函數教學", subtitle:"多個條件只要其中一個成立即可，適合替代條件、提醒、資格與例外狀況判斷。",
    introTitle:"OR 是什麼？", intro:"OR 會檢查所有條件；只要其中一個成立就回傳 TRUE，只有全部不成立時才回傳 FALSE。", tags:["任一科及格","任一證件有效","逾期或缺貨提醒","多種資格擇一"],
    syntaxTitle:"OR 語法", syntaxFormula:"=OR(條件1, 條件2, …)", syntaxItems:[["條件1","例如 B2>=60"],["條件2","例如 C2>=60"],["任一成立","回傳 TRUE"],["全部不成立","回傳 FALSE"]],
    examples:[
      {title:"範例一：任一科及格",description:"國文或英文任一科達 60 分即回傳 TRUE。",formula:"=OR(B2>=60,C2>=60)"},
      {title:"範例二：搭配 IF 顯示文字",description:"任一證件仍有效就顯示可辦理。",formula:'=IF(OR(B2>=TODAY(),C2>=TODAY()),"可辦理","證件皆過期")'},
      {title:"範例三：異常提醒",description:"庫存為 0 或到期日早於今天就顯示警告。",formula:'=IF(OR(B2=0,C2<TODAY()),"需要處理","正常")'},
      {title:"範例四：文字條件擇一",description:"狀態是急件或最高優先時標記優先處理。",formula:'=OR(B2="急件",B2="最高優先")'},
    ],
    tipsTitle:"實用技巧", tips:[["OR 是任一成立","若要求全部條件成立，應使用 AND。"],["搭配 IF 顯示文字","OR 本身只回傳 TRUE 或 FALSE。"],["可與 AND 組合","例如年齡達標，且兩種證件任一有效。"],["避免重複計數","用多個 COUNTIF 相加做 OR 統計時，重複符合者可能被計算兩次。"]],
    errorsTitle:"常見錯誤", errors:[["把 OR 當成 AND","OR 只要一項成立；所有條件都必要時請使用 AND。"],["文字未加雙引號","急件、完成等文字條件必須放在雙引號內。"],["括號層級錯誤","OR 與 IF、AND 組合時，要確認每層括號完整。"],["直接顯示 TRUE／FALSE","若要顯示提醒文字，請搭配 IF。"]],
    ctaTitle:"替代條件太多，不知道怎麼組合？", ctaText:"描述哪些條件任一成立即可，EveryFormula 會建立 OR 或 IF 公式。", ctaButton:"建立條件公式", back:"← 返回 Excel 教學中心",
  },
  en: {
    guides:"Excel Guides", formulaTool:"Formula tool", badge:"Logical function", title:"Excel OR Guide", subtitle:"Return true when any condition is met for alternatives, alerts, eligibility, and exception rules.",
    introTitle:"What does OR do?", intro:"OR returns TRUE when at least one condition is true. It returns FALSE only when every condition is false.", tags:["Pass either subject","Either document valid","Overdue or out of stock","Alternative qualifications"],
    syntaxTitle:"OR syntax", syntaxFormula:"=OR(condition1, condition2, …)", syntaxItems:[["Condition 1","For example, B2>=60"],["Condition 2","For example, C2>=60"],["Any is true","Returns TRUE"],["All are false","Returns FALSE"]],
    examples:[
      {title:"Example 1: Pass either subject",description:"Return TRUE when either score is at least 60.",formula:"=OR(B2>=60,C2>=60)"},
      {title:"Example 2: Show text with IF",description:"Proceed when either document remains valid.",formula:'=IF(OR(B2>=TODAY(),C2>=TODAY()),"Proceed","Both expired")'},
      {title:"Example 3: Exception alert",description:"Warn when stock is zero or the expiry date has passed.",formula:'=IF(OR(B2=0,C2<TODAY()),"Action needed","Normal")'},
      {title:"Example 4: Alternative text",description:"Flag an item when either priority label is present.",formula:'=OR(B2="Urgent",B2="Highest")'},
    ],
    tipsTitle:"Useful tips", tips:[["OR means any", "Use AND when every condition is required."],["Use IF for custom text","OR alone returns only TRUE or FALSE."],["Combine with AND","Require one condition plus either of two alternatives."],["Avoid double counting","Adding COUNTIF results can count rows twice when both criteria match."]],
    errorsTitle:"Common mistakes", errors:[["Confusing OR with AND","OR needs one true condition; AND needs all."],["Text is not quoted","Text criteria require double quotation marks."],["Parentheses are misplaced","Check every layer when combining OR, IF, and AND."],["TRUE/FALSE is displayed","Wrap OR in IF to show a message."]],
    ctaTitle:"Too many alternatives to combine?", ctaText:"Describe which conditions may qualify and EveryFormula will build the OR or IF formula.", ctaButton:"Create a condition formula", back:"← Back to Excel Guides",
  },
  ja: {
    guides:"Excel 学習センター", formulaTool:"数式ツール", badge:"論理関数", title:"Excel OR 関数ガイド", subtitle:"複数条件のどれか1つが成立すれば TRUE を返し、代替条件や警告を判定します。",
    introTitle:"OR 関数とは？", intro:"OR は1つでも条件が成立すれば TRUE を返し、すべて不成立の場合だけ FALSE を返します。", tags:["どちらかの科目に合格","どちらかの証明書が有効","期限切れまたは在庫切れ","複数資格の選択"],
    syntaxTitle:"OR の構文", syntaxFormula:"=OR(条件1, 条件2, …)", syntaxItems:[["条件1","例：B2>=60"],["条件2","例：C2>=60"],["どれか成立","TRUE"],["すべて不成立","FALSE"]],
    examples:[
      {title:"例1：どちらかの科目に合格",description:"どちらかが60点以上なら TRUE。",formula:"=OR(B2>=60,C2>=60)"},
      {title:"例2：IF と組み合わせる",description:"どちらかの証明書が有効なら手続き可能。",formula:'=IF(OR(B2>=TODAY(),C2>=TODAY()),"手続き可","両方期限切れ")'},
      {title:"例3：異常警告",description:"在庫0または期限切れなら警告します。",formula:'=IF(OR(B2=0,C2<TODAY()),"要対応","正常")'},
      {title:"例4：文字条件の選択",description:"緊急または最優先なら TRUE。",formula:'=OR(B2="緊急",B2="最優先")'},
    ],
    tipsTitle:"実用的なヒント", tips:[["OR はどれか1つ","すべて必要なら AND を使います。"],["IF で文字表示","OR 単体は TRUE／FALSE のみです。"],["AND と組み合わせる","必須条件と選択条件を組み合わせます。"],["重複計数に注意","COUNTIF の加算では両方に一致する行を二重計数する場合があります。"]],
    errorsTitle:"よくある間違い", errors:[["OR と AND の混同","OR は1項目、AND はすべての成立が必要です。"],["文字に引用符がない","文字条件はダブルクォーテーションで囲みます。"],["括弧の階層が違う","OR、IF、AND の各括弧を確認します。"],["TRUE／FALSE が表示","メッセージ表示には IF を使います。"]],
    ctaTitle:"代替条件の組み合わせが分かりませんか？", ctaText:"どの条件が1つでも成立すればよいか説明すると EveryFormula が数式を作成します。", ctaButton:"条件数式を作成", back:"← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides:"Excel 教学中心", formulaTool:"公式生成器", badge:"逻辑函数", title:"Excel OR 函数教学", subtitle:"多个条件只要一个成立即可，适合替代条件、提醒、资格与例外判断。",
    introTitle:"OR 是什么？", intro:"OR 检查所有条件；只要一个成立就返回 TRUE，只有全部不成立时返回 FALSE。", tags:["任一科及格","任一证件有效","逾期或缺货提醒","多种资格选一"],
    syntaxTitle:"OR 语法", syntaxFormula:"=OR(条件1, 条件2, …)", syntaxItems:[["条件1","例如 B2>=60"],["条件2","例如 C2>=60"],["任一成立","返回 TRUE"],["全部不成立","返回 FALSE"]],
    examples:[
      {title:"示例一：任一科及格",description:"任一科达到 60 分就返回 TRUE。",formula:"=OR(B2>=60,C2>=60)"},
      {title:"示例二：搭配 IF 显示文本",description:"任一证件仍有效就显示可办理。",formula:'=IF(OR(B2>=TODAY(),C2>=TODAY()),"可办理","证件均过期")'},
      {title:"示例三：异常提醒",description:"库存为 0 或到期日早于今天时显示警告。",formula:'=IF(OR(B2=0,C2<TODAY()),"需要处理","正常")'},
      {title:"示例四：文本条件选一",description:"状态是急件或最高优先时返回 TRUE。",formula:'=OR(B2="急件",B2="最高优先")'},
    ],
    tipsTitle:"实用技巧", tips:[["OR 是任一成立","要求全部成立应使用 AND。"],["搭配 IF 显示文本","OR 本身只返回 TRUE 或 FALSE。"],["可以与 AND 组合","组合必选条件与任选条件。"],["避免重复计数","多个 COUNTIF 相加时，重复符合者可能被计算两次。"]],
    errorsTitle:"常见错误", errors:[["把 OR 当成 AND","OR 只需一项成立；所有条件都必要时使用 AND。"],["文本未加双引号","急件、完成等文本条件必须放在双引号内。"],["括号层级错误","组合 OR、IF、AND 时检查每层括号。"],["直接显示 TRUE／FALSE","如需提醒文本，请搭配 IF。"]],
    ctaTitle:"替代条件太多，不知道怎么组合？", ctaText:"描述哪些条件任一成立即可，EveryFormula 会创建 OR 或 IF 公式。", ctaButton:"生成条件公式", back:"← 返回 Excel 教学中心",
  },
};
