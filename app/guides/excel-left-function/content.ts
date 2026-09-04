import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const leftContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides:"Excel 教學中心",formulaTool:"公式產生器",badge:"文字處理",title:"Excel LEFT 函數教學",subtitle:"從文字左側擷取指定字數，快速拆分員工編號、商品代碼、區域碼與日期文字。",
    introTitle:"LEFT 是什麼？",intro:"LEFT 會從文字最左邊開始，擷取指定數量的字元。若省略字數，預設只取最左邊 1 個字元。",tags:["擷取部門代碼","拆分商品編號","取得區域碼","擷取年份文字"],
    syntaxTitle:"LEFT 語法",syntaxFormula:"=LEFT(文字, [字元數])",syntaxItems:[["文字","要擷取的儲存格或文字"],["字元數","從左側取幾個字元"],["省略字元數","預設擷取 1 個"],["回傳類型","文字"]],
    examples:[{title:"範例一：擷取部門代碼",description:"A2 是 HR-2026-001，取左側 2 個字元。",formula:"=LEFT(A2,2)"},{title:"範例二：擷取商品分類",description:"A2 是 ABC12345，取左側 3 個字元。",formula:"=LEFT(A2,3)"},{title:"範例三：只取第一個字",description:"省略字元數時預設取 1 個。",formula:"=LEFT(A2)"},{title:"範例四：搭配 FIND 動態擷取",description:"擷取第一個連字號之前的內容。",formula:'=LEFT(A2,FIND("-",A2)-1)'}],
    tipsTitle:"實用技巧",tips:[["數字結果仍是文字","後續要計算可使用 VALUE 轉為數字。"],["中文也算一個字元","每個中文字通常計為 1。"],["固定長度最適合","代碼長度不固定時搭配 FIND 或 TEXTBEFORE。"],["不會修改原資料","LEFT 只回傳擷取結果。"]],
    errorsTitle:"常見錯誤",errors:[["字元數超過長度","會直接回傳完整文字，不一定是錯誤。"],["字元數為負數","會出現 #VALUE!。"],["數字無法加總","LEFT 回傳文字，請搭配 VALUE。"],["分隔符不存在","搭配 FIND 時可能出現 #VALUE!，可再用 IFERROR。"]],
    ctaTitle:"文字代碼不知道怎麼拆？",ctaText:"提供原始文字與想保留的部分，EveryFormula 會建立 LEFT 公式。",ctaButton:"建立文字公式",back:"← 返回 Excel 教學中心",
  },
  en: {
    guides:"Excel Guides",formulaTool:"Formula tool",badge:"Text function",title:"Excel LEFT Guide",subtitle:"Extract characters from the left side of text for employee IDs, product codes, region codes, and date text.",
    introTitle:"What does LEFT do?",intro:"LEFT returns a specified number of characters starting from the left. If the number is omitted, it returns one character.",tags:["Department code","Product category","Region code","Year text"],
    syntaxTitle:"LEFT syntax",syntaxFormula:"=LEFT(text, [num_chars])",syntaxItems:[["Text","Cell or text to extract"],["Number of characters","How many from the left"],["If omitted","Returns 1 character"],["Return type","Text"]],
    examples:[{title:"Example 1: Department code",description:"A2 is HR-2026-001; return the first two characters.",formula:"=LEFT(A2,2)"},{title:"Example 2: Product category",description:"A2 is ABC12345; return the first three.",formula:"=LEFT(A2,3)"},{title:"Example 3: First character",description:"Omit num_chars to return one.",formula:"=LEFT(A2)"},{title:"Example 4: Use FIND",description:"Return everything before the first hyphen.",formula:'=LEFT(A2,FIND("-",A2)-1)'}],
    tipsTitle:"Useful tips",tips:[["Numbers become text","Use VALUE when the result must be calculated."],["Each character counts","Letters, digits, and symbols each count."],["Best for fixed lengths","Use FIND or TEXTBEFORE for variable codes."],["Original data is unchanged","LEFT returns a separate value."]],
    errorsTitle:"Common mistakes",errors:[["Count exceeds text length","The full text is returned."],["Negative count","Returns #VALUE!."],["Cannot sum the result","Convert text with VALUE."],["Delimiter is missing","FIND may return #VALUE!; use IFERROR if needed."]],
    ctaTitle:"Not sure how to split a code?",ctaText:"Provide the original text and desired portion and EveryFormula will build the formula.",ctaButton:"Create a text formula",back:"← Back to Excel Guides",
  },
  ja: {
    guides:"Excel 学習センター",formulaTool:"数式ツール",badge:"文字列処理",title:"Excel LEFT 関数ガイド",subtitle:"文字列の左側から指定文字数を抽出し、社員番号、商品コード、地域コードを分割します。",
    introTitle:"LEFT 関数とは？",intro:"LEFT は文字列の左端から指定数の文字を返します。文字数を省略すると1文字を返します。",tags:["部署コード","商品分類","地域コード","年の文字列"],
    syntaxTitle:"LEFT の構文",syntaxFormula:"=LEFT(文字列, [文字数])",syntaxItems:[["文字列","抽出するセルや文字"],["文字数","左から何文字"],["省略時","1文字"],["戻り値","文字列"]],
    examples:[{title:"例1：部署コード",description:"A2 が HR-2026-001 の場合、左2文字。",formula:"=LEFT(A2,2)"},{title:"例2：商品分類",description:"ABC12345 の左3文字。",formula:"=LEFT(A2,3)"},{title:"例3：先頭1文字",description:"文字数を省略。",formula:"=LEFT(A2)"},{title:"例4：FIND と組み合わせ",description:"最初のハイフンより前を抽出。",formula:'=LEFT(A2,FIND("-",A2)-1)'}],
    tipsTitle:"実用的なヒント",tips:[["数値も文字列になる","計算には VALUE を使います。"],["日本語も1文字","各文字を1として数えます。"],["固定長に最適","可変長は FIND や TEXTBEFORE。"],["元データは変更しない","別の結果を返します。"]],
    errorsTitle:"よくある間違い",errors:[["文字数が長すぎる","全文を返します。"],["負の文字数","#VALUE!。"],["合計できない","VALUE で数値化。"],["区切りがない","FIND が #VALUE! を返す場合があります。"]],
    ctaTitle:"コードの分割方法が分かりませんか？",ctaText:"元の文字と必要部分を説明すると EveryFormula が数式を作成します。",ctaButton:"文字列数式を作成",back:"← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides:"Excel 教学中心",formulaTool:"公式生成器",badge:"文本处理",title:"Excel LEFT 函数教学",subtitle:"从文本左侧提取指定字符数，快速拆分员工编号、商品代码与区域码。",
    introTitle:"LEFT 是什么？",intro:"LEFT 从文本最左侧开始提取指定数量的字符。省略字符数时默认返回1个字符。",tags:["提取部门代码","拆分商品编号","获取区域码","提取年份文本"],
    syntaxTitle:"LEFT 语法",syntaxFormula:"=LEFT(文本, [字符数])",syntaxItems:[["文本","要提取的单元格或文本"],["字符数","从左侧取几个字符"],["省略字符数","默认1个"],["返回类型","文本"]],
    examples:[{title:"示例一：提取部门代码",description:"A2 是 HR-2026-001，取左侧2个字符。",formula:"=LEFT(A2,2)"},{title:"示例二：商品分类",description:"ABC12345 的左侧3个字符。",formula:"=LEFT(A2,3)"},{title:"示例三：首个字符",description:"省略字符数。",formula:"=LEFT(A2)"},{title:"示例四：搭配 FIND",description:"提取第一个连字符之前的内容。",formula:'=LEFT(A2,FIND("-",A2)-1)'}],
    tipsTitle:"实用技巧",tips:[["数字结果仍是文本","计算时可使用 VALUE。"],["中文计为一个字符","每个汉字通常计为1。"],["适合固定长度","不固定时搭配 FIND 或 TEXTBEFORE。"],["不会修改原数据","只返回提取结果。"]],
    errorsTitle:"常见错误",errors:[["字符数超过长度","会返回完整文本。"],["字符数为负数","出现 #VALUE!。"],["数字无法求和","使用 VALUE 转为数字。"],["分隔符不存在","FIND 可能出现 #VALUE!。"]],
    ctaTitle:"文本代码不知道怎么拆？",ctaText:"提供原始文本与目标部分，EveryFormula 会创建 LEFT 公式。",ctaButton:"生成文本公式",back:"← 返回 Excel 教学中心",
  },
};
