import { AppLanguage } from "../../i18n";
import type { GuideDemo } from "../GuideExampleTable";

export const ifsExamples: Record<AppLanguage, GuideDemo[]> = {
  "zh-TW": [
    {title:"範例一：成績分級",instruction:"B 欄是分數，IFS 由最高門檻往下判斷，在 C 欄顯示等級。",headers:["A 姓名","B 分數","C 等級"],rows:[["小明","92","A"],["小美","76","C"],["小華","55","F"]],cell:"C2",formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")',result:"A"},
    {title:"範例二：績效獎金",instruction:"B 欄是業績金額，在 C 欄依級距顯示獎金比例。",headers:["A 業務員","B 業績金額","C 獎金比例"],rows:[["小明","120,000","10%"],["小美","65,000","5%"],["小華","18,000","0%"]],cell:"C2",formula:'=IFS(B2>=100000,10%,B2>=50000,5%,B2>=20000,2%,TRUE,0%)',result:"10%"},
    {title:"範例三：庫存狀態",instruction:"先判斷庫存是否為 0，再判斷是否低於 10，其餘顯示正常。",headers:["A 商品","B 庫存數量","C 庫存狀態"],rows:[["鍵盤","0","缺貨"],["滑鼠","6","低庫存"],["螢幕","25","正常"]],cell:"C2",formula:'=IFS(B2=0,"缺貨",B2<10,"低庫存",TRUE,"正常")',result:"缺貨"},
    {title:"範例四：搭配 AND",instruction:"同時判斷分數與出席率，兩項都達到高門檻才顯示優良。",headers:["A 姓名","B 分數","C 出席率","D 評定"],rows:[["小明","95","92%","優良"],["小美","75","85%","通過"],["小華","58","90%","未通過"]],cell:"D2",formula:'=IFS(AND(B2>=90,C2>=90%),"優良",AND(B2>=60,C2>=80%),"通過",TRUE,"未通過")',result:"優良"},
  ],
  en: [
    {title:"Example 1: Grade bands",instruction:"B contains scores. IFS tests from the highest threshold down and returns a grade in C.",headers:["A Name","B Score","C Grade"],rows:[["Alex","92","A"],["Amy","76","C"],["Sam","55","F"]],cell:"C2",formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")',result:"A"},
    {title:"Example 2: Performance bonus",instruction:"B contains sales amounts. Return the matching bonus rate in C.",headers:["A Sales rep","B Sales","C Bonus rate"],rows:[["Alex","120,000","10%"],["Amy","65,000","5%"],["Sam","18,000","0%"]],cell:"C2",formula:'=IFS(B2>=100000,10%,B2>=50000,5%,B2>=20000,2%,TRUE,0%)',result:"10%"},
    {title:"Example 3: Stock status",instruction:"Check zero stock first, then quantities below 10; otherwise display Normal.",headers:["A Product","B Quantity","C Status"],rows:[["Keyboard","0","Out"],["Mouse","6","Low"],["Monitor","25","Normal"]],cell:"C2",formula:'=IFS(B2=0,"Out",B2<10,"Low",TRUE,"Normal")',result:"Out"},
    {title:"Example 4: Use AND",instruction:"Evaluate score and attendance together; both must meet a tier's thresholds.",headers:["A Name","B Score","C Attendance","D Rating"],rows:[["Alex","95","92%","Excellent"],["Amy","75","85%","Pass"],["Sam","58","90%","Fail"]],cell:"D2",formula:'=IFS(AND(B2>=90,C2>=90%),"Excellent",AND(B2>=60,C2>=80%),"Pass",TRUE,"Fail")',result:"Excellent"},
  ],
  ja: [
    {title:"例1：成績評価",instruction:"B列は点数です。高い基準から順に判定し、C列に評価を表示します。",headers:["A 氏名","B 点数","C 評価"],rows:[["太郎","92","A"],["花子","76","C"],["次郎","55","F"]],cell:"C2",formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")',result:"A"},
    {title:"例2：業績賞与",instruction:"B列は売上金額です。C列に区分ごとの賞与率を表示します。",headers:["A 担当者","B 売上","C 賞与率"],rows:[["太郎","120,000","10%"],["花子","65,000","5%"],["次郎","18,000","0%"]],cell:"C2",formula:'=IFS(B2>=100000,10%,B2>=50000,5%,B2>=20000,2%,TRUE,0%)',result:"10%"},
    {title:"例3：在庫状態",instruction:"在庫0を先に確認し、次に10未満を判定し、それ以外は通常とします。",headers:["A 商品","B 在庫数","C 状態"],rows:[["キーボード","0","在庫切れ"],["マウス","6","低在庫"],["モニター","25","通常"]],cell:"C2",formula:'=IFS(B2=0,"在庫切れ",B2<10,"低在庫",TRUE,"通常")',result:"在庫切れ"},
    {title:"例4：AND と組み合わせる",instruction:"点数と出席率を同時に確認し、両方が高い基準を満たすと優秀。",headers:["A 氏名","B 点数","C 出席率","D 評価"],rows:[["太郎","95","92%","優秀"],["花子","75","85%","合格"],["次郎","58","90%","不合格"]],cell:"D2",formula:'=IFS(AND(B2>=90,C2>=90%),"優秀",AND(B2>=60,C2>=80%),"合格",TRUE,"不合格")',result:"優秀"},
  ],
  "zh-CN": [
    {title:"示例一：成绩分级",instruction:"B 列是分数，IFS 从最高门槛向下判断，在 C 列显示等级。",headers:["A 姓名","B 分数","C 等级"],rows:[["小明","92","A"],["小美","76","C"],["小华","55","F"]],cell:"C2",formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")',result:"A"},
    {title:"示例二：绩效奖金",instruction:"B 列是业绩金额，在 C 列根据级别显示奖金比例。",headers:["A 销售员","B 业绩金额","C 奖金比例"],rows:[["小明","120,000","10%"],["小美","65,000","5%"],["小华","18,000","0%"]],cell:"C2",formula:'=IFS(B2>=100000,10%,B2>=50000,5%,B2>=20000,2%,TRUE,0%)',result:"10%"},
    {title:"示例三：库存状态",instruction:"先判断库存是否为0，再判断是否低于10，其余显示正常。",headers:["A 商品","B 库存数量","C 库存状态"],rows:[["键盘","0","缺货"],["鼠标","6","低库存"],["显示器","25","正常"]],cell:"C2",formula:'=IFS(B2=0,"缺货",B2<10,"低库存",TRUE,"正常")',result:"缺货"},
    {title:"示例四：搭配 AND",instruction:"同时判断分数与出勤率，两项都达到高门槛才显示优秀。",headers:["A 姓名","B 分数","C 出勤率","D 评定"],rows:[["小明","95","92%","优秀"],["小美","75","85%","通过"],["小华","58","90%","未通过"]],cell:"D2",formula:'=IFS(AND(B2>=90,C2>=90%),"优秀",AND(B2>=60,C2>=80%),"通过",TRUE,"未通过")',result:"优秀"},
  ],
};
