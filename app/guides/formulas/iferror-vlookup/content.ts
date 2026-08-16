import { AppLanguage } from "../../../i18n";
import type { SumifsContent } from "../../excel-sumifs-function/content";

export const iferrorVlookupContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides:"Excel 教學中心",formulaTool:"公式產生器",badge:"組合公式・2 個函數",title:"IFERROR＋VLOOKUP 組合公式教學",subtitle:"用 VLOOKUP 查找資料，再用 IFERROR 處理找不到的情況，避免表格出現難懂的 #N/A。",
    introTitle:"為什麼要組合 IFERROR 與 VLOOKUP？",intro:"VLOOKUP 負責依照編號查找資料；找不到時會回傳 #N/A。把完整的 VLOOKUP 放進 IFERROR，就能改為顯示「查無資料」、空白或其他提示。",tags:["員工編號查姓名","商品編號查價格","避免 #N/A","自訂查無提示"],
    syntaxTitle:"組合公式結構",syntaxFormula:'=IFERROR(VLOOKUP(查詢值, 資料範圍, 回傳欄數, FALSE), "查無資料")',syntaxItems:[["內層 VLOOKUP","先執行資料查找"],["外層 IFERROR","攔截查找錯誤"],["FALSE","使用完全相符查找"],["錯誤提示","可改成文字、0 或空白"]],
    examples:[{title:"範例一：員工編號查姓名",description:"A2 是查詢編號，F:G 是員工資料表。",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$100,2,FALSE),"查無資料")'},{title:"範例二：跨工作表查找",description:"從「員工資料」工作表查找姓名。",formula:'=IFERROR(VLOOKUP(A2,員工資料!$A:$B,2,FALSE),"查無資料")'},{title:"範例三：找不到時顯示空白",description:"不想顯示提示文字時使用空字串。",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$100,2,FALSE),"")'},{title:"範例四：商品編號查價格",description:"在商品資料表的第 3 欄回傳價格。",formula:'=IFERROR(VLOOKUP(A2,商品資料!$A:$C,3,FALSE),"查無商品")'}],
    tipsTitle:"組合公式拆解",tips:[["先看最內層","Excel 會先執行 VLOOKUP，再由 IFERROR 判斷結果。"],["固定資料範圍","向下複製時使用 $ 鎖定查找表。"],["第一欄必須是查詢欄","VLOOKUP 只能在資料範圍最左欄尋找。"],["新版可考慮 XLOOKUP","XLOOKUP 已內建找不到時的回傳值。"]],
    errorsTitle:"常見錯誤",errors:[["所有問題都變成查無資料","IFERROR 也會隱藏欄數錯誤等其他問題，測試時先確認 VLOOKUP。"],["忘記使用 FALSE","可能取得近似而非完全相符的資料。"],["回傳欄數超出範圍","例如資料只有兩欄卻要求第 3 欄。"],["查詢值格式不同","數字與文字看似相同，仍可能無法匹配。"]],
    ctaTitle:"需要安全又清楚的查找公式？",ctaText:"描述查詢欄位、資料範圍與找不到時的提示，EverySheet 會建立組合公式。",ctaButton:"建立組合公式",back:"← 返回 Excel 教學中心",
  },
  en: {
    guides:"Excel Guides",formulaTool:"Formula tool",badge:"Combined formula · 2 functions",title:"IFERROR + VLOOKUP Formula Guide",subtitle:"Look up data with VLOOKUP and use IFERROR to replace an unclear #N/A when no match is found.",
    introTitle:"Why combine IFERROR and VLOOKUP?",intro:"VLOOKUP searches by an ID but returns #N/A when no match exists. Wrapping the full lookup in IFERROR lets you display a clear message, zero, or blank instead.",tags:["Employee ID to name","Product ID to price","Avoid #N/A","Custom fallback"],
    syntaxTitle:"Combined formula structure",syntaxFormula:'=IFERROR(VLOOKUP(lookup_value, table_array, col_index_num, FALSE), "Not found")',syntaxItems:[["Inner VLOOKUP","Performs the lookup first"],["Outer IFERROR","Catches lookup errors"],["FALSE","Requires an exact match"],["Fallback","Text, zero, or a blank"]],
    examples:[{title:"Example 1: Employee ID to name",description:"A2 is the ID and F:G contains employee data.",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$100,2,FALSE),"Not found")'},{title:"Example 2: Another worksheet",description:"Look up the name on the Employees sheet.",formula:'=IFERROR(VLOOKUP(A2,Employees!$A:$B,2,FALSE),"Not found")'},{title:"Example 3: Show a blank",description:"Use an empty string instead of a message.",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$100,2,FALSE),"")'},{title:"Example 4: Product ID to price",description:"Return the price from column 3 of the product table.",formula:'=IFERROR(VLOOKUP(A2,Products!$A:$C,3,FALSE),"Product not found")'}],
    tipsTitle:"How the formula works",tips:[["Read from the inside","Excel runs VLOOKUP first and IFERROR checks its result."],["Lock the table range","Use $ so the table does not move when copied down."],["Lookup column must be first","VLOOKUP searches only the leftmost column of its table."],["Consider XLOOKUP","XLOOKUP includes its own not-found argument."]],
    errorsTitle:"Common mistakes",errors:[["Every error becomes Not found","IFERROR can also hide an invalid column index, so test VLOOKUP first."],["FALSE is omitted","The result may be an approximate rather than exact match."],["Column index is too large","The requested column must exist inside the table."],["Data types differ","Text and numeric IDs that look alike may not match."]],
    ctaTitle:"Need a safer lookup formula?",ctaText:"Describe the lookup field, data table, and fallback message and EverySheet will build the combined formula.",ctaButton:"Create a combined formula",back:"← Back to Excel Guides",
  },
  ja: {
    guides:"Excel 学習センター",formulaTool:"数式ツール",badge:"組み合わせ数式・2 関数",title:"IFERROR＋VLOOKUP 組み合わせ数式ガイド",subtitle:"VLOOKUP で検索し、見つからない場合は IFERROR で #N/A の代わりに分かりやすい表示を返します。",
    introTitle:"なぜ IFERROR と VLOOKUP を組み合わせる？",intro:"VLOOKUP は番号からデータを検索しますが、見つからないと #N/A を返します。数式全体を IFERROR で囲むと、任意のメッセージや空白に変更できます。",tags:["社員番号から氏名","商品番号から価格","#N/A を防止","該当なし表示"],
    syntaxTitle:"組み合わせ数式の構造",syntaxFormula:'=IFERROR(VLOOKUP(検索値, 範囲, 列番号, FALSE), "該当なし")',syntaxItems:[["内側の VLOOKUP","先にデータを検索"],["外側の IFERROR","検索エラーを処理"],["FALSE","完全一致で検索"],["エラー時表示","文字、0、空白を指定"]],
    examples:[{title:"例1：社員番号から氏名",description:"A2 が検索番号、F:G が社員表です。",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$100,2,FALSE),"該当なし")'},{title:"例2：別シートを検索",description:"「社員」シートから氏名を検索。",formula:'=IFERROR(VLOOKUP(A2,社員!$A:$B,2,FALSE),"該当なし")'},{title:"例3：見つからない場合は空白",description:"メッセージの代わりに空文字を使用。",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$100,2,FALSE),"")'},{title:"例4：商品番号から価格",description:"商品表の3列目から価格を返します。",formula:'=IFERROR(VLOOKUP(A2,商品!$A:$C,3,FALSE),"商品なし")'}],
    tipsTitle:"数式の読み方",tips:[["内側から確認","先に VLOOKUP、次に IFERROR が結果を判断します。"],["範囲を固定","コピー時は $ で表範囲を固定します。"],["検索列は左端","VLOOKUP は範囲の一番左を検索します。"],["XLOOKUP も検討","該当なし表示を直接指定できます。"]],
    errorsTitle:"よくある間違い",errors:[["すべてが該当なしになる","列番号など別のエラーも隠すため、VLOOKUP を先にテストします。"],["FALSE を省略","近似一致になる場合があります。"],["列番号が範囲外","指定した列が検索範囲内に必要です。"],["データ型が違う","文字列と数値の番号は一致しない場合があります。"]],
    ctaTitle:"安全な検索数式が必要ですか？",ctaText:"検索列、データ範囲、該当なし表示を説明すると EverySheet が組み合わせ数式を作成します。",ctaButton:"組み合わせ数式を作成",back:"← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides:"Excel 教学中心",formulaTool:"公式生成器",badge:"组合公式・2 个函数",title:"IFERROR＋VLOOKUP 组合公式教学",subtitle:"使用 VLOOKUP 查找数据，再用 IFERROR 处理未找到的情况，避免显示难懂的 #N/A。",
    introTitle:"为什么组合 IFERROR 与 VLOOKUP？",intro:"VLOOKUP 根据编号查找数据，但未找到时会返回 #N/A。将完整的 VLOOKUP 放入 IFERROR，可以改成“未找到”、空白或其他提示。",tags:["员工编号查姓名","商品编号查价格","避免 #N/A","自定义未找到提示"],
    syntaxTitle:"组合公式结构",syntaxFormula:'=IFERROR(VLOOKUP(查询值, 数据范围, 返回列数, FALSE), "未找到")',syntaxItems:[["内层 VLOOKUP","先执行数据查找"],["外层 IFERROR","拦截查找错误"],["FALSE","使用完全匹配"],["错误提示","可使用文本、0或空白"]],
    examples:[{title:"示例一：员工编号查姓名",description:"A2 是查询编号，F:G 是员工数据表。",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$100,2,FALSE),"未找到")'},{title:"示例二：跨工作表查找",description:"从“员工数据”工作表查找姓名。",formula:'=IFERROR(VLOOKUP(A2,员工数据!$A:$B,2,FALSE),"未找到")'},{title:"示例三：未找到时显示空白",description:"使用空文本代替提示。",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$100,2,FALSE),"")'},{title:"示例四：商品编号查价格",description:"返回商品数据表第3列的价格。",formula:'=IFERROR(VLOOKUP(A2,商品数据!$A:$C,3,FALSE),"未找到商品")'}],
    tipsTitle:"组合公式拆解",tips:[["先看最内层","Excel 先执行 VLOOKUP，再由 IFERROR 判断结果。"],["固定数据范围","向下复制时使用 $ 锁定查找表。"],["查询列必须在最左侧","VLOOKUP 只在数据范围的第一列查找。"],["新版可考虑 XLOOKUP","XLOOKUP 已包含未找到时的返回值。"]],
    errorsTitle:"常见错误",errors:[["所有问题都显示未找到","IFERROR 也会隐藏列数错误，测试时先检查 VLOOKUP。"],["忘记使用 FALSE","可能取得近似而非完全匹配的数据。"],["返回列数超出范围","请求的列必须存在于数据表中。"],["查询值格式不同","数字与文本看似相同也可能无法匹配。"]],
    ctaTitle:"需要安全清楚的查找公式？",ctaText:"描述查询字段、数据范围与未找到提示，EverySheet 会创建组合公式。",ctaButton:"生成组合公式",back:"← 返回 Excel 教学中心",
  },
};
