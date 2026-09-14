import { AppLanguage } from "../../i18n";
import type { GuideDemo } from "../GuideExampleTable";

export const indexExamples: Record<AppLanguage, GuideDemo[]> = {
  "zh-TW": [
    {title:"範例一：取得清單第 3 筆",instruction:"INDEX 從 A2:A6 的第一格開始計算，第 3 筆資料是「筆記本」。",headers:["A 商品清單","C 指定筆數","D 查詢結果"],rows:[["原子筆","3","筆記本"],["資料夾","",""],["筆記本","",""],["計算機","",""],["便利貼","",""]],cell:"D2",formula:"=INDEX(A2:A6,C2)",result:"筆記本"},
    {title:"範例二：二維表格交叉取值",instruction:"在 B2:D5 範圍中取第 2 列、第 3 欄，交叉位置是台中的 3 月銷售額 135。",headers:["A 地區","B 1月","C 2月","D 3月","F 列數","G 欄數","H 結果"],rows:[["台北","120","130","145","2","3","135"],["台中","110","125","135","","",""] ,["高雄","100","115","128","","",""] ,["台南","90","105","118","","",""]],cell:"H2",formula:"=INDEX(B2:D5,F2,G2)",result:"135"},
    {title:"範例三：列數來自儲存格",instruction:"F2 輸入 4，公式就會從 B2:B6 動態取出第 4 筆商品「計算機」。",headers:["A 編號","B 商品名稱","F 指定列數","G 查詢結果"],rows:[["P101","原子筆","4","計算機"],["P102","資料夾","",""],["P103","筆記本","",""],["P104","計算機","",""],["P105","便利貼","",""]],cell:"G2",formula:"=INDEX(B2:B6,F2)",result:"計算機"},
    {title:"範例四：搭配 MATCH",instruction:"MATCH 先找到「王小美」位於名單第 2 列，INDEX 再從薪資欄回傳同列的 42000。",headers:["A 姓名","B 部門","C 薪資","F 查詢姓名","G 查詢薪資"],rows:[["陳小明","業務部","45000","王小美","42000"],["王小美","行政部","42000","",""],["林大華","資訊部","52000","",""]],cell:"G2",formula:"=INDEX(C2:C4,MATCH(F2,A2:A4,0))",result:"42000"},
  ],
  en: [
    {title:"Example 1: Third item",instruction:"INDEX counts from the first cell in A2:A6. The third item is Notebook.",headers:["A Product list","C Position","D Result"],rows:[["Pen","3","Notebook"],["Folder","",""],["Notebook","",""],["Calculator","",""],["Sticky notes","",""]],cell:"D2",formula:"=INDEX(A2:A6,C2)",result:"Notebook"},
    {title:"Example 2: Row-column intersection",instruction:"Return row 2, column 3 from B2:D5—the March sales value for Taichung, 135.",headers:["A Region","B Jan","C Feb","D Mar","F Row","G Column","H Result"],rows:[["Taipei","120","130","145","2","3","135"],["Taichung","110","125","135","","",""] ,["Kaohsiung","100","115","128","","",""] ,["Tainan","90","105","118","","",""]],cell:"H2",formula:"=INDEX(B2:D5,F2,G2)",result:"135"},
    {title:"Example 3: Row from a cell",instruction:"Enter 4 in F2 to dynamically return the fourth product, Calculator, from B2:B6.",headers:["A ID","B Product","F Row number","G Result"],rows:[["P101","Pen","4","Calculator"],["P102","Folder","",""],["P103","Notebook","",""],["P104","Calculator","",""],["P105","Sticky notes","",""]],cell:"G2",formula:"=INDEX(B2:B6,F2)",result:"Calculator"},
    {title:"Example 4: Combine with MATCH",instruction:"MATCH finds Amy Wang in row 2, then INDEX returns 42000 from the same row of the salary range.",headers:["A Name","B Department","C Salary","F Lookup name","G Salary"],rows:[["Alex Chen","Sales","45000","Amy Wang","42000"],["Amy Wang","Admin","42000","",""],["David Lin","IT","52000","",""]],cell:"G2",formula:"=INDEX(C2:C4,MATCH(F2,A2:A4,0))",result:"42000"},
  ],
  ja: [
    {title:"例1：3番目の値",instruction:"INDEX は A2:A6 の先頭から数え、3番目の「ノート」を返します。",headers:["A 商品一覧","C 指定位置","D 結果"],rows:[["ペン","3","ノート"],["ファイル","",""],["ノート","",""],["電卓","",""],["付箋","",""]],cell:"D2",formula:"=INDEX(A2:A6,C2)",result:"ノート"},
    {title:"例2：行列の交差",instruction:"B2:D5 の2行目・3列目にある、台中の3月売上135を返します。",headers:["A 地域","B 1月","C 2月","D 3月","F 行","G 列","H 結果"],rows:[["台北","120","130","145","2","3","135"],["台中","110","125","135","","",""] ,["高雄","100","115","128","","",""] ,["台南","90","105","118","","",""]],cell:"H2",formula:"=INDEX(B2:D5,F2,G2)",result:"135"},
    {title:"例3：セルで行を指定",instruction:"F2 に4を入力すると、B2:B6 の4番目の商品「電卓」を動的に返します。",headers:["A 番号","B 商品名","F 行番号","G 結果"],rows:[["P101","ペン","4","電卓"],["P102","ファイル","",""],["P103","ノート","",""],["P104","電卓","",""],["P105","付箋","",""]],cell:"G2",formula:"=INDEX(B2:B6,F2)",result:"電卓"},
    {title:"例4：MATCH と組み合わせ",instruction:"MATCH が「鈴木花子」の行を探し、INDEX が同じ行の給与42000を返します。",headers:["A 氏名","B 部署","C 給与","F 検索氏名","G 給与"],rows:[["山田太郎","営業部","45000","鈴木花子","42000"],["鈴木花子","管理部","42000","",""],["林大輔","IT部","52000","",""]],cell:"G2",formula:"=INDEX(C2:C4,MATCH(F2,A2:A4,0))",result:"42000"},
  ],
  "zh-CN": [
    {title:"示例一：返回第 3 条",instruction:"INDEX 从 A2:A6 的第一格开始计算，第3条数据是“笔记本”。",headers:["A 商品列表","C 指定条数","D 查询结果"],rows:[["圆珠笔","3","笔记本"],["文件夹","",""],["笔记本","",""],["计算器","",""],["便利贴","",""]],cell:"D2",formula:"=INDEX(A2:A6,C2)",result:"笔记本"},
    {title:"示例二：二维表交叉取值",instruction:"在 B2:D5 中返回第2行、第3列，即台中的3月销售额135。",headers:["A 地区","B 1月","C 2月","D 3月","F 行数","G 列数","H 结果"],rows:[["台北","120","130","145","2","3","135"],["台中","110","125","135","","",""] ,["高雄","100","115","128","","",""] ,["台南","90","105","118","","",""]],cell:"H2",formula:"=INDEX(B2:D5,F2,G2)",result:"135"},
    {title:"示例三：行数来自单元格",instruction:"F2 输入4，公式会从 B2:B6 动态返回第4个商品“计算器”。",headers:["A 编号","B 商品名称","F 指定行数","G 查询结果"],rows:[["P101","圆珠笔","4","计算器"],["P102","文件夹","",""],["P103","笔记本","",""],["P104","计算器","",""],["P105","便利贴","",""]],cell:"G2",formula:"=INDEX(B2:B6,F2)",result:"计算器"},
    {title:"示例四：搭配 MATCH",instruction:"MATCH 先找到“王小美”位于第2行，INDEX 再从工资列返回同一行的42000。",headers:["A 姓名","B 部门","C 工资","F 查询姓名","G 查询工资"],rows:[["陈小明","销售部","45000","王小美","42000"],["王小美","行政部","42000","",""],["林大华","信息部","52000","",""]],cell:"G2",formula:"=INDEX(C2:C4,MATCH(F2,A2:A4,0))",result:"42000"},
  ],
};
