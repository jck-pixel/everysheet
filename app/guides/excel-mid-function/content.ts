import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const midContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides:"Excel 教學中心",formulaTool:"公式產生器",badge:"文字處理",title:"Excel MID 函數教學",subtitle:"從文字中間指定位置擷取字元，快速拆分訂單年份、商品代碼、身分編號與固定格式資料。",
    introTitle:"MID 是什麼？",intro:"MID 會從文字中的指定位置開始，擷取指定數量的字元。第一個字元的位置是 1，適合處理結構固定的編號。",tags:["擷取訂單年份","拆分商品代碼","取得編號中段","處理固定格式"],
    syntaxTitle:"MID 語法",syntaxFormula:"=MID(文字, 開始位置, 字元數)",syntaxItems:[["文字","要擷取的儲存格或文字"],["開始位置","從第幾個字元開始"],["字元數","要擷取幾個字元"],["回傳類型","文字"]],
    examples:[{title:"範例一：擷取訂單年份",description:"A2 是 ORD-2026-0086，從第 5 個字元取 4 個。",formula:"=MID(A2,5,4)"},{title:"範例二：擷取商品分類碼",description:"A2 是 TW-ABC-001，取中間的 ABC。",formula:"=MID(A2,4,3)"},{title:"範例三：取得身分編號中段",description:"從第 3 個字元開始取 4 個。",formula:"=MID(A2,3,4)"},{title:"範例四：搭配 FIND 動態定位",description:"從第一個連字號後開始擷取 4 個字元。",formula:'=MID(A2,FIND("-",A2)+1,4)'}],
    tipsTitle:"實用技巧",tips:[["位置從 1 開始","不是從 0 開始計算。"],["數字結果仍是文字","後續要計算可使用 VALUE。"],["固定格式最適合","格式不固定時可搭配 FIND 或 TEXTBEFORE。"],["空格也算字元","計算開始位置時別漏掉空格與符號。"]],
    errorsTitle:"常見錯誤",errors:[["開始位置為 0","會出現 #VALUE!。"],["開始位置超過長度","會回傳空白文字。"],["字元數為負數","會出現 #VALUE!。"],["擷取位置錯一格","請把符號、空格也納入字元計數。"]],
    ctaTitle:"不知道中間代碼從哪裡開始？",ctaText:"提供原始文字與想擷取的中段內容，EveryFormula 會建立 MID 公式。",ctaButton:"建立文字公式",back:"← 返回 Excel 教學中心",
  },
  en: {
    guides:"Excel Guides",formulaTool:"Formula tool",badge:"Text function",title:"Excel MID Guide",subtitle:"Extract characters from a specific position within text for order years, product codes, IDs, and fixed-format data.",
    introTitle:"What does MID do?",intro:"MID starts at a specified position within text and returns a specified number of characters. The first character is position 1.",tags:["Order year","Product code","Middle of an ID","Fixed-format data"],
    syntaxTitle:"MID syntax",syntaxFormula:"=MID(text, start_num, num_chars)",syntaxItems:[["Text","Cell or text to extract"],["Start position","Where extraction begins"],["Number of characters","How many characters to return"],["Return type","Text"]],
    examples:[{title:"Example 1: Extract an order year",description:"A2 is ORD-2026-0086; take four characters from position 5.",formula:"=MID(A2,5,4)"},{title:"Example 2: Product category",description:"A2 is TW-ABC-001; return ABC.",formula:"=MID(A2,4,3)"},{title:"Example 3: Middle of an ID",description:"Take four characters starting at position 3.",formula:"=MID(A2,3,4)"},{title:"Example 4: Use FIND",description:"Start after the first hyphen and return four characters.",formula:'=MID(A2,FIND("-",A2)+1,4)'}],
    tipsTitle:"Useful tips",tips:[["Positions start at 1","Excel does not count from zero."],["Numbers become text","Use VALUE when the result must be calculated."],["Best for fixed formats","Use FIND or TEXTBEFORE for variable structures."],["Spaces count","Include spaces and symbols when counting positions."]],
    errorsTitle:"Common mistakes",errors:[["Start position is zero","Returns #VALUE!."],["Start is beyond the text","Returns an empty string."],["Negative character count","Returns #VALUE!."],["Result is off by one","Count spaces and punctuation too."]],
    ctaTitle:"Not sure where the middle code starts?",ctaText:"Provide the source text and desired section and EveryFormula will build the MID formula.",ctaButton:"Create a text formula",back:"← Back to Excel Guides",
  },
  ja: {
    guides:"Excel 学習センター",formulaTool:"数式ツール",badge:"文字列処理",title:"Excel MID 関数ガイド",subtitle:"文字列の指定位置から文字を抽出し、注文年、商品コード、ID、固定形式データを分割します。",
    introTitle:"MID 関数とは？",intro:"MID は文字列の指定位置から指定数の文字を返します。先頭の文字は位置 1 です。",tags:["注文年","商品コード","ID の中間","固定形式データ"],
    syntaxTitle:"MID の構文",syntaxFormula:"=MID(文字列, 開始位置, 文字数)",syntaxItems:[["文字列","抽出するセルや文字"],["開始位置","抽出を始める位置"],["文字数","返す文字数"],["戻り値","文字列"]],
    examples:[{title:"例1：注文年を抽出",description:"A2 が ORD-2026-0086 の場合、5文字目から4文字。",formula:"=MID(A2,5,4)"},{title:"例2：商品分類コード",description:"TW-ABC-001 から ABC を取得。",formula:"=MID(A2,4,3)"},{title:"例3：ID の中間",description:"3文字目から4文字を取得。",formula:"=MID(A2,3,4)"},{title:"例4：FIND と組み合わせ",description:"最初のハイフンの後から4文字。",formula:'=MID(A2,FIND("-",A2)+1,4)'}],
    tipsTitle:"実用的なヒント",tips:[["位置は1から","0からではありません。"],["数値も文字列になる","計算には VALUE を使います。"],["固定形式に最適","可変形式は FIND などと組み合わせます。"],["空白も1文字","記号や空白も数えます。"]],
    errorsTitle:"よくある間違い",errors:[["開始位置が0","#VALUE!。"],["開始位置が長さを超える","空文字を返します。"],["文字数が負数","#VALUE!。"],["位置がずれる","記号と空白も数えてください。"]],
    ctaTitle:"中間コードの位置が分かりませんか？",ctaText:"元の文字と必要部分を説明すると EveryFormula が MID 数式を作成します。",ctaButton:"文字列数式を作成",back:"← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides:"Excel 教学中心",formulaTool:"公式生成器",badge:"文本处理",title:"Excel MID 函数教学",subtitle:"从文本中间指定位置提取字符，快速拆分订单年份、商品代码与固定格式数据。",
    introTitle:"MID 是什么？",intro:"MID 从文本中的指定位置开始提取指定数量的字符。第一个字符的位置是1。",tags:["订单年份","商品代码","编号中段","固定格式数据"],
    syntaxTitle:"MID 语法",syntaxFormula:"=MID(文本, 开始位置, 字符数)",syntaxItems:[["文本","要提取的单元格或文本"],["开始位置","从第几个字符开始"],["字符数","要提取几个字符"],["返回类型","文本"]],
    examples:[{title:"示例一：提取订单年份",description:"A2 是 ORD-2026-0086，从第5个字符取4个。",formula:"=MID(A2,5,4)"},{title:"示例二：提取商品分类码",description:"从 TW-ABC-001 中提取 ABC。",formula:"=MID(A2,4,3)"},{title:"示例三：获取编号中段",description:"从第3个字符开始取4个。",formula:"=MID(A2,3,4)"},{title:"示例四：搭配 FIND",description:"从第一个连字符后开始提取4个字符。",formula:'=MID(A2,FIND("-",A2)+1,4)'}],
    tipsTitle:"实用技巧",tips:[["位置从1开始","不是从0开始计算。"],["数字结果仍是文本","计算时可使用 VALUE。"],["适合固定格式","格式不固定时搭配 FIND。"],["空格也算字符","符号与空格都要计算。"]],
    errorsTitle:"常见错误",errors:[["开始位置为0","出现 #VALUE!。"],["开始位置超过长度","返回空文本。"],["字符数为负数","出现 #VALUE!。"],["提取位置错一格","请把符号和空格纳入计数。"]],
    ctaTitle:"不知道中间代码从哪里开始？",ctaText:"提供原始文本与目标部分，EveryFormula 会创建 MID 公式。",ctaButton:"生成文本公式",back:"← 返回 Excel 教学中心",
  },
};
