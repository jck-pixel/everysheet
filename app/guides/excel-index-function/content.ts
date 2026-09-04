import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const indexContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides:"Excel 教學中心",formulaTool:"公式產生器",badge:"查找函數",title:"Excel INDEX 函數教學",subtitle:"依照列數與欄數，從指定範圍取出交叉位置的資料，是建立彈性查找公式的重要基礎。",
    introTitle:"INDEX 是什麼？",intro:"INDEX 會從一個資料範圍中，依照指定的第幾列與第幾欄傳回內容。它可單獨取值，也常與 MATCH 組合進行動態查找。",tags:["指定列取值","行列交叉查找","動態資料範圍","搭配 MATCH"],
    syntaxTitle:"INDEX 語法",syntaxFormula:"=INDEX(資料範圍, 列數, [欄數])",syntaxItems:[["資料範圍","要取得內容的區域"],["列數","範圍內第幾列"],["欄數","範圍內第幾欄"],["傳回結果","指定位置的內容"]],
    examples:[
      {title:"範例一：取得清單第 3 筆",description:"從 A2:A6 傳回第 3 列內容。",formula:"=INDEX(A2:A6,3)"},
      {title:"範例二：二維表格交叉取值",description:"從 B2:D5 取得第 2 列、第 3 欄。",formula:"=INDEX(B2:D5,2,3)"},
      {title:"範例三：列數來自儲存格",description:"F2 輸入 1、2、3，即可切換傳回的資料。",formula:"=INDEX(B2:B10,F2)"},
      {title:"範例四：搭配 MATCH",description:"MATCH 找到姓名所在列，INDEX 傳回同列薪資。",formula:"=INDEX(C2:C10,MATCH(F2,A2:A10,0))"},
    ],
    tipsTitle:"實用技巧",tips:[["列數從範圍內開始算","B2:B10 的第 1 列是 B2，不是工作表第 1 列。"],["單欄可省略欄數","只有一欄時通常只需要資料範圍與列數。"],["可向左查找","搭配 MATCH 時，回傳欄不必位於查找欄右側。"],["固定範圍","複製公式時可用 $ 固定資料範圍。"]],
    errorsTitle:"常見錯誤",errors:[["出現 #REF!","指定列數或欄數超出資料範圍。"],["列數從工作表開始算","INDEX 是從選取範圍內的第 1 列開始。"],["列欄順序顛倒","第二個參數是列數，第三個才是欄數。"],["MATCH 範圍大小不同","組合使用時，回傳範圍與查找範圍應對齊。"]],
    ctaTitle:"不知道列數與範圍怎麼設定？",ctaText:"描述資料位置與想取出的內容，EveryFormula 會建立 INDEX 公式。",ctaButton:"建立 INDEX 公式",back:"← 返回 Excel 教學中心",
  },
  en: {
    guides:"Excel Guides",formulaTool:"Formula tool",badge:"Lookup function",title:"Excel INDEX Guide",subtitle:"Return a value at a specified row and column within a range—the foundation of flexible lookup formulas.",
    introTitle:"What does INDEX do?",intro:"INDEX returns the value at a selected row and column inside a range. It works alone and is often combined with MATCH for dynamic lookups.",tags:["Return a selected row","Row-column intersection","Dynamic ranges","Combine with MATCH"],
    syntaxTitle:"INDEX syntax",syntaxFormula:"=INDEX(array, row_num, [column_num])",syntaxItems:[["Array","The range containing results"],["Row number","Row within the range"],["Column number","Column within the range"],["Result","Value at that position"]],
    examples:[{title:"Example 1: Third item",description:"Return the third item from A2:A6.",formula:"=INDEX(A2:A6,3)"},{title:"Example 2: Row-column intersection",description:"Return row 2, column 3 from B2:D5.",formula:"=INDEX(B2:D5,2,3)"},{title:"Example 3: Row from a cell",description:"F2 controls which item is returned.",formula:"=INDEX(B2:B10,F2)"},{title:"Example 4: Combine with MATCH",description:"MATCH finds the name row and INDEX returns salary.",formula:"=INDEX(C2:C10,MATCH(F2,A2:A10,0))"}],
    tipsTitle:"Useful tips",tips:[["Count inside the range","Row 1 of B2:B10 is B2, not worksheet row 1."],["Omit column for one column","A single-column range normally needs only the row number."],["Look left","With MATCH, the return column may be left of the lookup column."],["Lock ranges","Use $ to keep ranges fixed when copying."]],
    errorsTitle:"Common mistakes",errors:[["#REF! appears","The row or column number is outside the selected range."],["Counting worksheet rows","INDEX counts from the start of its array."],["Row and column are reversed","Row is the second argument and column is the third."],["MATCH ranges do not align","Lookup and return ranges should cover corresponding rows."]],
    ctaTitle:"Not sure which row and range to use?",ctaText:"Describe your data and desired value and EveryFormula will build the INDEX formula.",ctaButton:"Create an INDEX formula",back:"← Back to Excel Guides",
  },
  ja: {
    guides:"Excel 学習センター",formulaTool:"数式ツール",badge:"検索関数",title:"Excel INDEX 関数ガイド",subtitle:"指定範囲の行番号と列番号から交差位置の値を返す、柔軟な検索の基本関数です。",
    introTitle:"INDEX 関数とは？",intro:"INDEX は範囲内の指定行・列にある値を返します。単独でも使え、MATCH と組み合わせると動的検索ができます。",tags:["指定行の値","行列交差","動的範囲","MATCH と組み合わせ"],
    syntaxTitle:"INDEX の構文",syntaxFormula:"=INDEX(範囲, 行番号, [列番号])",syntaxItems:[["範囲","結果を取得する範囲"],["行番号","範囲内の行"],["列番号","範囲内の列"],["結果","指定位置の値"]],
    examples:[{title:"例1：3番目の値",description:"A2:A6 の3番目を返します。",formula:"=INDEX(A2:A6,3)"},{title:"例2：行列の交差",description:"B2:D5 の2行目、3列目を返します。",formula:"=INDEX(B2:D5,2,3)"},{title:"例3：セルで行を指定",description:"F2 の数値で返す項目を切り替えます。",formula:"=INDEX(B2:B10,F2)"},{title:"例4：MATCH と組み合わせ",description:"MATCH で氏名の行を探し、INDEX で給与を返します。",formula:"=INDEX(C2:C10,MATCH(F2,A2:A10,0))"}],
    tipsTitle:"実用的なヒント",tips:[["範囲内で数える","B2:B10 の1行目は B2 です。"],["1列なら列番号省略","単一列では通常、行番号だけ指定します。"],["左方向にも検索","MATCH と組み合わせれば戻り列の位置を選べます。"],["範囲を固定","コピー時は $ で範囲を固定します。"]],
    errorsTitle:"よくある間違い",errors:[["#REF! が表示","行番号または列番号が範囲外です。"],["シート行で数える","INDEX は選択範囲の先頭から数えます。"],["行列の順序が逆","第2引数が行、第3引数が列です。"],["MATCH 範囲がずれる","検索範囲と戻り範囲の行を揃えます。"]],
    ctaTitle:"行番号や範囲が分かりませんか？",ctaText:"データ位置と取得内容を説明すると EveryFormula が数式を作成します。",ctaButton:"INDEX 数式を作成",back:"← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides:"Excel 教学中心",formulaTool:"公式生成器",badge:"查找函数",title:"Excel INDEX 函数教学",subtitle:"根据行数与列数从指定范围返回交叉位置的数据，是灵活查找公式的重要基础。",
    introTitle:"INDEX 是什么？",intro:"INDEX 根据指定的第几行与第几列返回范围内的内容。可单独取值，也常与 MATCH 组合动态查找。",tags:["指定行取值","行列交叉查找","动态数据范围","搭配 MATCH"],
    syntaxTitle:"INDEX 语法",syntaxFormula:"=INDEX(数据范围, 行数, [列数])",syntaxItems:[["数据范围","要返回内容的区域"],["行数","范围内第几行"],["列数","范围内第几列"],["返回结果","指定位置的内容"]],
    examples:[{title:"示例一：返回第 3 条",description:"从 A2:A6 返回第3行内容。",formula:"=INDEX(A2:A6,3)"},{title:"示例二：二维表交叉取值",description:"从 B2:D5 返回第2行、第3列。",formula:"=INDEX(B2:D5,2,3)"},{title:"示例三：行数来自单元格",description:"F2 输入不同数字即可切换结果。",formula:"=INDEX(B2:B10,F2)"},{title:"示例四：搭配 MATCH",description:"MATCH 找到姓名所在行，INDEX 返回同一行工资。",formula:"=INDEX(C2:C10,MATCH(F2,A2:A10,0))"}],
    tipsTitle:"实用技巧",tips:[["从范围内部开始计算","B2:B10 的第1行是 B2。"],["单列可省略列数","只有一列时通常只需指定行数。"],["可以向左查找","搭配 MATCH 时返回列不必在查找列右侧。"],["固定范围","复制公式时使用 $ 固定数据范围。"]],
    errorsTitle:"常见错误",errors:[["出现 #REF!","指定行数或列数超出范围。"],["从工作表行开始计算","INDEX 从选定范围的第1行开始。"],["行列顺序颠倒","第二个参数是行数，第三个是列数。"],["MATCH 范围大小不同","组合使用时查找范围与返回范围应对齐。"]],
    ctaTitle:"不知道行数与范围怎么设置？",ctaText:"描述数据位置与目标内容，EveryFormula 会创建 INDEX 公式。",ctaButton:"生成 INDEX 公式",back:"← 返回 Excel 教学中心",
  },
};
