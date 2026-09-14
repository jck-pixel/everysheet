import { AppLanguage } from "../../i18n";
import type { GuideDemo } from "../GuideExampleTable";

export const sumifExamples: Record<AppLanguage, GuideDemo[]> = {
  "zh-TW": [
    {title:"範例一：加總業務部費用",instruction:"B 欄符合「業務部」的列共有三筆，SUMIF 會加總其 C 欄費用：1200＋800＋1500＝3500。",headers:["A 項目","B 部門","C 費用","E 加總結果"],rows:[["交通費","業務部","1200","3500"],["文具費","行政部","600",""],["餐費","業務部","800",""],["設備費","資訊部","2000",""],["住宿費","業務部","1500",""]],cell:"E2",formula:'=SUMIF(B2:B6,"業務部",C2:C6)',result:"3500"},
    {title:"範例二：加總指定商品",instruction:"F2 輸入「筆記本」，公式會加總商品欄符合的兩筆銷售金額：120＋240＝360。",headers:["A 日期","B 商品","C 銷售額","F 查詢商品","G 加總結果"],rows:[["8/1","筆記本","120","筆記本","360"],["8/2","原子筆","75","",""],["8/3","筆記本","240","",""],["8/4","資料夾","180","",""]],cell:"G2",formula:"=SUMIF(B2:B5,F2,C2:C5)",result:"360"},
    {title:"範例三：加總大於 1,000 的數值",instruction:"條件範圍本身就是要加總的數值；只有 1200、2500、1800 大於 1000，合計為 5500。",headers:["A 項目","B 金額","D 加總結果"],rows:[["訂單 A","800","5500"],["訂單 B","1200",""],["訂單 C","2500",""],["訂單 D","950",""],["訂單 E","1800",""]],cell:"D2",formula:'=SUMIF(B2:B6,">1000")',result:"5500"},
    {title:"範例四：文字包含指定內容",instruction:"萬用字元 * 代表任意文字，因此「紅蘋果」與「蘋果汁」都會被納入，金額合計 450。",headers:["A 商品名稱","B 金額","D 加總結果"],rows:[["紅蘋果","200","450"],["香蕉","180",""],["蘋果汁","250",""],["葡萄","220",""],["鳳梨","160",""]],cell:"D2",formula:'=SUMIF(A2:A6,"*蘋果*",B2:B6)',result:"450"},
  ],
  en: [
    {title:"Example 1: Sales department costs",instruction:"Three rows are in Sales, so SUMIF adds 1200 + 800 + 1500 for a total of 3500.",headers:["A Item","B Department","C Cost","E Total"],rows:[["Travel","Sales","1200","3500"],["Stationery","Admin","600",""],["Meals","Sales","800",""],["Equipment","IT","2000",""],["Lodging","Sales","1500",""]],cell:"E2",formula:'=SUMIF(B2:B6,"Sales",C2:C6)',result:"3500"},
    {title:"Example 2: Selected product",instruction:"Enter Notebook in F2. The two matching sales values, 120 and 240, total 360.",headers:["A Date","B Product","C Sales","F Product","G Total"],rows:[["8/1","Notebook","120","Notebook","360"],["8/2","Pen","75","",""],["8/3","Notebook","240","",""],["8/4","Folder","180","",""]],cell:"G2",formula:"=SUMIF(B2:B5,F2,C2:C5)",result:"360"},
    {title:"Example 3: Values above 1,000",instruction:"The criteria range is also summed. Only 1200, 2500, and 1800 exceed 1000, totaling 5500.",headers:["A Order","B Amount","D Total"],rows:[["Order A","800","5500"],["Order B","1200",""],["Order C","2500",""],["Order D","950",""],["Order E","1800",""]],cell:"D2",formula:'=SUMIF(B2:B6,">1000")',result:"5500"},
    {title:"Example 4: Text contains a word",instruction:"The * wildcard matches any text, so Red Apple and Apple Juice are both included for a total of 450.",headers:["A Product","B Amount","D Total"],rows:[["Red Apple","200","450"],["Banana","180",""],["Apple Juice","250",""],["Grapes","220",""],["Pineapple","160",""]],cell:"D2",formula:'=SUMIF(A2:A6,"*Apple*",B2:B6)',result:"450"},
  ],
  ja: [
    {title:"例1：営業部の費用",instruction:"営業部の3行にある1200、800、1500を合計し、結果は3500です。",headers:["A 項目","B 部署","C 費用","E 合計"],rows:[["交通費","営業部","1200","3500"],["文具費","管理部","600",""],["食費","営業部","800",""],["設備費","IT部","2000",""],["宿泊費","営業部","1500",""]],cell:"E2",formula:'=SUMIF(B2:B6,"営業部",C2:C6)',result:"3500"},
    {title:"例2：指定商品",instruction:"F2 に「ノート」を入力すると、一致する120と240を合計して360を返します。",headers:["A 日付","B 商品","C 売上","F 検索商品","G 合計"],rows:[["8/1","ノート","120","ノート","360"],["8/2","ペン","75","",""],["8/3","ノート","240","",""],["8/4","ファイル","180","",""]],cell:"G2",formula:"=SUMIF(B2:B5,F2,C2:C5)",result:"360"},
    {title:"例3：1,000 より大きい値",instruction:"条件範囲自体を合計します。1000を超える1200、2500、1800の合計は5500です。",headers:["A 注文","B 金額","D 合計"],rows:[["注文 A","800","5500"],["注文 B","1200",""],["注文 C","2500",""],["注文 D","950",""],["注文 E","1800",""]],cell:"D2",formula:'=SUMIF(B2:B6,">1000")',result:"5500"},
    {title:"例4：文字を含む商品",instruction:"* は任意の文字列を表すため、「赤リンゴ」と「リンゴジュース」を合計して450になります。",headers:["A 商品名","B 金額","D 合計"],rows:[["赤リンゴ","200","450"],["バナナ","180",""],["リンゴジュース","250",""],["ブドウ","220",""],["パイナップル","160",""]],cell:"D2",formula:'=SUMIF(A2:A6,"*リンゴ*",B2:B6)',result:"450"},
  ],
  "zh-CN": [
    {title:"示例一：汇总销售部费用",instruction:"销售部共有三条数据，SUMIF 汇总其费用：1200＋800＋1500＝3500。",headers:["A 项目","B 部门","C 费用","E 汇总结果"],rows:[["交通费","销售部","1200","3500"],["文具费","行政部","600",""],["餐费","销售部","800",""],["设备费","信息部","2000",""],["住宿费","销售部","1500",""]],cell:"E2",formula:'=SUMIF(B2:B6,"销售部",C2:C6)',result:"3500"},
    {title:"示例二：汇总指定商品",instruction:"F2 输入“笔记本”，公式汇总两条匹配销售额：120＋240＝360。",headers:["A 日期","B 商品","C 销售额","F 查询商品","G 汇总结果"],rows:[["8/1","笔记本","120","笔记本","360"],["8/2","圆珠笔","75","",""],["8/3","笔记本","240","",""],["8/4","文件夹","180","",""]],cell:"G2",formula:"=SUMIF(B2:B5,F2,C2:C5)",result:"360"},
    {title:"示例三：汇总大于 1,000",instruction:"条件范围本身就是求和范围，只有1200、2500、1800大于1000，合计5500。",headers:["A 订单","B 金额","D 汇总结果"],rows:[["订单 A","800","5500"],["订单 B","1200",""],["订单 C","2500",""],["订单 D","950",""],["订单 E","1800",""]],cell:"D2",formula:'=SUMIF(B2:B6,">1000")',result:"5500"},
    {title:"示例四：文本包含指定内容",instruction:"通配符 * 代表任意文本，因此“红苹果”和“苹果汁”都会被汇总，结果为450。",headers:["A 商品名称","B 金额","D 汇总结果"],rows:[["红苹果","200","450"],["香蕉","180",""],["苹果汁","250",""],["葡萄","220",""],["菠萝","160",""]],cell:"D2",formula:'=SUMIF(A2:A6,"*苹果*",B2:B6)',result:"450"},
  ],
};
