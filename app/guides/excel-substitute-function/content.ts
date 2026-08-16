import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const substituteContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides:"Excel 教學中心",formulaTool:"公式產生器",badge:"文字處理",title:"Excel SUBSTITUTE 函數教學",subtitle:"在文字中尋找並替換指定內容，快速更新商品編號、移除符號、清理空格與統一資料格式。",
    introTitle:"SUBSTITUTE 是什麼？",intro:"SUBSTITUTE 會在文字中尋找指定的舊文字並替換成新文字。它可以替換全部符合內容，也能指定只替換第幾次出現的位置。",tags:["更新商品編號","移除文字符號","統一資料格式","替換指定位置"],
    syntaxTitle:"SUBSTITUTE 語法",syntaxFormula:"=SUBSTITUTE(文字, 舊文字, 新文字, [出現次數])",syntaxItems:[["文字","要處理的儲存格或文字"],["舊文字","要尋找的內容"],["新文字","要替換成的內容"],["出現次數","選填，只替換第幾次"]],
    examples:[{title:"範例一：更新商品編號前綴",description:"把編號中的 OLD 改成 NEW。",formula:'=SUBSTITUTE(A2,"OLD","NEW")'},{title:"範例二：移除連字號",description:"用空字串取代所有連字號。",formula:'=SUBSTITUTE(A2,"-","")'},{title:"範例三：只替換第二個符號",description:"指定出現次數為 2。",formula:'=SUBSTITUTE(A2,"-","/",2)'},{title:"範例四：清除特殊空格",description:"移除網頁資料常見的 CHAR(160)。",formula:'=SUBSTITUTE(A2,CHAR(160)," ")'}],
    tipsTitle:"實用技巧",tips:[["預設替換全部","省略出現次數時，每個相符內容都會被替換。"],["大小寫有差異","SUBSTITUTE 會區分英文大小寫。"],["可用空字串刪除","把新文字設為 \"\" 即可移除內容。"],["適合搭配 TRIM","先替換特殊空格，再用 TRIM 整理一般空格。"]],
    errorsTitle:"常見錯誤",errors:[["內容沒有被替換","舊文字可能有大小寫或隱藏字元差異。"],["替換了太多位置","加入出現次數，只替換指定一處。"],["數字被視為文字","替換後的結果通常是文字，計算時可搭配 VALUE。"],["用錯 REPLACE","SUBSTITUTE 依內容替換；REPLACE 則依位置替換。"]],
    ctaTitle:"大量資料要統一替換？",ctaText:"提供原始內容與替換規則，EverySheet 會建立 SUBSTITUTE 公式。",ctaButton:"建立替換公式",back:"← 返回 Excel 教學中心",
  },
  en: {
    guides:"Excel Guides",formulaTool:"Formula tool",badge:"Text function",title:"Excel SUBSTITUTE Guide",subtitle:"Find and replace text to update product IDs, remove symbols, clean spaces, and standardize imported data.",
    introTitle:"What does SUBSTITUTE do?",intro:"SUBSTITUTE finds specified text and replaces it with new text. It can replace every occurrence or only a specified occurrence.",tags:["Update product IDs","Remove symbols","Standardize data","Replace one occurrence"],
    syntaxTitle:"SUBSTITUTE syntax",syntaxFormula:"=SUBSTITUTE(text, old_text, new_text, [instance_num])",syntaxItems:[["Text","Cell or text to process"],["Old text","Content to find"],["New text","Replacement content"],["Instance number","Optional occurrence to replace"]],
    examples:[{title:"Example 1: Update an ID prefix",description:"Replace OLD with NEW in a product ID.",formula:'=SUBSTITUTE(A2,"OLD","NEW")'},{title:"Example 2: Remove hyphens",description:"Replace all hyphens with an empty string.",formula:'=SUBSTITUTE(A2,"-","")'},{title:"Example 3: Replace only the second symbol",description:"Set the occurrence number to 2.",formula:'=SUBSTITUTE(A2,"-","/",2)'},{title:"Example 4: Clean special spaces",description:"Replace CHAR(160), often copied from web pages.",formula:'=SUBSTITUTE(A2,CHAR(160)," ")'}],
    tipsTitle:"Useful tips",tips:[["All occurrences by default","Omitting instance_num replaces every match."],["It is case-sensitive","Uppercase and lowercase letters are different."],["Use an empty string to delete",'Set new_text to "" to remove content.'],["Combine it with TRIM","Replace special spaces, then clean regular spaces with TRIM."]],
    errorsTitle:"Common mistakes",errors:[["Nothing is replaced","Check capitalization and hidden characters."],["Too many items are replaced","Specify the occurrence number."],["Numbers become text","Use VALUE if the result must be calculated."],["Confusing it with REPLACE","SUBSTITUTE matches content; REPLACE uses character positions."]],
    ctaTitle:"Need to standardize many values?",ctaText:"Provide the original content and replacement rule and EverySheet will build the SUBSTITUTE formula.",ctaButton:"Create a replacement formula",back:"← Back to Excel Guides",
  },
  ja: {
    guides:"Excel 学習センター",formulaTool:"数式ツール",badge:"文字列処理",title:"Excel SUBSTITUTE 関数ガイド",subtitle:"文字列を検索・置換し、商品番号の更新、記号削除、空白整理、データ形式の統一を行います。",
    introTitle:"SUBSTITUTE 関数とは？",intro:"SUBSTITUTE は指定した古い文字列を新しい文字列に置き換えます。すべて置換することも、指定した出現回数だけを置換することもできます。",tags:["商品番号更新","記号削除","データ統一","指定箇所の置換"],
    syntaxTitle:"SUBSTITUTE の構文",syntaxFormula:"=SUBSTITUTE(文字列, 検索文字列, 置換文字列, [出現回数])",syntaxItems:[["文字列","処理するセルや文字"],["検索文字列","探す内容"],["置換文字列","新しい内容"],["出現回数","省略可、何番目を置換するか"]],
    examples:[{title:"例1：商品番号の接頭辞を更新",description:"OLD を NEW に変更。",formula:'=SUBSTITUTE(A2,"OLD","NEW")'},{title:"例2：ハイフンを削除",description:"すべてのハイフンを空文字に置換。",formula:'=SUBSTITUTE(A2,"-","")'},{title:"例3：2番目だけ置換",description:"出現回数に2を指定。",formula:'=SUBSTITUTE(A2,"-","/",2)'},{title:"例4：特殊空白を整理",description:"Web データの CHAR(160) を置換。",formula:'=SUBSTITUTE(A2,CHAR(160)," ")'}],
    tipsTitle:"実用的なヒント",tips:[["省略時はすべて置換","出現回数を省くと全一致を置換します。"],["大文字小文字を区別","英字の大小は別として扱います。"],["空文字で削除",'置換文字列を "" にすると削除できます。'],["TRIM と組み合わせ","特殊空白を置換してから一般空白を整理。"]],
    errorsTitle:"よくある間違い",errors:[["置換されない","大文字小文字や不可視文字を確認。"],["置換しすぎる","出現回数を指定。"],["数値が文字列になる","計算には VALUE を使用。"],["REPLACE との違い","SUBSTITUTE は内容、REPLACE は位置で置換。"]],
    ctaTitle:"大量データを統一しますか？",ctaText:"元の内容と置換ルールを説明すると EverySheet が SUBSTITUTE 数式を作成します。",ctaButton:"置換数式を作成",back:"← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides:"Excel 教学中心",formulaTool:"公式生成器",badge:"文本处理",title:"Excel SUBSTITUTE 函数教学",subtitle:"在文本中查找并替换指定内容，快速更新商品编号、移除符号、清理空格与统一数据格式。",
    introTitle:"SUBSTITUTE 是什么？",intro:"SUBSTITUTE 在文本中查找指定的旧文本并替换成新文本，可以替换全部匹配内容，也能指定只替换第几次出现的位置。",tags:["更新商品编号","移除文本符号","统一数据格式","替换指定位置"],
    syntaxTitle:"SUBSTITUTE 语法",syntaxFormula:"=SUBSTITUTE(文本, 旧文本, 新文本, [出现次数])",syntaxItems:[["文本","要处理的单元格或文本"],["旧文本","要查找的内容"],["新文本","替换后的内容"],["出现次数","选填，只替换第几次"]],
    examples:[{title:"示例一：更新商品编号前缀",description:"把编号中的 OLD 改成 NEW。",formula:'=SUBSTITUTE(A2,"OLD","NEW")'},{title:"示例二：移除连字符",description:"用空文本替换所有连字符。",formula:'=SUBSTITUTE(A2,"-","")'},{title:"示例三：只替换第二个符号",description:"指定出现次数为2。",formula:'=SUBSTITUTE(A2,"-","/",2)'},{title:"示例四：清除特殊空格",description:"替换网页数据常见的 CHAR(160)。",formula:'=SUBSTITUTE(A2,CHAR(160)," ")'}],
    tipsTitle:"实用技巧",tips:[["默认替换全部","省略出现次数时，每个匹配内容都会被替换。"],["区分大小写","SUBSTITUTE 会区分英文字母大小写。"],["使用空文本删除",'将新文本设置为 "" 即可移除内容。'],["适合搭配 TRIM","先替换特殊空格，再整理普通空格。"]],
    errorsTitle:"常见错误",errors:[["内容没有被替换","检查大小写或隐藏字符。"],["替换了太多位置","加入出现次数，只替换指定位置。"],["数字变成文本","计算时可搭配 VALUE。"],["混淆 REPLACE","SUBSTITUTE 按内容替换，REPLACE 按位置替换。"]],
    ctaTitle:"大量数据需要统一替换？",ctaText:"提供原始内容与替换规则，EverySheet 会创建 SUBSTITUTE 公式。",ctaButton:"生成替换公式",back:"← 返回 Excel 教学中心",
  },
};
