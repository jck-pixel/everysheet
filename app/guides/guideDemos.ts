import { AppLanguage } from "../i18n";
import type { GuideDemo } from "./GuideExampleTable";

type Slug = "if" | "ifs" | "and" | "vlookup" | "xlookup" | "sumifs" | "countifs" | "iferror" | "datedif";
const localized = (zh: GuideDemo, en: GuideDemo, ja: GuideDemo, cn: GuideDemo): Record<AppLanguage, GuideDemo> => ({ "zh-TW": zh, en, ja, "zh-CN": cn });

export const guideDemos: Record<Slug, Record<AppLanguage, GuideDemo>> = {
  and: localized(
    {title:"完整例子：分數與出席率都達標",instruction:"B 欄是分數、C 欄是出席率，在 D2 顯示判斷結果。",headers:["A 姓名","B 分數","C 出席率","D 結果"],rows:[["小明","75","90%","通過"],["小美","85","70%","未通過"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"通過","未通過")',result:"通過"},
    {title:"Worked example: Score and attendance",instruction:"B is score and C is attendance. Display the result in D2.",headers:["A Name","B Score","C Attendance","D Result"],rows:[["Alex","75","90%","Pass"],["Amy","85","70%","Fail"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"Pass","Fail")',result:"Pass"},
    {title:"実例：点数と出席率が基準以上",instruction:"B列は点数、C列は出席率です。D2 に結果を表示します。",headers:["A 氏名","B 点数","C 出席率","D 結果"],rows:[["太郎","75","90%","合格"],["花子","85","70%","不合格"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"合格","不合格")',result:"合格"},
    {title:"完整示例：分数与出勤率都达标",instruction:"B 列是分数、C 列是出勤率，在 D2 显示结果。",headers:["A 姓名","B 分数","C 出勤率","D 结果"],rows:[["小明","75","90%","通过"],["小美","85","70%","未通过"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"通过","未通过")',result:"通过"}),
  ifs: localized(
    { title:"完整例子：依分數顯示等級", instruction:"B 欄是分數，在 C2 輸入公式後向下複製。", headers:["A 姓名","B 分數","C 等級"], rows:[["小明","92","A"],["小美","76","C"],["小華","55","F"]], cell:"C2", formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")', result:"A" },
    { title:"Worked example: Grade bands", instruction:"Column B contains scores. Enter the formula in C2 and copy down.", headers:["A Name","B Score","C Grade"], rows:[["Alex","92","A"],["Amy","76","C"],["Sam","55","F"]], cell:"C2", formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")', result:"A" },
    { title:"実例：点数から評価を表示", instruction:"B列は点数です。C2 に数式を入力して下へコピーします。", headers:["A 氏名","B 点数","C 評価"], rows:[["太郎","92","A"],["花子","76","C"],["次郎","55","F"]], cell:"C2", formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")', result:"A" },
    { title:"完整示例：根据分数显示等级", instruction:"B 列是分数，在 C2 输入公式后向下复制。", headers:["A 姓名","B 分数","C 等级"], rows:[["小明","92","A"],["小美","76","C"],["小华","55","F"]], cell:"C2", formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")', result:"A" }),
  if: localized(
    { title:"完整例子：判斷是否及格", instruction:"B 欄是分數，請在 C2 輸入公式，再向下複製。", headers:["A 姓名","B 分數","C 結果"], rows:[["小明","75","及格"],["小美","52","不及格"]], cell:"C2", formula:'=IF(B2>=60,"及格","不及格")', result:"及格" },
    { title:"Worked example: Pass or fail", instruction:"Column B contains scores. Enter the formula in C2 and copy it down.", headers:["A Name","B Score","C Result"], rows:[["Alex","75","Pass"],["Amy","52","Fail"]], cell:"C2", formula:'=IF(B2>=60,"Pass","Fail")', result:"Pass" },
    { title:"実例：合否判定", instruction:"B列は点数です。C2 に数式を入力して下へコピーします。", headers:["A 氏名","B 点数","C 結果"], rows:[["太郎","75","合格"],["花子","52","不合格"]], cell:"C2", formula:'=IF(B2>=60,"合格","不合格")', result:"合格" },
    { title:"完整示例：判断是否及格", instruction:"B 列是分数，在 C2 输入公式后向下复制。", headers:["A 姓名","B 分数","C 结果"], rows:[["小明","75","及格"],["小美","52","不及格"]], cell:"C2", formula:'=IF(B2>=60,"及格","不及格")', result:"及格" }),
  vlookup: localized(
    { title:"完整例子：編號帶出姓名", instruction:"A2 輸入查詢編號，右側 F:G 是員工資料表。", headers:["A 查詢編號","B 姓名","F 員工編號","G 姓名"], rows:[["E002","王小美","E001","陳小明"],["","","E002","王小美"]], cell:"B2", formula:'=VLOOKUP(A2,$F$2:$G$3,2,FALSE)', result:"王小美" },
    { title:"Worked example: ID to name", instruction:"A2 is the lookup ID; F:G contains the employee table.", headers:["A Lookup ID","B Name","F Employee ID","G Name"], rows:[["E002","Amy Wang","E001","Alex Chen"],["","","E002","Amy Wang"]], cell:"B2", formula:'=VLOOKUP(A2,$F$2:$G$3,2,FALSE)', result:"Amy Wang" },
    { title:"実例：番号から氏名", instruction:"A2 に検索番号を入力し、F:G を社員表として使います。", headers:["A 検索番号","B 氏名","F 社員番号","G 氏名"], rows:[["E002","花子","E001","太郎"],["","","E002","花子"]], cell:"B2", formula:'=VLOOKUP(A2,$F$2:$G$3,2,FALSE)', result:"花子" },
    { title:"完整示例：编号带出姓名", instruction:"A2 输入查询编号，右侧 F:G 是员工资料表。", headers:["A 查询编号","B 姓名","F 员工编号","G 姓名"], rows:[["E002","王小美","E001","陈小明"],["","","E002","王小美"]], cell:"B2", formula:'=VLOOKUP(A2,$F$2:$G$3,2,FALSE)', result:"王小美" }),
  xlookup: localized(
    { title:"完整例子：向左查找員工編號", instruction:"D2 是姓名，在 B 欄尋找後回傳左側 A 欄編號。", headers:["A 員工編號","B 姓名","D 查詢姓名","E 結果"], rows:[["E001","陳小明","王小美","E002"],["E002","王小美","",""]], cell:"E2", formula:'=XLOOKUP(D2,B:B,A:A,"查無資料")', result:"E002" },
    { title:"Worked example: Look left", instruction:"D2 is a name. Find it in B and return the ID from column A.", headers:["A ID","B Name","D Lookup name","E Result"], rows:[["E001","Alex Chen","Amy Wang","E002"],["E002","Amy Wang","",""]], cell:"E2", formula:'=XLOOKUP(D2,B:B,A:A,"Not found")', result:"E002" },
    { title:"実例：左方向に検索", instruction:"D2 の氏名を B列で検索し、左側 A列の番号を返します。", headers:["A 社員番号","B 氏名","D 検索氏名","E 結果"], rows:[["E001","太郎","花子","E002"],["E002","花子","",""]], cell:"E2", formula:'=XLOOKUP(D2,B:B,A:A,"該当なし")', result:"E002" },
    { title:"完整示例：向左查找员工编号", instruction:"D2 是姓名，在 B 列查找后返回左侧 A 列编号。", headers:["A 员工编号","B 姓名","D 查询姓名","E 结果"], rows:[["E001","陈小明","王小美","E002"],["E002","王小美","",""]], cell:"E2", formula:'=XLOOKUP(D2,B:B,A:A,"未找到")', result:"E002" }),
  sumifs: localized(
    { title:"完整例子：加總台北的蘋果銷售額", instruction:"B 欄是商品、C 欄是地區、D 欄是金額。", headers:["B 商品","C 地區","D 金額"], rows:[["蘋果","台北","1200"],["蘋果","台中","800"],["蘋果","台北","600"]], cell:"F2", formula:'=SUMIFS(D:D,B:B,"蘋果",C:C,"台北")', result:"1,800" },
    { title:"Worked example: Taipei apple sales", instruction:"B is product, C is region, and D is amount.", headers:["B Product","C Region","D Amount"], rows:[["Apples","Taipei","1200"],["Apples","Taichung","800"],["Apples","Taipei","600"]], cell:"F2", formula:'=SUMIFS(D:D,B:B,"Apples",C:C,"Taipei")', result:"1,800" },
    { title:"実例：東京のリンゴ売上合計", instruction:"B列は商品、C列は地域、D列は金額です。", headers:["B 商品","C 地域","D 金額"], rows:[["リンゴ","東京","1200"],["リンゴ","大阪","800"],["リンゴ","東京","600"]], cell:"F2", formula:'=SUMIFS(D:D,B:B,"リンゴ",C:C,"東京")', result:"1,800" },
    { title:"完整示例：汇总北京苹果销售额", instruction:"B 列是商品、C 列是地区、D 列是金额。", headers:["B 商品","C 地区","D 金额"], rows:[["苹果","北京","1200"],["苹果","上海","800"],["苹果","北京","600"]], cell:"F2", formula:'=SUMIFS(D:D,B:B,"苹果",C:C,"北京")', result:"1,800" }),
  countifs: localized(
    { title:"完整例子：統計及格且已交作業", instruction:"B 欄是分數、C 欄是繳交狀態。", headers:["A 姓名","B 分數","C 狀態"], rows:[["小明","75","已交"],["小美","82","未交"],["小華","68","已交"]], cell:"E2", formula:'=COUNTIFS(B:B,">=60",C:C,"已交")', result:"2" },
    { title:"Worked example: Passed and submitted", instruction:"B contains scores and C contains submission status.", headers:["A Name","B Score","C Status"], rows:[["Alex","75","Submitted"],["Amy","82","Missing"],["Sam","68","Submitted"]], cell:"E2", formula:'=COUNTIFS(B:B,">=60",C:C,"Submitted")', result:"2" },
    { title:"実例：合格かつ提出済み", instruction:"B列は点数、C列は提出状態です。", headers:["A 氏名","B 点数","C 状態"], rows:[["太郎","75","提出済み"],["花子","82","未提出"],["次郎","68","提出済み"]], cell:"E2", formula:'=COUNTIFS(B:B,">=60",C:C,"提出済み")', result:"2" },
    { title:"完整示例：统计及格且已提交", instruction:"B 列是分数、C 列是提交状态。", headers:["A 姓名","B 分数","C 状态"], rows:[["小明","75","已提交"],["小美","82","未提交"],["小华","68","已提交"]], cell:"E2", formula:'=COUNTIFS(B:B,">=60",C:C,"已提交")', result:"2" }),
  iferror: localized(
    { title:"完整例子：避免除以 0", instruction:"A 欄是完成數、B 欄是總數；總數為 0 時顯示 0%。", headers:["A 完成數","B 總數","C 完成率"], rows:[["80","100","80%"],["0","0","0%"]], cell:"C2", formula:'=IFERROR(A2/B2,0%)', result:"80%" },
    { title:"Worked example: Avoid division by zero", instruction:"A is completed and B is total; show 0% when total is zero.", headers:["A Completed","B Total","C Rate"], rows:[["80","100","80%"],["0","0","0%"]], cell:"C2", formula:'=IFERROR(A2/B2,0%)', result:"80%" },
    { title:"実例：ゼロ除算を防ぐ", instruction:"A列は完了数、B列は総数です。総数が0なら0%を表示します。", headers:["A 完了数","B 総数","C 完了率"], rows:[["80","100","80%"],["0","0","0%"]], cell:"C2", formula:'=IFERROR(A2/B2,0%)', result:"80%" },
    { title:"完整示例：避免除以 0", instruction:"A 列是完成数、B 列是总数；总数为 0 时显示 0%。", headers:["A 完成数","B 总数","C 完成率"], rows:[["80","100","80%"],["0","0","0%"]], cell:"C2", formula:'=IFERROR(A2/B2,0%)', result:"80%" }),
  datedif: localized(
    { title:"完整例子：計算完整年資", instruction:"A2 是到職日、B2 是統計日，在 C2 計算完整年數。", headers:["A 到職日","B 統計日","C 年資"], rows:[["2020/08/01","2026/08/16","6 年"]], cell:"C2", formula:'=DATEDIF(A2,B2,"Y")', result:"6" },
    { title:"Worked example: Completed years of service", instruction:"A2 is the start date and B2 is the reporting date.", headers:["A Start date","B Report date","C Years"], rows:[["2020/08/01","2026/08/16","6 years"]], cell:"C2", formula:'=DATEDIF(A2,B2,"Y")', result:"6" },
    { title:"実例：勤続年数を計算", instruction:"A2 は入社日、B2 は基準日です。C2 で満年数を求めます。", headers:["A 入社日","B 基準日","C 勤続年数"], rows:[["2020/08/01","2026/08/16","6年"]], cell:"C2", formula:'=DATEDIF(A2,B2,"Y")', result:"6" },
    { title:"完整示例：计算完整工龄", instruction:"A2 是入职日、B2 是统计日，在 C2 计算完整年数。", headers:["A 入职日","B 统计日","C 工龄"], rows:[["2020/08/01","2026/08/16","6 年"]], cell:"C2", formula:'=DATEDIF(A2,B2,"Y")', result:"6" }),
};
