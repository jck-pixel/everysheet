import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const trimContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides:"Excel 教學中心",formulaTool:"公式產生器",badge:"文字處理",title:"Excel TRIM 函數教學",subtitle:"清除文字前後與重複的空格，快速整理姓名、商品名稱、複製資料及外部系統匯入內容。",
    introTitle:"TRIM 是什麼？",intro:"TRIM 會移除文字開頭與結尾的空格，並把文字中間連續的多個一般空格縮成一個，常用於資料清理與比對前處理。",tags:["清理姓名空格","整理匯入資料","修正查找失敗","統一文字格式"],
    syntaxTitle:"TRIM 語法",syntaxFormula:"=TRIM(文字)",syntaxItems:[["文字","要清理的儲存格或文字"],["前後空格","全部移除"],["中間連續空格","保留一個"],["原始資料","不會被修改"]],
    examples:[{title:"範例一：清理姓名",description:"移除姓名前後及中間多餘空格。",formula:"=TRIM(A2)"},{title:"範例二：整理商品名稱",description:"把多個單字間空格縮成一個。",formula:"=TRIM(A2)"},{title:"範例三：修正 VLOOKUP 查找",description:"先清理查詢值再進行比對。",formula:"=VLOOKUP(TRIM(A2),F:G,2,FALSE)"},{title:"範例四：清理整欄資料",description:"在 B2 輸入後向下複製。",formula:"=TRIM(A2)"}],
    tipsTitle:"實用技巧",tips:[["不會刪除單字間必要空格","中間仍會保留一個一般空格。"],["適合查找前清理","隱藏空格常造成 VLOOKUP 或 XLOOKUP 找不到。"],["清理後可貼回原欄","複製結果，再選擇性貼上為值。"],["特殊空格要另外處理","網頁複製的 CHAR(160) 可搭配 SUBSTITUTE。"]],
    errorsTitle:"常見錯誤",errors:[["空格仍然存在","可能是不可分行空格 CHAR(160)。"],["中文字間的空格被保留","TRIM 會保留單一中間空格。"],["公式結果不能覆蓋來源","先在另一欄計算，再貼上為值。"],["查找仍失敗","還可能有換行、不可見字元或資料類型不同。"]],
    ctaTitle:"資料看起來一樣卻比對不到？",ctaText:"描述資料來源與異常情況，EverySheet 會建立 TRIM 或清理公式。",ctaButton:"建立清理公式",back:"← 返回 Excel 教學中心",
  },
  en: {
    guides:"Excel Guides",formulaTool:"Formula tool",badge:"Text function",title:"Excel TRIM Guide",subtitle:"Remove leading, trailing, and repeated spaces from names, product labels, copied data, and imported records.",
    introTitle:"What does TRIM do?",intro:"TRIM removes leading and trailing spaces and reduces repeated regular spaces between words to one. It is commonly used before matching or analysis.",tags:["Clean names","Imported data","Fix lookups","Standardize text"],
    syntaxTitle:"TRIM syntax",syntaxFormula:"=TRIM(text)",syntaxItems:[["Text","Cell or text to clean"],["Leading and trailing spaces","Removed"],["Repeated inner spaces","Reduced to one"],["Original data","Remains unchanged"]],
    examples:[{title:"Example 1: Clean a name",description:"Remove extra spaces around and within a name.",formula:"=TRIM(A2)"},{title:"Example 2: Product names",description:"Reduce multiple spaces between words to one.",formula:"=TRIM(A2)"},{title:"Example 3: Fix VLOOKUP",description:"Clean the lookup value before matching.",formula:"=VLOOKUP(TRIM(A2),F:G,2,FALSE)"},{title:"Example 4: Clean a column",description:"Enter in B2 and copy down.",formula:"=TRIM(A2)"}],
    tipsTitle:"Useful tips",tips:[["Necessary spaces remain","One regular space between words is preserved."],["Clean before lookups","Hidden spaces often cause VLOOKUP or XLOOKUP failures."],["Replace the source afterward","Copy the results and paste them as values."],["Special spaces need more work","Use SUBSTITUTE for CHAR(160) copied from web pages."]],
    errorsTitle:"Common mistakes",errors:[["Spaces remain","They may be nonbreaking spaces, CHAR(160)."],["A middle space remains","TRIM intentionally preserves one inner space."],["Cannot overwrite the source","Calculate in another column, then paste values."],["Lookup still fails","Check line breaks, hidden characters, and data types."]],
    ctaTitle:"Values look identical but will not match?",ctaText:"Describe the data source and problem and EverySheet will build a TRIM or cleanup formula.",ctaButton:"Create a cleanup formula",back:"← Back to Excel Guides",
  },
  ja: {
    guides:"Excel 学習センター",formulaTool:"数式ツール",badge:"文字列処理",title:"Excel TRIM 関数ガイド",subtitle:"文字列の前後と重複した空白を削除し、氏名、商品名、コピー・取込データを整えます。",
    introTitle:"TRIM 関数とは？",intro:"TRIM は文字列の先頭と末尾の空白を削除し、単語間の連続した通常空白を1つにします。照合前のデータ整理に便利です。",tags:["氏名の整理","取込データ","検索エラー修正","文字形式統一"],
    syntaxTitle:"TRIM の構文",syntaxFormula:"=TRIM(文字列)",syntaxItems:[["文字列","整理するセルや文字"],["前後の空白","削除"],["連続した空白","1つにする"],["元データ","変更されません"]],
    examples:[{title:"例1：氏名を整理",description:"氏名の前後と途中の余分な空白を削除。",formula:"=TRIM(A2)"},{title:"例2：商品名を整理",description:"単語間の複数空白を1つにします。",formula:"=TRIM(A2)"},{title:"例3：VLOOKUP を修正",description:"検索値を整理してから照合。",formula:"=VLOOKUP(TRIM(A2),F:G,2,FALSE)"},{title:"例4：列全体を整理",description:"B2 に入力して下へコピー。",formula:"=TRIM(A2)"}],
    tipsTitle:"実用的なヒント",tips:[["必要な空白は残る","単語間には1つの通常空白が残ります。"],["検索前に整理","隠れた空白は検索失敗の原因です。"],["結果を元の列へ戻せる","コピー後、値として貼り付けます。"],["特殊空白は別処理","CHAR(160) は SUBSTITUTE と組み合わせます。"]],
    errorsTitle:"よくある間違い",errors:[["空白が残る","改行しない空白 CHAR(160) の可能性。"],["途中の空白が残る","1つの空白は意図的に保持されます。"],["元セルを直接変更できない","別列で計算し値貼り付け。"],["検索がまだ失敗","改行、不可視文字、型も確認。"]],
    ctaTitle:"同じに見える値が一致しませんか？",ctaText:"データ元と問題を説明すると EverySheet が TRIM や整理数式を作成します。",ctaButton:"整理数式を作成",back:"← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides:"Excel 教学中心",formulaTool:"公式生成器",badge:"文本处理",title:"Excel TRIM 函数教学",subtitle:"清除文本前后与重复空格，快速整理姓名、商品名称、复制资料与外部系统导入内容。",
    introTitle:"TRIM 是什么？",intro:"TRIM 移除文本开头与结尾的空格，并把文本中连续的多个普通空格缩成一个，常用于数据清理与匹配前处理。",tags:["清理姓名空格","整理导入数据","修正查找失败","统一文本格式"],
    syntaxTitle:"TRIM 语法",syntaxFormula:"=TRIM(文本)",syntaxItems:[["文本","要清理的单元格或文本"],["前后空格","全部移除"],["中间连续空格","保留一个"],["原始数据","不会被修改"]],
    examples:[{title:"示例一：清理姓名",description:"移除姓名前后及中间多余空格。",formula:"=TRIM(A2)"},{title:"示例二：整理商品名称",description:"把单词间多个空格缩成一个。",formula:"=TRIM(A2)"},{title:"示例三：修正 VLOOKUP",description:"先清理查询值再匹配。",formula:"=VLOOKUP(TRIM(A2),F:G,2,FALSE)"},{title:"示例四：清理整列数据",description:"在 B2 输入后向下复制。",formula:"=TRIM(A2)"}],
    tipsTitle:"实用技巧",tips:[["不会删除必要空格","单词间仍保留一个普通空格。"],["适合查找前清理","隐藏空格常造成 VLOOKUP 或 XLOOKUP 找不到。"],["清理后可贴回原列","复制结果，再选择性粘贴为值。"],["特殊空格需另外处理","网页复制的 CHAR(160) 可搭配 SUBSTITUTE。"]],
    errorsTitle:"常见错误",errors:[["空格仍存在","可能是不间断空格 CHAR(160)。"],["中间空格被保留","TRIM 会保留单个中间空格。"],["无法直接覆盖来源","先在另一列计算，再粘贴为值。"],["查找仍失败","检查换行、不可见字符或数据类型。"]],
    ctaTitle:"数据看起来一样却匹配不到？",ctaText:"描述数据来源与异常情况，EverySheet 会创建 TRIM 或清理公式。",ctaButton:"生成清理公式",back:"← 返回 Excel 教学中心",
  },
};
