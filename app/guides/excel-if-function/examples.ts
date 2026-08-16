import { AppLanguage } from "../../i18n";
import type { GuideDemo } from "../GuideExampleTable";

export const ifExamples: Record<AppLanguage, GuideDemo[]> = {
  "zh-TW": [
    {title:"範例一：判斷是否及格",instruction:"B 欄是分數，在 C2 輸入公式後向下複製；60 分以上顯示及格。",headers:["A 姓名","B 分數","C 判斷結果"],rows:[["小明","75","及格"],["小美","52","不及格"]],cell:"C2",formula:'=IF(B2>=60,"及格","不及格")',result:"及格"},
    {title:"範例二：判斷是否需要補貨",instruction:"B 欄是目前庫存，低於 10 時在 C 欄顯示需要補貨。",headers:["A 商品","B 庫存數量","C 庫存狀態"],rows:[["原子筆","6","需要補貨"],["影印紙","25","庫存正常"]],cell:"C2",formula:'=IF(B2<10,"需要補貨","庫存正常")',result:"需要補貨"},
    {title:"範例三：搭配 AND",instruction:"分數達到 60 且出席率達到 80%，兩個條件都成立才顯示通過。",headers:["A 姓名","B 分數","C 出席率","D 結果"],rows:[["小明","75","90%","通過"],["小美","85","70%","未通過"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"通過","未通過")',result:"通過"},
    {title:"範例四：搭配 OR",instruction:"A 欄大於 100 或 B 欄大於 50，只要一個條件成立就顯示 PASS。",headers:["A 數值一","B 數值二","C 結果"],rows:[["80","65","PASS"],["90","40",""]],cell:"C2",formula:'=IF(OR(A2>100,B2>50),"PASS","")',result:"PASS"},
  ],
  en: [
    {title:"Example 1: Pass or fail",instruction:"B contains scores. Enter the formula in C2 and copy down; 60 or above is Pass.",headers:["A Name","B Score","C Result"],rows:[["Alex","75","Pass"],["Amy","52","Fail"]],cell:"C2",formula:'=IF(B2>=60,"Pass","Fail")',result:"Pass"},
    {title:"Example 2: Reorder stock",instruction:"B contains current stock. Show Reorder in C when the quantity is below 10.",headers:["A Product","B Quantity","C Stock status"],rows:[["Pens","6","Reorder"],["Paper","25","Stock OK"]],cell:"C2",formula:'=IF(B2<10,"Reorder","Stock OK")',result:"Reorder"},
    {title:"Example 3: Use AND",instruction:"Both conditions must be true: score at least 60 and attendance at least 80%.",headers:["A Name","B Score","C Attendance","D Result"],rows:[["Alex","75","90%","Pass"],["Amy","85","70%","Fail"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"Pass","Fail")',result:"Pass"},
    {title:"Example 4: Use OR",instruction:"Show PASS when either A is above 100 or B is above 50.",headers:["A Value 1","B Value 2","C Result"],rows:[["80","65","PASS"],["90","40",""]],cell:"C2",formula:'=IF(OR(A2>100,B2>50),"PASS","")',result:"PASS"},
  ],
  ja: [
    {title:"例1：合否を判定",instruction:"B列は点数です。C2 に数式を入力して下へコピーし、60点以上なら合格。",headers:["A 氏名","B 点数","C 結果"],rows:[["太郎","75","合格"],["花子","52","不合格"]],cell:"C2",formula:'=IF(B2>=60,"合格","不合格")',result:"合格"},
    {title:"例2：在庫補充を判定",instruction:"B列は現在庫です。10未満なら C列に補充が必要と表示します。",headers:["A 商品","B 在庫数","C 在庫状態"],rows:[["ペン","6","補充が必要"],["コピー用紙","25","在庫あり"]],cell:"C2",formula:'=IF(B2<10,"補充が必要","在庫あり")',result:"補充が必要"},
    {title:"例3：AND と組み合わせる",instruction:"点数60以上かつ出席率80%以上の両方を満たす場合だけ合格。",headers:["A 氏名","B 点数","C 出席率","D 結果"],rows:[["太郎","75","90%","合格"],["花子","85","70%","不合格"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"合格","不合格")',result:"合格"},
    {title:"例4：OR と組み合わせる",instruction:"A が100超または B が50超なら PASS と表示します。",headers:["A 値1","B 値2","C 結果"],rows:[["80","65","PASS"],["90","40",""]],cell:"C2",formula:'=IF(OR(A2>100,B2>50),"PASS","")',result:"PASS"},
  ],
  "zh-CN": [
    {title:"示例一：判断是否及格",instruction:"B 列是分数，在 C2 输入公式后向下复制；60分以上显示及格。",headers:["A 姓名","B 分数","C 判断结果"],rows:[["小明","75","及格"],["小美","52","不及格"]],cell:"C2",formula:'=IF(B2>=60,"及格","不及格")',result:"及格"},
    {title:"示例二：判断是否需要补货",instruction:"B 列是当前库存，低于10时在 C 列显示需要补货。",headers:["A 商品","B 库存数量","C 库存状态"],rows:[["圆珠笔","6","需要补货"],["复印纸","25","库存正常"]],cell:"C2",formula:'=IF(B2<10,"需要补货","库存正常")',result:"需要补货"},
    {title:"示例三：搭配 AND",instruction:"分数达到60且出勤率达到80%，两个条件都成立才显示通过。",headers:["A 姓名","B 分数","C 出勤率","D 结果"],rows:[["小明","75","90%","通过"],["小美","85","70%","未通过"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"通过","未通过")',result:"通过"},
    {title:"示例四：搭配 OR",instruction:"A 列大于100或 B 列大于50，只要一个条件成立就显示 PASS。",headers:["A 数值一","B 数值二","C 结果"],rows:[["80","65","PASS"],["90","40",""]],cell:"C2",formula:'=IF(OR(A2>100,B2>50),"PASS","")',result:"PASS"},
  ],
};
