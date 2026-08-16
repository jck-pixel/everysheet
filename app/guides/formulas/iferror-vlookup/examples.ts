import { AppLanguage } from "../../../i18n";
import type { GuideDemo } from "../../GuideExampleTable";

export const iferrorVlookupExamples: Record<AppLanguage, GuideDemo[]> = {
  "zh-TW": [
    {title:"範例一：員工編號查姓名",instruction:"A2 輸入查詢編號，F:G 是員工資料表；E003 不存在，因此顯示「查無資料」。",headers:["A 查詢編號","B 查詢結果","F 員工編號","G 姓名"],rows:[["E003","查無資料","E001","陳小明"],["","","E002","王小美"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"查無資料")',result:"查無資料"},
    {title:"範例二：跨工作表查找",instruction:"主表 A2 輸入 E002，公式到「員工資料」工作表查找姓名。",headers:["主表 A 查詢編號","主表 B 結果","員工資料!A 編號","員工資料!B 姓名"],rows:[["E002","王小美","E001","陳小明"],["","","E002","王小美"]],cell:"主表!B2",formula:'=IFERROR(VLOOKUP(A2,員工資料!$A:$B,2,FALSE),"查無資料")',result:"王小美"},
    {title:"範例三：找不到時顯示空白",instruction:"A2 的 E003 不在員工資料表中，錯誤結果改為空白。",headers:["A 查詢編號","B 查詢結果","F 員工編號","G 姓名"],rows:[["E003","","E001","陳小明"],["","","E002","王小美"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"")',result:"空白"},
    {title:"範例四：商品編號查價格",instruction:"A2 輸入商品編號，在商品資料表第 3 欄回傳價格。",headers:["A 查詢商品","B 查詢價格","商品資料!A 編號","B 品名","C 價格"],rows:[["P002","1,280","P001","鍵盤","890"],["","","P002","滑鼠","1,280"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,商品資料!$A:$C,3,FALSE),"查無商品")',result:"1,280"},
  ],
  en: [
    {title:"Example 1: Employee ID to name",instruction:"Enter an ID in A2. E003 is absent from F:G, so the result is Not found.",headers:["A Lookup ID","B Result","F Employee ID","G Name"],rows:[["E003","Not found","E001","Alex Chen"],["","","E002","Amy Wang"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"Not found")',result:"Not found"},
    {title:"Example 2: Another worksheet",instruction:"Enter E002 on the main sheet and look up its name on the Employees sheet.",headers:["Main A Lookup ID","Main B Result","Employees!A ID","Employees!B Name"],rows:[["E002","Amy Wang","E001","Alex Chen"],["","","E002","Amy Wang"]],cell:"Main!B2",formula:'=IFERROR(VLOOKUP(A2,Employees!$A:$B,2,FALSE),"Not found")',result:"Amy Wang"},
    {title:"Example 3: Show a blank",instruction:"E003 is absent from the employee table, so the error result is an empty cell.",headers:["A Lookup ID","B Result","F Employee ID","G Name"],rows:[["E003","","E001","Alex Chen"],["","","E002","Amy Wang"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"")',result:"Blank"},
    {title:"Example 4: Product ID to price",instruction:"Enter a product ID in A2 and return its price from column 3 of the product table.",headers:["A Product ID","B Price","Products!A ID","B Product","C Price"],rows:[["P002","1,280","P001","Keyboard","890"],["","","P002","Mouse","1,280"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,Products!$A:$C,3,FALSE),"Product not found")',result:"1,280"},
  ],
  ja: [
    {title:"例1：社員番号から氏名",instruction:"A2 に番号を入力します。E003 は F:G にないため「該当なし」を表示します。",headers:["A 検索番号","B 結果","F 社員番号","G 氏名"],rows:[["E003","該当なし","E001","山田太郎"],["","","E002","鈴木花子"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"該当なし")',result:"該当なし"},
    {title:"例2：別シートを検索",instruction:"メインシート A2 の E002 を「社員」シートで検索します。",headers:["メインA 検索番号","メインB 結果","社員!A 番号","社員!B 氏名"],rows:[["E002","鈴木花子","E001","山田太郎"],["","","E002","鈴木花子"]],cell:"メイン!B2",formula:'=IFERROR(VLOOKUP(A2,社員!$A:$B,2,FALSE),"該当なし")',result:"鈴木花子"},
    {title:"例3：見つからない場合は空白",instruction:"E003 は社員表にないため、エラー時の結果を空白にします。",headers:["A 検索番号","B 結果","F 社員番号","G 氏名"],rows:[["E003","","E001","山田太郎"],["","","E002","鈴木花子"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"")',result:"空白"},
    {title:"例4：商品番号から価格",instruction:"A2 の商品番号を検索し、商品表の3列目から価格を返します。",headers:["A 商品番号","B 価格","商品!A 番号","B 商品名","C 価格"],rows:[["P002","1,280","P001","キーボード","890"],["","","P002","マウス","1,280"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,商品!$A:$C,3,FALSE),"商品なし")',result:"1,280"},
  ],
  "zh-CN": [
    {title:"示例一：员工编号查姓名",instruction:"在 A2 输入编号。E003 不在 F:G 中，因此显示“未找到”。",headers:["A 查询编号","B 查询结果","F 员工编号","G 姓名"],rows:[["E003","未找到","E001","陈小明"],["","","E002","王小美"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"未找到")',result:"未找到"},
    {title:"示例二：跨工作表查找",instruction:"在主表 A2 输入 E002，并到“员工数据”工作表查找姓名。",headers:["主表A 查询编号","主表B 结果","员工数据!A 编号","员工数据!B 姓名"],rows:[["E002","王小美","E001","陈小明"],["","","E002","王小美"]],cell:"主表!B2",formula:'=IFERROR(VLOOKUP(A2,员工数据!$A:$B,2,FALSE),"未找到")',result:"王小美"},
    {title:"示例三：未找到时显示空白",instruction:"E003 不在员工数据表中，因此错误结果显示为空白。",headers:["A 查询编号","B 查询结果","F 员工编号","G 姓名"],rows:[["E003","","E001","陈小明"],["","","E002","王小美"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"")',result:"空白"},
    {title:"示例四：商品编号查价格",instruction:"在 A2 输入商品编号，返回商品数据表第3列的价格。",headers:["A 商品编号","B 查询价格","商品数据!A 编号","B 商品名","C 价格"],rows:[["P002","1,280","P001","键盘","890"],["","","P002","鼠标","1,280"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,商品数据!$A:$C,3,FALSE),"未找到商品")',result:"1,280"},
  ],
};
