import { AppLanguage } from "../../i18n";
import type { GuideDemo } from "../GuideExampleTable";

export const xlookupExamples: Record<AppLanguage, GuideDemo[]> = {
  "zh-TW": [
    {title:"範例一：員工編號查姓名",instruction:"輸入 E002，XLOOKUP 會在員工編號欄尋找，並從姓名欄帶回「王小美」。",headers:["A 查詢編號","B 查詢結果","F 員工編號","G 姓名"],rows:[["E002","王小美","E001","陳小明"],["","","E002","王小美"],["","","E003","林大華"]],cell:"B2",formula:'=XLOOKUP(A2,F2:F4,G2:G4,"查無資料")',result:"王小美"},
    {title:"範例二：商品名稱查價格",instruction:"直接用商品名稱「筆記本」查找，不必計算價格位於第幾欄。",headers:["A 商品名稱","B 查詢價格","F 商品編號","G 商品名稱","H 價格"],rows:[["筆記本","120","P101","原子筆","25"],["","","P102","筆記本","120"],["","","P103","資料夾","60"]],cell:"B2",formula:'=XLOOKUP(A2,G2:G4,H2:H4,"查無商品")',result:"120"},
    {title:"範例三：向左查找",instruction:"從右側的姓名欄尋找「林大華」，再回傳左側的員工編號；這是 VLOOKUP 不方便做到的查找方向。",headers:["A 員工編號","B 姓名","D 查詢姓名","E 查詢結果"],rows:[["E001","陳小明","林大華","E003"],["E002","王小美","",""],["E003","林大華","",""]],cell:"E2",formula:'=XLOOKUP(D2,B2:B4,A2:A4,"查無資料")',result:"E003"},
    {title:"範例四：同時傳回多欄",instruction:"回傳範圍選擇姓名到薪資三欄，輸入 E002 後會一次帶出姓名、部門與薪資。",headers:["A 查詢編號","B 姓名","C 部門","D 薪資","F 員工編號","G 姓名","H 部門","I 薪資"],rows:[["E002","王小美","行政部","42000","E001","陳小明","業務部","45000"],["","","","","E002","王小美","行政部","42000"],["","","","","E003","林大華","資訊部","52000"]],cell:"B2:D2",formula:'=XLOOKUP(A2,F2:F4,G2:I4,"查無資料")',result:"王小美｜行政部｜42000"},
  ],
  en: [
    {title:"Example 1: Find an employee name",instruction:"Enter E002. XLOOKUP searches the employee ID range and returns Amy Wang from the name range.",headers:["A Lookup ID","B Result","F Employee ID","G Name"],rows:[["E002","Amy Wang","E001","Alex Chen"],["","","E002","Amy Wang"],["","","E003","David Lin"]],cell:"B2",formula:'=XLOOKUP(A2,F2:F4,G2:G4,"Not found")',result:"Amy Wang"},
    {title:"Example 2: Find a product price",instruction:"Look up Notebook by name without counting which column contains the price.",headers:["A Product","B Price","F Product ID","G Product","H Price"],rows:[["Notebook","120","P101","Pen","25"],["","","P102","Notebook","120"],["","","P103","Folder","60"]],cell:"B2",formula:'=XLOOKUP(A2,G2:G4,H2:H4,"Not found")',result:"120"},
    {title:"Example 3: Look to the left",instruction:"Find David Lin in the name column and return the employee ID from the column to its left.",headers:["A Employee ID","B Name","D Lookup name","E Result"],rows:[["E001","Alex Chen","David Lin","E003"],["E002","Amy Wang","",""],["E003","David Lin","",""]],cell:"E2",formula:'=XLOOKUP(D2,B2:B4,A2:A4,"Not found")',result:"E003"},
    {title:"Example 4: Return multiple columns",instruction:"Select three return columns to bring back name, department, and salary in one formula.",headers:["A Lookup ID","B Name","C Department","D Salary","F Employee ID","G Name","H Department","I Salary"],rows:[["E002","Amy Wang","Admin","42000","E001","Alex Chen","Sales","45000"],["","","","","E002","Amy Wang","Admin","42000"],["","","","","E003","David Lin","IT","52000"]],cell:"B2:D2",formula:'=XLOOKUP(A2,F2:F4,G2:I4,"Not found")',result:"Amy Wang | Admin | 42000"},
  ],
  ja: [
    {title:"例1：社員番号から氏名を検索",instruction:"E002 を入力すると、社員番号列を検索して氏名列から「鈴木花子」を返します。",headers:["A 検索番号","B 結果","F 社員番号","G 氏名"],rows:[["E002","鈴木花子","E001","山田太郎"],["","","E002","鈴木花子"],["","","E003","林大輔"]],cell:"B2",formula:'=XLOOKUP(A2,F2:F4,G2:G4,"該当なし")',result:"鈴木花子"},
    {title:"例2：商品名から価格を検索",instruction:"商品名「ノート」を検索し、列番号を数えずに価格を返します。",headers:["A 商品名","B 価格","F 商品番号","G 商品名","H 価格"],rows:[["ノート","120","P101","ペン","25"],["","","P102","ノート","120"],["","","P103","ファイル","60"]],cell:"B2",formula:'=XLOOKUP(A2,G2:G4,H2:H4,"該当なし")',result:"120"},
    {title:"例3：左方向に検索",instruction:"氏名列で「林大輔」を検索し、その左側にある社員番号を返します。",headers:["A 社員番号","B 氏名","D 検索氏名","E 結果"],rows:[["E001","山田太郎","林大輔","E003"],["E002","鈴木花子","",""],["E003","林大輔","",""]],cell:"E2",formula:'=XLOOKUP(D2,B2:B4,A2:A4,"該当なし")',result:"E003"},
    {title:"例4：複数列を返す",instruction:"戻り範囲を3列にすると、氏名、部署、給与を1つの数式でまとめて返せます。",headers:["A 検索番号","B 氏名","C 部署","D 給与","F 社員番号","G 氏名","H 部署","I 給与"],rows:[["E002","鈴木花子","管理部","42000","E001","山田太郎","営業部","45000"],["","","","","E002","鈴木花子","管理部","42000"],["","","","","E003","林大輔","IT部","52000"]],cell:"B2:D2",formula:'=XLOOKUP(A2,F2:F4,G2:I4,"該当なし")',result:"鈴木花子｜管理部｜42000"},
  ],
  "zh-CN": [
    {title:"示例一：员工编号查姓名",instruction:"输入 E002，XLOOKUP 会在员工编号列查找，并从姓名列返回“王小美”。",headers:["A 查询编号","B 查询结果","F 员工编号","G 姓名"],rows:[["E002","王小美","E001","陈小明"],["","","E002","王小美"],["","","E003","林大华"]],cell:"B2",formula:'=XLOOKUP(A2,F2:F4,G2:G4,"未找到")',result:"王小美"},
    {title:"示例二：商品名称查价格",instruction:"直接用商品名称“笔记本”查找，无需计算价格位于第几列。",headers:["A 商品名称","B 查询价格","F 商品编号","G 商品名称","H 价格"],rows:[["笔记本","120","P101","圆珠笔","25"],["","","P102","笔记本","120"],["","","P103","文件夹","60"]],cell:"B2",formula:'=XLOOKUP(A2,G2:G4,H2:H4,"未找到")',result:"120"},
    {title:"示例三：向左查找",instruction:"从右侧姓名列查找“林大华”，再返回左侧的员工编号。",headers:["A 员工编号","B 姓名","D 查询姓名","E 查询结果"],rows:[["E001","陈小明","林大华","E003"],["E002","王小美","",""],["E003","林大华","",""]],cell:"E2",formula:'=XLOOKUP(D2,B2:B4,A2:A4,"未找到")',result:"E003"},
    {title:"示例四：同时返回多列",instruction:"将返回范围选择为三列，可用一个公式一次返回姓名、部门和工资。",headers:["A 查询编号","B 姓名","C 部门","D 工资","F 员工编号","G 姓名","H 部门","I 工资"],rows:[["E002","王小美","行政部","42000","E001","陈小明","销售部","45000"],["","","","","E002","王小美","行政部","42000"],["","","","","E003","林大华","信息部","52000"]],cell:"B2:D2",formula:'=XLOOKUP(A2,F2:F4,G2:I4,"未找到")',result:"王小美｜行政部｜42000"},
  ],
};
