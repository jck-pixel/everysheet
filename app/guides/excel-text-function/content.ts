import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const textContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides:"Excel 教學中心",formulaTool:"公式產生器",badge:"文字處理",title:"Excel TEXT 函數教學",subtitle:"將日期、金額、百分比與數字轉成指定顯示格式，方便製作報表文字、標籤與自動訊息。",
    introTitle:"TEXT 是什麼？",intro:"TEXT 會依照指定的格式代碼，把數值轉換成格式化文字。它能控制日期、金額、小數、百分比及編號的顯示方式。",tags:["格式化日期","顯示千分位","轉換百分比","編號補零"],
    syntaxTitle:"TEXT 語法",syntaxFormula:'=TEXT(數值, "格式代碼")',syntaxItems:[["數值","要格式化的數字或日期"],["格式代碼","例如 yyyy/mm/dd"],["回傳類型","格式化後的文字"],["原始數值","不會被修改"]],
    examples:[{title:"範例一：格式化日期",description:"將 A2 日期顯示為 2026/08/16。",formula:'=TEXT(A2,"yyyy/mm/dd")'},{title:"範例二：顯示千分位金額",description:"將 12500 顯示成 12,500。",formula:'=TEXT(A2,"#,##0")'},{title:"範例三：轉換百分比",description:"將 0.856 顯示成 85.6%。",formula:'=TEXT(A2,"0.0%")'},{title:"範例四：編號補零",description:"將數字 86 顯示成 0086。",formula:'=TEXT(A2,"0000")'}],
    tipsTitle:"實用技巧",tips:[["結果是文字","格式化後通常不能直接參與數值計算。"],["可串接說明文字","例如 =\"到期日：\"&TEXT(A2,\"yyyy/mm/dd\")。"],["格式代碼要加引號","忘記引號通常會造成公式錯誤。"],["月份與分鐘不同","日期中的 m 需依位置判斷，時間分鐘常寫 mm。"]],
    errorsTitle:"常見錯誤",errors:[["顯示格式不正確","檢查格式代碼與引號。"],["日期變成原始數字","確認 A2 是真正的日期值。"],["結果無法加總","TEXT 回傳文字，計算時應使用原始數值。"],["不同語系顯示不同","部分日期與貨幣格式會受 Excel 語系影響。"]],
    ctaTitle:"不知道格式代碼怎麼寫？",ctaText:"描述想要的日期、金額或編號樣式，EveryFormula 會建立 TEXT 公式。",ctaButton:"建立格式公式",back:"← 返回 Excel 教學中心",
  },
  en: {
    guides:"Excel Guides",formulaTool:"Formula tool",badge:"Text function",title:"Excel TEXT Guide",subtitle:"Convert dates, amounts, percentages, and numbers into a specified display format for reports, labels, and messages.",
    introTitle:"What does TEXT do?",intro:"TEXT converts a value into formatted text using a format code. It controls how dates, currency, decimals, percentages, and IDs are displayed.",tags:["Format dates","Thousands separators","Percentages","Leading zeros"],
    syntaxTitle:"TEXT syntax",syntaxFormula:'=TEXT(value, "format_text")',syntaxItems:[["Value","Number or date to format"],["Format text","For example, yyyy/mm/dd"],["Return type","Formatted text"],["Original value","Remains unchanged"]],
    examples:[{title:"Example 1: Format a date",description:"Display the date in A2 as 2026/08/16.",formula:'=TEXT(A2,"yyyy/mm/dd")'},{title:"Example 2: Thousands separator",description:"Display 12500 as 12,500.",formula:'=TEXT(A2,"#,##0")'},{title:"Example 3: Percentage",description:"Display 0.856 as 85.6%.",formula:'=TEXT(A2,"0.0%")'},{title:"Example 4: Add leading zeros",description:"Display the number 86 as 0086.",formula:'=TEXT(A2,"0000")'}],
    tipsTitle:"Useful tips",tips:[["The result is text","It generally cannot be used directly in calculations."],["Combine it with labels",'For example, ="Due: "&TEXT(A2,"yyyy/mm/dd").'],["Quote the format code","Missing quotation marks causes formula errors."],["Months versus minutes","The meaning of m depends on its position in date and time formats."]],
    errorsTitle:"Common mistakes",errors:[["Unexpected display","Check the format code and quotation marks."],["Date appears as a number","Make sure A2 contains a real date value."],["Result cannot be summed","Calculate with the original value, not TEXT output."],["Locale differences","Some date and currency formats vary by Excel language."]],
    ctaTitle:"Not sure which format code to use?",ctaText:"Describe the desired date, amount, or ID format and EveryFormula will build the TEXT formula.",ctaButton:"Create a format formula",back:"← Back to Excel Guides",
  },
  ja: {
    guides:"Excel 学習センター",formulaTool:"数式ツール",badge:"文字列処理",title:"Excel TEXT 関数ガイド",subtitle:"日付、金額、パーセント、数値を指定形式の文字列に変換し、帳票やラベルに利用します。",
    introTitle:"TEXT 関数とは？",intro:"TEXT は書式コードを使って数値を表示用の文字列へ変換します。日付、金額、小数、パーセント、番号の表示を制御できます。",tags:["日付形式","桁区切り","パーセント","ゼロ埋め"],
    syntaxTitle:"TEXT の構文",syntaxFormula:'=TEXT(値, "表示形式")',syntaxItems:[["値","書式設定する数値や日付"],["表示形式","例：yyyy/mm/dd"],["戻り値","書式設定された文字列"],["元の値","変更されません"]],
    examples:[{title:"例1：日付を整える",description:"A2 の日付を 2026/08/16 と表示。",formula:'=TEXT(A2,"yyyy/mm/dd")'},{title:"例2：桁区切り",description:"12500 を 12,500 と表示。",formula:'=TEXT(A2,"#,##0")'},{title:"例3：パーセント",description:"0.856 を 85.6% と表示。",formula:'=TEXT(A2,"0.0%")'},{title:"例4：ゼロ埋め",description:"86 を 0086 と表示。",formula:'=TEXT(A2,"0000")'}],
    tipsTitle:"実用的なヒント",tips:[["結果は文字列","通常、そのまま数値計算には使えません。"],["説明文と連結できる",'例：="期限："&TEXT(A2,"yyyy/mm/dd")。'],["表示形式は引用符で囲む","引用符がないとエラーになります。"],["月と分の違い","m の意味は日付・時刻内の位置で決まります。"]],
    errorsTitle:"よくある間違い",errors:[["表示が違う","書式コードと引用符を確認。"],["日付が数字になる","A2 が日付値か確認。"],["合計できない","計算には元の数値を使います。"],["言語による違い","日付や通貨は Excel の言語設定に影響されます。"]],
    ctaTitle:"表示形式が分かりませんか？",ctaText:"希望の日付、金額、番号の形を説明すると EveryFormula が TEXT 数式を作成します。",ctaButton:"書式数式を作成",back:"← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides:"Excel 教学中心",formulaTool:"公式生成器",badge:"文本处理",title:"Excel TEXT 函数教学",subtitle:"将日期、金额、百分比与数字转换成指定显示格式，用于报表、标签与自动文本。",
    introTitle:"TEXT 是什么？",intro:"TEXT 根据指定格式代码，将数值转换成格式化文本，可控制日期、金额、小数、百分比与编号的显示。",tags:["格式化日期","千位分隔符","转换百分比","编号补零"],
    syntaxTitle:"TEXT 语法",syntaxFormula:'=TEXT(数值, "格式代码")',syntaxItems:[["数值","要格式化的数字或日期"],["格式代码","例如 yyyy/mm/dd"],["返回类型","格式化后的文本"],["原始数值","不会被修改"]],
    examples:[{title:"示例一：格式化日期",description:"将 A2 日期显示为 2026/08/16。",formula:'=TEXT(A2,"yyyy/mm/dd")'},{title:"示例二：显示千位分隔",description:"将 12500 显示成 12,500。",formula:'=TEXT(A2,"#,##0")'},{title:"示例三：转换百分比",description:"将 0.856 显示成 85.6%。",formula:'=TEXT(A2,"0.0%")'},{title:"示例四：编号补零",description:"将数字 86 显示成 0086。",formula:'=TEXT(A2,"0000")'}],
    tipsTitle:"实用技巧",tips:[["结果是文本","通常不能直接用于数值计算。"],["可拼接说明文字",'例如 ="到期日："&TEXT(A2,"yyyy/mm/dd")。'],["格式代码要加引号","缺少引号会造成公式错误。"],["月份与分钟不同","m 的含义会根据日期时间中的位置判断。"]],
    errorsTitle:"常见错误",errors:[["显示格式不正确","检查格式代码与引号。"],["日期显示成数字","确认 A2 是真正的日期值。"],["结果无法求和","计算时应使用原始数值。"],["不同语言显示不同","部分日期与货币格式受 Excel 语言影响。"]],
    ctaTitle:"不知道格式代码怎么写？",ctaText:"描述想要的日期、金额或编号样式，EveryFormula 会创建 TEXT 公式。",ctaButton:"生成格式公式",back:"← 返回 Excel 教学中心",
  },
};
