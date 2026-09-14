import { AppLanguage } from "../../i18n";
import type { GuideDemo } from "../GuideExampleTable";

export const matchExamples: Record<AppLanguage, GuideDemo[]> = {
  "zh-TW": [
    {title:"範例一：尋找姓名位置",instruction:"在 A2:A6 中尋找「王小美」。她是所選範圍內第 2 筆，所以 MATCH 回傳 2，而不是工作表列號 3。",headers:["A 員工姓名","C 查找姓名","D 相對位置"],rows:[["陳小明","王小美","2"],["王小美","",""],["林大華","",""],["李佳玲","",""],["張志豪","",""]],cell:"D2",formula:'=MATCH(C2,A2:A6,0)',result:"2"},
    {title:"範例二：查找值來自儲存格",instruction:"F2 輸入 E003，MATCH 會在員工編號清單中找到它位於第 3 個位置。",headers:["A 員工編號","B 姓名","F 查詢編號","G 相對位置"],rows:[["E001","陳小明","E003","3"],["E002","王小美","",""],["E003","林大華","",""],["E004","李佳玲","",""]],cell:"G2",formula:"=MATCH(F2,A2:A5,0)",result:"3"},
    {title:"範例三：尋找欄位位置",instruction:"在標題列 A1:F1 中尋找「薪資」，它是第 4 個欄位，因此回傳 4。",headers:["A 員工編號","B 姓名","C 部門","D 薪資","E 到職日","F 狀態","H 查找標題","I 欄位位置"],rows:[["E001","陳小明","業務部","45000","2024/01/15","在職","薪資","4"]],cell:"I2",formula:'=MATCH(H2,A1:F1,0)',result:"4"},
    {title:"範例四：搭配 INDEX",instruction:"MATCH 找到「王小美」位於姓名範圍第 2 列，INDEX 再回傳薪資範圍同一列的 42000。",headers:["A 姓名","B 部門","C 薪資","F 查詢姓名","G 查詢薪資"],rows:[["陳小明","業務部","45000","王小美","42000"],["王小美","行政部","42000","",""],["林大華","資訊部","52000","",""]],cell:"G2",formula:"=INDEX(C2:C4,MATCH(F2,A2:A4,0))",result:"42000"},
  ],
  en: [
    {title:"Example 1: Find a name's position",instruction:"Find Amy Wang in A2:A6. She is item 2 within the selected range, so MATCH returns 2, not worksheet row 3.",headers:["A Employee name","C Lookup name","D Position"],rows:[["Alex Chen","Amy Wang","2"],["Amy Wang","",""],["David Lin","",""],["Grace Lee","",""],["Eric Chang","",""]],cell:"D2",formula:'=MATCH(C2,A2:A6,0)',result:"2"},
    {title:"Example 2: Value from a cell",instruction:"Enter E003 in F2. MATCH finds it in the third position of the employee ID list.",headers:["A Employee ID","B Name","F Lookup ID","G Position"],rows:[["E001","Alex Chen","E003","3"],["E002","Amy Wang","",""],["E003","David Lin","",""],["E004","Grace Lee","",""]],cell:"G2",formula:"=MATCH(F2,A2:A5,0)",result:"3"},
    {title:"Example 3: Find a column header",instruction:"Find Salary in A1:F1. It is the fourth header, so MATCH returns 4.",headers:["A Employee ID","B Name","C Department","D Salary","E Start date","F Status","H Header","I Position"],rows:[["E001","Alex Chen","Sales","45000","2024/01/15","Active","Salary","4"]],cell:"I2",formula:'=MATCH(H2,A1:F1,0)',result:"4"},
    {title:"Example 4: Combine with INDEX",instruction:"MATCH finds Amy Wang at position 2; INDEX then returns 42000 from the same position in the salary range.",headers:["A Name","B Department","C Salary","F Lookup name","G Salary"],rows:[["Alex Chen","Sales","45000","Amy Wang","42000"],["Amy Wang","Admin","42000","",""],["David Lin","IT","52000","",""]],cell:"G2",formula:"=INDEX(C2:C4,MATCH(F2,A2:A4,0))",result:"42000"},
  ],
  ja: [
    {title:"例1：氏名の位置",instruction:"A2:A6 で「鈴木花子」を検索します。範囲内の2番目なので、シート行3ではなく2を返します。",headers:["A 社員氏名","C 検索氏名","D 相対位置"],rows:[["山田太郎","鈴木花子","2"],["鈴木花子","",""],["林大輔","",""],["李佳奈","",""],["張志豪","",""]],cell:"D2",formula:'=MATCH(C2,A2:A6,0)',result:"2"},
    {title:"例2：セルの検索値",instruction:"F2 に E003 を入力すると、社員番号一覧の3番目として検索されます。",headers:["A 社員番号","B 氏名","F 検索番号","G 相対位置"],rows:[["E001","山田太郎","E003","3"],["E002","鈴木花子","",""],["E003","林大輔","",""],["E004","李佳奈","",""]],cell:"G2",formula:"=MATCH(F2,A2:A5,0)",result:"3"},
    {title:"例3：列見出しの位置",instruction:"A1:F1 から「給与」を検索します。4番目の見出しなので4を返します。",headers:["A 社員番号","B 氏名","C 部署","D 給与","E 入社日","F 状態","H 検索見出し","I 位置"],rows:[["E001","山田太郎","営業部","45000","2024/01/15","在職","給与","4"]],cell:"I2",formula:'=MATCH(H2,A1:F1,0)',result:"4"},
    {title:"例4：INDEX と組み合わせ",instruction:"MATCH が「鈴木花子」の位置2を探し、INDEX が給与範囲の同じ位置から42000を返します。",headers:["A 氏名","B 部署","C 給与","F 検索氏名","G 給与"],rows:[["山田太郎","営業部","45000","鈴木花子","42000"],["鈴木花子","管理部","42000","",""],["林大輔","IT部","52000","",""]],cell:"G2",formula:"=INDEX(C2:C4,MATCH(F2,A2:A4,0))",result:"42000"},
  ],
  "zh-CN": [
    {title:"示例一：查找姓名位置",instruction:"在 A2:A6 中查找“王小美”。她是所选范围内第2条，因此返回2，而不是工作表行号3。",headers:["A 员工姓名","C 查询姓名","D 相对位置"],rows:[["陈小明","王小美","2"],["王小美","",""],["林大华","",""],["李佳玲","",""],["张志豪","",""]],cell:"D2",formula:'=MATCH(C2,A2:A6,0)',result:"2"},
    {title:"示例二：查找值来自单元格",instruction:"F2 输入 E003，MATCH 会在员工编号列表中找到它位于第3个位置。",headers:["A 员工编号","B 姓名","F 查询编号","G 相对位置"],rows:[["E001","陈小明","E003","3"],["E002","王小美","",""],["E003","林大华","",""],["E004","李佳玲","",""]],cell:"G2",formula:"=MATCH(F2,A2:A5,0)",result:"3"},
    {title:"示例三：查找列标题",instruction:"在标题行 A1:F1 中查找“工资”，它是第4个标题，因此返回4。",headers:["A 员工编号","B 姓名","C 部门","D 工资","E 入职日","F 状态","H 查询标题","I 列位置"],rows:[["E001","陈小明","销售部","45000","2024/01/15","在职","工资","4"]],cell:"I2",formula:'=MATCH(H2,A1:F1,0)',result:"4"},
    {title:"示例四：搭配 INDEX",instruction:"MATCH 找到“王小美”位于第2个位置，INDEX 再返回工资范围同一位置的42000。",headers:["A 姓名","B 部门","C 工资","F 查询姓名","G 查询工资"],rows:[["陈小明","销售部","45000","王小美","42000"],["王小美","行政部","42000","",""],["林大华","信息部","52000","",""]],cell:"G2",formula:"=INDEX(C2:C4,MATCH(F2,A2:A4,0))",result:"42000"},
  ],
};
