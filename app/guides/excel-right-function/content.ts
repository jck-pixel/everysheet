import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const rightContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides:"Excel 教學中心",formulaTool:"公式產生器",badge:"文字處理",title:"Excel RIGHT 函數教學",subtitle:"從文字右側擷取指定字數，快速取出訂單流水號、電話末碼、檔案副檔名與日期文字。",
    introTitle:"RIGHT 是什麼？",intro:"RIGHT 會從文字最右邊開始，擷取指定數量的字元。若省略字元數，預設只取最右邊 1 個字元。",tags:["擷取訂單末碼","取得電話末碼","拆分流水號","擷取年份文字"],
    syntaxTitle:"RIGHT 語法",syntaxFormula:"=RIGHT(文字, [字元數])",syntaxItems:[["文字","要擷取的儲存格或文字"],["字元數","從右側取幾個字元"],["省略字元數","預設擷取 1 個"],["回傳類型","文字"]],
    examples:[{title:"範例一：擷取訂單流水號",description:"A2 是 ORD-2026-0086，取右側 4 個字元。",formula:"=RIGHT(A2,4)"},{title:"範例二：取得電話末四碼",description:"從電話號碼右側取得 4 碼。",formula:"=RIGHT(A2,4)"},{title:"範例三：只取最後一個字",description:"省略字元數時預設取 1 個。",formula:"=RIGHT(A2)"},{title:"範例四：搭配 LEN 與 FIND",description:"取得第一個連字號之後的所有內容。",formula:'=RIGHT(A2,LEN(A2)-FIND("-",A2))'}],
    tipsTitle:"實用技巧",tips:[["數字結果仍是文字","後續要計算可使用 VALUE 轉為數字。"],["中文也算一個字元","每個中文字通常計為 1。"],["固定長度最適合","尾碼長度不固定時可搭配 LEN、FIND 或 TEXTAFTER。"],["保留前導零","RIGHT 回傳文字，因此 0086 不會變成 86。"]],
    errorsTitle:"常見錯誤",errors:[["字元數超過長度","會直接回傳完整文字，不一定是錯誤。"],["字元數為負數","會出現 #VALUE!。"],["結果無法加總","RIGHT 回傳文字，請搭配 VALUE。"],["抓到空白字元","原資料尾端若有空白，可先用 TRIM 清理。"]],
    ctaTitle:"不知道尾碼要怎麼擷取？",ctaText:"提供原始文字與想保留的尾端內容，EveryFormula 會建立 RIGHT 公式。",ctaButton:"建立文字公式",back:"← 返回 Excel 教學中心",
  },
  en: {
    guides:"Excel Guides",formulaTool:"Formula tool",badge:"Text function",title:"Excel RIGHT Guide",subtitle:"Extract characters from the right side of text for order numbers, phone endings, file extensions, and date text.",
    introTitle:"What does RIGHT do?",intro:"RIGHT returns a specified number of characters starting from the right. If the number is omitted, it returns one character.",tags:["Order suffix","Phone ending","Serial number","Year text"],
    syntaxTitle:"RIGHT syntax",syntaxFormula:"=RIGHT(text, [num_chars])",syntaxItems:[["Text","Cell or text to extract"],["Number of characters","How many from the right"],["If omitted","Returns 1 character"],["Return type","Text"]],
    examples:[{title:"Example 1: Order serial number",description:"A2 is ORD-2026-0086; return the last four characters.",formula:"=RIGHT(A2,4)"},{title:"Example 2: Last four phone digits",description:"Return four digits from the right side.",formula:"=RIGHT(A2,4)"},{title:"Example 3: Last character",description:"Omit num_chars to return one.",formula:"=RIGHT(A2)"},{title:"Example 4: Use LEN and FIND",description:"Return everything after the first hyphen.",formula:'=RIGHT(A2,LEN(A2)-FIND("-",A2))'}],
    tipsTitle:"Useful tips",tips:[["Numbers become text","Use VALUE when the result must be calculated."],["Each character counts","Letters, digits, and symbols each count."],["Best for fixed lengths","Use LEN, FIND, or TEXTAFTER for variable suffixes."],["Leading zeros remain","RIGHT preserves 0086 as text."]],
    errorsTitle:"Common mistakes",errors:[["Count exceeds text length","The full text is returned."],["Negative count","Returns #VALUE!."],["Cannot sum the result","Convert text with VALUE."],["Trailing spaces are captured","Clean the source with TRIM first."]],
    ctaTitle:"Not sure how to extract a suffix?",ctaText:"Provide the original text and desired ending and EveryFormula will build the RIGHT formula.",ctaButton:"Create a text formula",back:"← Back to Excel Guides",
  },
  ja: {
    guides:"Excel 学習センター",formulaTool:"数式ツール",badge:"文字列処理",title:"Excel RIGHT 関数ガイド",subtitle:"文字列の右側から指定文字数を抽出し、注文番号、電話番号の末尾、連番を分割します。",
    introTitle:"RIGHT 関数とは？",intro:"RIGHT は文字列の右端から指定数の文字を返します。文字数を省略すると1文字を返します。",tags:["注文番号の末尾","電話番号の末尾","連番","年の文字列"],
    syntaxTitle:"RIGHT の構文",syntaxFormula:"=RIGHT(文字列, [文字数])",syntaxItems:[["文字列","抽出するセルや文字"],["文字数","右から何文字"],["省略時","1文字"],["戻り値","文字列"]],
    examples:[{title:"例1：注文の連番",description:"A2 が ORD-2026-0086 の場合、右4文字。",formula:"=RIGHT(A2,4)"},{title:"例2：電話番号の下4桁",description:"右側から4桁を取得。",formula:"=RIGHT(A2,4)"},{title:"例3：末尾1文字",description:"文字数を省略。",formula:"=RIGHT(A2)"},{title:"例4：LEN と FIND",description:"最初のハイフン以降を取得。",formula:'=RIGHT(A2,LEN(A2)-FIND("-",A2))'}],
    tipsTitle:"実用的なヒント",tips:[["数値も文字列になる","計算には VALUE を使います。"],["日本語も1文字","各文字を1として数えます。"],["固定長に最適","可変長は LEN、FIND、TEXTAFTER。"],["先頭のゼロを保持","0086 をそのまま返します。"]],
    errorsTitle:"よくある間違い",errors:[["文字数が長すぎる","全文を返します。"],["負の文字数","#VALUE!。"],["合計できない","VALUE で数値化。"],["末尾の空白も抽出","先に TRIM で整えます。"]],
    ctaTitle:"末尾の抽出方法が分かりませんか？",ctaText:"元の文字と必要な末尾を説明すると EveryFormula が数式を作成します。",ctaButton:"文字列数式を作成",back:"← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides:"Excel 教学中心",formulaTool:"公式生成器",badge:"文本处理",title:"Excel RIGHT 函数教学",subtitle:"从文本右侧提取指定字符数，快速获取订单流水号、电话末位与文件扩展名。",
    introTitle:"RIGHT 是什么？",intro:"RIGHT 从文本最右侧开始提取指定数量的字符。省略字符数时默认返回1个字符。",tags:["订单末位","电话末位","流水号","年份文本"],
    syntaxTitle:"RIGHT 语法",syntaxFormula:"=RIGHT(文本, [字符数])",syntaxItems:[["文本","要提取的单元格或文本"],["字符数","从右侧取几个字符"],["省略字符数","默认1个"],["返回类型","文本"]],
    examples:[{title:"示例一：提取订单流水号",description:"A2 是 ORD-2026-0086，取右侧4个字符。",formula:"=RIGHT(A2,4)"},{title:"示例二：电话末四位",description:"从电话号码右侧获取4位。",formula:"=RIGHT(A2,4)"},{title:"示例三：最后一个字符",description:"省略字符数。",formula:"=RIGHT(A2)"},{title:"示例四：搭配 LEN 与 FIND",description:"提取第一个连字符后的所有内容。",formula:'=RIGHT(A2,LEN(A2)-FIND("-",A2))'}],
    tipsTitle:"实用技巧",tips:[["数字结果仍是文本","计算时可使用 VALUE。"],["中文计为一个字符","每个汉字通常计为1。"],["适合固定长度","不固定时搭配 LEN、FIND 或 TEXTAFTER。"],["保留开头零","0086 不会变成86。"]],
    errorsTitle:"常见错误",errors:[["字符数超过长度","会返回完整文本。"],["字符数为负数","出现 #VALUE!。"],["结果无法求和","使用 VALUE 转为数字。"],["提取到末尾空格","可先使用 TRIM 清理。"]],
    ctaTitle:"不知道末位怎么提取？",ctaText:"提供原始文本与目标末尾，EveryFormula 会创建 RIGHT 公式。",ctaButton:"生成文本公式",back:"← 返回 Excel 教学中心",
  },
};
