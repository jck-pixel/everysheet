import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const iferrorContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides: "Excel 教學中心", formulaTool: "公式產生器", badge: "邏輯函數", title: "Excel IFERROR 函數教學", subtitle: "攔截公式錯誤並顯示容易理解的提示，處理 #N/A、#DIV/0!、#VALUE! 等常見問題。",
    introTitle: "IFERROR 是什麼？", intro: "IFERROR 會先執行公式；如果結果正常就保留原結果，如果發生任何錯誤，就改為顯示你指定的文字、數字或空白。", tags: ["查無資料", "除數為 0", "格式錯誤", "暫時顯示空白"],
    syntaxTitle: "IFERROR 語法", syntaxFormula: "=IFERROR(要執行的公式, 發生錯誤時的結果)", syntaxItems: [["要執行的公式", "例如 VLOOKUP 或除法"], ["錯誤時結果", "例如「查無資料」"], ["正常時結果", "自動保留原公式結果"], ["可處理錯誤", "#N/A、#DIV/0! 等"]],
    examples: [
      { title: "範例一：VLOOKUP 找不到資料", description: "找不到員工編號時，不顯示 #N/A，改顯示「查無資料」。", formula: '=IFERROR(VLOOKUP(A2,員工資料!A:B,2,FALSE),"查無資料")' },
      { title: "範例二：避免除以 0", description: "B2 為 0 或空白造成錯誤時，結果顯示 0%。", formula: "=IFERROR(A2/B2,0%)" },
      { title: "範例三：錯誤時顯示空白", description: "尚未輸入資料時先保持儲存格空白。", formula: '=IFERROR(A2/B2,"")' },
      { title: "範例四：搭配 XLOOKUP", description: "舊版寫法可用 IFERROR 包住 XLOOKUP；新版也可直接使用 XLOOKUP 的找不到參數。", formula: '=IFERROR(XLOOKUP(A2,F:F,G:G),"查無資料")' },
    ],
    tipsTitle: "實用技巧", tips: [["先確認錯誤原因", "IFERROR 改變顯示，不會修正錯誤的資料或公式。"], ["提示要具體", "使用「查無員工」比只顯示空白更容易排查。"], ["數字與文字要分清", "後續還要計算時，錯誤結果宜使用 0，不要使用文字「0」。"], ["XLOOKUP 可直接處理", "XLOOKUP 第 4 個參數可指定找不到時的結果。"]],
    errorsTitle: "常見錯誤", errors: [["把所有錯誤隱藏成空白", "可能讓真正的公式問題不易被發現，重要報表應保留明確提示。"], ["括號位置錯誤", "IFERROR 必須包住完整公式，再於逗號後寫錯誤結果。"], ["文字沒有雙引號", "「查無資料」等文字必須放在雙引號內。"], ["誤以為只處理 #N/A", "IFERROR 會處理多種錯誤；若只想處理 #N/A，可使用 IFNA。"]],
    ctaTitle: "公式錯誤，不知道該怎麼處理？", ctaText: "貼上原公式並描述希望顯示的結果，EveryFormula 會協助修正。", ctaButton: "修正公式錯誤", back: "← 返回 Excel 教學中心",
  },
  en: {
    guides: "Excel Guides", formulaTool: "Formula tool", badge: "Logical function", title: "Excel IFERROR Guide", subtitle: "Replace #N/A, #DIV/0!, #VALUE!, and other errors with a clear message or fallback value.",
    introTitle: "What does IFERROR do?", intro: "IFERROR evaluates a formula. It keeps the normal result when successful and returns your chosen fallback when any error occurs.", tags: ["Not found", "Division by zero", "Invalid value", "Show a blank"],
    syntaxTitle: "IFERROR syntax", syntaxFormula: "=IFERROR(value, value_if_error)", syntaxItems: [["Value", "A lookup, division, or formula"], ["If error", "For example, \"Not found\""], ["Normal result", "The original result is retained"], ["Errors handled", "#N/A, #DIV/0!, and more"]],
    examples: [
      { title: "Example 1: VLOOKUP not found", description: "Display Not found instead of #N/A.", formula: '=IFERROR(VLOOKUP(A2,Employees!A:B,2,FALSE),"Not found")' },
      { title: "Example 2: Avoid division by zero", description: "Return 0% when B2 is zero or blank.", formula: "=IFERROR(A2/B2,0%)" },
      { title: "Example 3: Show a blank", description: "Keep the result cell blank until data is entered.", formula: '=IFERROR(A2/B2,"")' },
      { title: "Example 4: With XLOOKUP", description: "IFERROR can wrap XLOOKUP, although XLOOKUP also has a built-in not-found argument.", formula: '=IFERROR(XLOOKUP(A2,F:F,G:G),"Not found")' },
    ],
    tipsTitle: "Useful tips", tips: [["Find the cause first", "IFERROR changes the display; it does not repair bad data or logic."], ["Use a clear message", "Not found is easier to diagnose than a blank."], ["Keep data types consistent", "Use numeric 0 when later calculations need a number."], ["XLOOKUP has a fallback", "Its fourth argument can handle a missing match directly."]],
    errorsTitle: "Common mistakes", errors: [["Hiding every error", "Blank results can conceal real formula problems."], ["Parentheses are misplaced", "Wrap the complete original formula inside IFERROR."], ["Text is not quoted", "Text fallbacks require double quotation marks."], ["Assuming it only handles #N/A", "IFERROR catches many errors; use IFNA when only #N/A should be handled."]],
    ctaTitle: "Not sure how to handle a formula error?", ctaText: "Paste the formula and describe the desired fallback; EveryFormula will help fix it.", ctaButton: "Fix a formula", back: "← Back to Excel Guides",
  },
  ja: {
    guides: "Excel 学習センター", formulaTool: "数式ツール", badge: "論理関数", title: "Excel IFERROR 関数ガイド", subtitle: "#N/A、#DIV/0!、#VALUE! などのエラーを分かりやすい表示に置き換えます。",
    introTitle: "IFERROR 関数とは？", intro: "IFERROR は数式を実行し、正常なら元の結果を返し、エラーなら指定した文字、数値、空白を返します。", tags: ["該当なし", "ゼロ除算", "値のエラー", "空白表示"],
    syntaxTitle: "IFERROR の構文", syntaxFormula: "=IFERROR(実行する数式, エラー時の結果)", syntaxItems: [["実行する数式", "検索や除算など"], ["エラー時", "例：\"該当なし\""], ["正常時", "元の結果を保持"], ["対象エラー", "#N/A、#DIV/0! など"]],
    examples: [
      { title: "例1：VLOOKUP で見つからない", description: "#N/A の代わりに「該当なし」を表示します。", formula: '=IFERROR(VLOOKUP(A2,社員!A:B,2,FALSE),"該当なし")' },
      { title: "例2：ゼロ除算を防ぐ", description: "B2 が 0 または空白なら 0% を返します。", formula: "=IFERROR(A2/B2,0%)" },
      { title: "例3：エラー時に空白", description: "データ入力前は結果セルを空白にします。", formula: '=IFERROR(A2/B2,"")' },
      { title: "例4：XLOOKUP と組み合わせる", description: "XLOOKUP を包めますが、XLOOKUP 自体にも該当なしの引数があります。", formula: '=IFERROR(XLOOKUP(A2,F:F,G:G),"該当なし")' },
    ],
    tipsTitle: "実用的なヒント", tips: [["原因を先に確認", "IFERROR は表示を変えるだけで、元の問題は修正しません。"], ["明確なメッセージ", "空白より「該当なし」の方が確認しやすくなります。"], ["データ型を統一", "後で計算する場合は文字列ではなく数値 0 を使います。"], ["XLOOKUP の引数", "第4引数で見つからない場合を直接指定できます。"]],
    errorsTitle: "よくある間違い", errors: [["すべて空白にする", "本当の数式エラーを見落とす可能性があります。"], ["括弧の位置が違う", "元の数式全体を IFERROR で囲みます。"], ["文字列に引用符がない", "文字の結果はダブルクォーテーションで囲みます。"], ["#N/A だけと思う", "IFERROR は複数エラーを処理します。#N/A のみなら IFNA を使います。"]],
    ctaTitle: "数式エラーの処理方法が分かりませんか？", ctaText: "元の数式と希望する表示を入力すると EveryFormula が修正を支援します。", ctaButton: "数式を修正", back: "← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides: "Excel 教学中心", formulaTool: "公式生成器", badge: "逻辑函数", title: "Excel IFERROR 函数教学", subtitle: "拦截公式错误并显示容易理解的提示，处理 #N/A、#DIV/0!、#VALUE! 等问题。",
    introTitle: "IFERROR 是什么？", intro: "IFERROR 先执行公式；结果正常就保留原结果，发生错误时则显示指定的文本、数字或空白。", tags: ["未找到数据", "除数为 0", "格式错误", "暂时显示空白"],
    syntaxTitle: "IFERROR 语法", syntaxFormula: "=IFERROR(要执行的公式, 发生错误时的结果)", syntaxItems: [["执行的公式", "例如 VLOOKUP 或除法"], ["错误时结果", "例如“未找到”"], ["正常时结果", "自动保留原结果"], ["可处理错误", "#N/A、#DIV/0! 等"]],
    examples: [
      { title: "示例一：VLOOKUP 未找到", description: "未找到员工编号时显示“未找到”，而不是 #N/A。", formula: '=IFERROR(VLOOKUP(A2,员工!A:B,2,FALSE),"未找到")' },
      { title: "示例二：避免除以 0", description: "B2 为 0 或空白时返回 0%。", formula: "=IFERROR(A2/B2,0%)" },
      { title: "示例三：错误时显示空白", description: "尚未输入数据时保持结果单元格空白。", formula: '=IFERROR(A2/B2,"")' },
      { title: "示例四：搭配 XLOOKUP", description: "可以包住 XLOOKUP，但 XLOOKUP 也有内置的未找到参数。", formula: '=IFERROR(XLOOKUP(A2,F:F,G:G),"未找到")' },
    ],
    tipsTitle: "实用技巧", tips: [["先确认错误原因", "IFERROR 只改变显示，不会修复错误数据或逻辑。"], ["提示要明确", "显示“未找到”比空白更容易排查。"], ["区分数字与文本", "后续需要计算时应返回数字 0，而不是文本“0”。"], ["XLOOKUP 可直接处理", "第 4 个参数可以指定未找到时的结果。"]],
    errorsTitle: "常见错误", errors: [["把所有错误隐藏成空白", "可能导致真正的公式问题无法被发现。"], ["括号位置错误", "应使用 IFERROR 包住完整的原公式。"], ["文本没有双引号", "文本结果必须放在双引号内。"], ["误以为只处理 #N/A", "IFERROR 会处理多种错误；只处理 #N/A 可使用 IFNA。"]],
    ctaTitle: "公式错误，不知道如何处理？", ctaText: "粘贴原公式并说明希望显示的结果，EveryFormula 会帮助修正。", ctaButton: "修正公式错误", back: "← 返回 Excel 教学中心",
  },
};
