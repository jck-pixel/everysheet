import { AppLanguage } from "../i18n";
import type { GuideDemo } from "./GuideExampleTable";

type Slug = "if" | "ifs" | "and" | "or" | "index" | "match" | "vlookup" | "xlookup" | "sumif" | "sumifs" | "countif" | "countifs" | "averageif" | "iferror" | "datedif" | "today" | "networkdays" | "edate" | "left" | "right" | "mid" | "text" | "trim" | "substitute" | "iferrorVlookup";
const localized = (zh: GuideDemo, en: GuideDemo, ja: GuideDemo, cn: GuideDemo): Record<AppLanguage, GuideDemo> => ({ "zh-TW": zh, en, ja, "zh-CN": cn });

export const guideDemos: Record<Slug, Record<AppLanguage, GuideDemo>> = {
  iferrorVlookup: localized(
    {title:"完整例子：輸入員工編號帶出姓名",instruction:"A2 輸入查詢編號，F:G 是員工資料；若編號不存在則顯示「查無資料」。",headers:["A 查詢編號","B 查詢結果","F 員工編號","G 姓名"],rows:[["E003","查無資料","E001","陳小明"],["","","E002","王小美"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"查無資料")',result:"查無資料"},
    {title:"Worked example: Enter an ID to return a name",instruction:"Enter an ID in A2 and search F:G. Display Not found when the ID does not exist.",headers:["A Lookup ID","B Result","F Employee ID","G Name"],rows:[["E003","Not found","E001","Alex Chen"],["","","E002","Amy Wang"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"Not found")',result:"Not found"},
    {title:"実例：社員番号から氏名を表示",instruction:"A2 に番号を入力して F:G を検索し、存在しない場合は「該当なし」を表示します。",headers:["A 検索番号","B 結果","F 社員番号","G 氏名"],rows:[["E003","該当なし","E001","山田太郎"],["","","E002","鈴木花子"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"該当なし")',result:"該当なし"},
    {title:"完整示例：输入员工编号返回姓名",instruction:"在 A2 输入查询编号并查找 F:G；编号不存在时显示“未找到”。",headers:["A 查询编号","B 查询结果","F 员工编号","G 姓名"],rows:[["E003","未找到","E001","陈小明"],["","","E002","王小美"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"未找到")',result:"未找到"}),
  substitute: localized(
    {title:"完整例子：更新商品編號前綴",instruction:"A 欄是舊商品編號，在 B2 將 OLD 批次替換成 NEW。",headers:["A 舊商品編號","B 新商品編號"],rows:[["OLD-2026-001","NEW-2026-001"],["OLD-2026-002","NEW-2026-002"]],cell:"B2",formula:'=SUBSTITUTE(A2,"OLD","NEW")',result:"NEW-2026-001"},
    {title:"Worked example: Update product ID prefixes",instruction:"A contains old product IDs. Replace OLD with NEW in B2.",headers:["A Old product ID","B New product ID"],rows:[["OLD-2026-001","NEW-2026-001"],["OLD-2026-002","NEW-2026-002"]],cell:"B2",formula:'=SUBSTITUTE(A2,"OLD","NEW")',result:"NEW-2026-001"},
    {title:"実例：商品番号の接頭辞を更新",instruction:"A列は旧商品番号です。B2 で OLD を NEW に置換します。",headers:["A 旧商品番号","B 新商品番号"],rows:[["OLD-2026-001","NEW-2026-001"],["OLD-2026-002","NEW-2026-002"]],cell:"B2",formula:'=SUBSTITUTE(A2,"OLD","NEW")',result:"NEW-2026-001"},
    {title:"完整示例：更新商品编号前缀",instruction:"A 列是旧商品编号，在 B2 将 OLD 批量替换成 NEW。",headers:["A 旧商品编号","B 新商品编号"],rows:[["OLD-2026-001","NEW-2026-001"],["OLD-2026-002","NEW-2026-002"]],cell:"B2",formula:'=SUBSTITUTE(A2,"OLD","NEW")',result:"NEW-2026-001"}),
  trim: localized(
    {title:"完整例子：清除員工姓名空格",instruction:"A 欄姓名含多餘空格，在 B2 清理後再向下複製。",headers:["A 原始姓名","B 清理結果"],rows:[["  王  小明  ","王 小明"],["  李小美 ","李小美"]],cell:"B2",formula:"=TRIM(A2)",result:"王 小明"},
    {title:"Worked example: Clean employee names",instruction:"A contains names with extra spaces. Clean them in B2 and copy down.",headers:["A Original name","B Clean result"],rows:[["  Alex  Chen  ","Alex Chen"],["  Amy Wang ","Amy Wang"]],cell:"B2",formula:"=TRIM(A2)",result:"Alex Chen"},
    {title:"実例：社員名の空白を削除",instruction:"A列の氏名には余分な空白があります。B2 で整理して下へコピーします。",headers:["A 元の氏名","B 整理結果"],rows:[["  山田  太郎  ","山田 太郎"],["  鈴木花子 ","鈴木花子"]],cell:"B2",formula:"=TRIM(A2)",result:"山田 太郎"},
    {title:"完整示例：清除员工姓名空格",instruction:"A 列姓名包含多余空格，在 B2 清理后向下复制。",headers:["A 原始姓名","B 清理结果"],rows:[["  王  小明  ","王 小明"],["  李小美 ","李小美"]],cell:"B2",formula:"=TRIM(A2)",result:"王 小明"}),
  text: localized(
    {title:"完整例子：統一合約日期格式",instruction:"A 欄是合約日期，在 B2 統一顯示為年/月/日。",headers:["A 合約日期","B 顯示文字"],rows:[["2026-08-16","2026/08/16"],["2026-09-05","2026/09/05"]],cell:"B2",formula:'=TEXT(A2,"yyyy/mm/dd")',result:"2026/08/16"},
    {title:"Worked example: Standardize contract dates",instruction:"A contains contract dates. Display each as year/month/day in B2.",headers:["A Contract date","B Display text"],rows:[["2026-08-16","2026/08/16"],["2026-09-05","2026/09/05"]],cell:"B2",formula:'=TEXT(A2,"yyyy/mm/dd")',result:"2026/08/16"},
    {title:"実例：契約日の日付形式を統一",instruction:"A列は契約日です。B2 で年/月/日の文字列にします。",headers:["A 契約日","B 表示文字"],rows:[["2026-08-16","2026/08/16"],["2026-09-05","2026/09/05"]],cell:"B2",formula:'=TEXT(A2,"yyyy/mm/dd")',result:"2026/08/16"},
    {title:"完整示例：统一合同日期格式",instruction:"A 列是合同日期，在 B2 统一显示为年/月/日。",headers:["A 合同日期","B 显示文本"],rows:[["2026-08-16","2026/08/16"],["2026-09-05","2026/09/05"]],cell:"B2",formula:'=TEXT(A2,"yyyy/mm/dd")',result:"2026/08/16"}),
  mid: localized(
    {title:"完整例子：擷取訂單年份",instruction:"A 欄是訂單編號，在 B2 從第5個字元開始擷取4個字元。",headers:["A 訂單編號","B 年份"],rows:[["ORD-2026-0086","2026"],["ORD-2025-0142","2025"]],cell:"B2",formula:"=MID(A2,5,4)",result:"2026"},
    {title:"Worked example: Extract an order year",instruction:"A contains order IDs. Return four characters beginning at position 5 in B2.",headers:["A Order ID","B Year"],rows:[["ORD-2026-0086","2026"],["ORD-2025-0142","2025"]],cell:"B2",formula:"=MID(A2,5,4)",result:"2026"},
    {title:"実例：注文年を抽出",instruction:"A列は注文番号です。B2 で5文字目から4文字を抽出します。",headers:["A 注文番号","B 年"],rows:[["ORD-2026-0086","2026"],["ORD-2025-0142","2025"]],cell:"B2",formula:"=MID(A2,5,4)",result:"2026"},
    {title:"完整示例：提取订单年份",instruction:"A 列是订单编号，在 B2 从第5个字符开始提取4个字符。",headers:["A 订单编号","B 年份"],rows:[["ORD-2026-0086","2026"],["ORD-2025-0142","2025"]],cell:"B2",formula:"=MID(A2,5,4)",result:"2026"}),
  right: localized(
    {title:"完整例子：擷取訂單流水號",instruction:"A 欄是訂單編號，在 B2 擷取右側4個字元。",headers:["A 訂單編號","B 流水號"],rows:[["ORD-2026-0086","0086"],["ORD-2026-0142","0142"]],cell:"B2",formula:"=RIGHT(A2,4)",result:"0086"},
    {title:"Worked example: Extract an order serial",instruction:"A contains order IDs. Extract the last four characters in B2.",headers:["A Order ID","B Serial"],rows:[["ORD-2026-0086","0086"],["ORD-2026-0142","0142"]],cell:"B2",formula:"=RIGHT(A2,4)",result:"0086"},
    {title:"実例：注文の連番を抽出",instruction:"A列は注文番号です。B2 で右4文字を抽出します。",headers:["A 注文番号","B 連番"],rows:[["ORD-2026-0086","0086"],["ORD-2026-0142","0142"]],cell:"B2",formula:"=RIGHT(A2,4)",result:"0086"},
    {title:"完整示例：提取订单流水号",instruction:"A 列是订单编号，在 B2 提取右侧4个字符。",headers:["A 订单编号","B 流水号"],rows:[["ORD-2026-0086","0086"],["ORD-2026-0142","0142"]],cell:"B2",formula:"=RIGHT(A2,4)",result:"0086"}),
  left: localized(
    {title:"完整例子：擷取員工部門代碼",instruction:"A 欄是員工編號，在 B2 擷取左側2個字元。",headers:["A 員工編號","B 部門代碼"],rows:[["HR-2026-001","HR"],["IT-2026-002","IT"]],cell:"B2",formula:"=LEFT(A2,2)",result:"HR"},
    {title:"Worked example: Extract department code",instruction:"A contains employee IDs. Extract the first two characters in B2.",headers:["A Employee ID","B Department"],rows:[["HR-2026-001","HR"],["IT-2026-002","IT"]],cell:"B2",formula:"=LEFT(A2,2)",result:"HR"},
    {title:"実例：社員の部署コードを抽出",instruction:"A列は社員番号です。B2 で左2文字を抽出します。",headers:["A 社員番号","B 部署コード"],rows:[["HR-2026-001","HR"],["IT-2026-002","IT"]],cell:"B2",formula:"=LEFT(A2,2)",result:"HR"},
    {title:"完整示例：提取员工部门代码",instruction:"A 列是员工编号，在 B2 提取左侧2个字符。",headers:["A 员工编号","B 部门代码"],rows:[["HR-2026-001","HR"],["IT-2026-002","IT"]],cell:"B2",formula:"=LEFT(A2,2)",result:"HR"}),
  edate: localized(
    {title:"完整例子：計算一年後合約到期日",instruction:"A2 是開始日、B2 是合約月數，在 C2 計算到期日。",headers:["A 開始日","B 月數","C 到期日"],rows:[["2026/08/16","12","2027/08/16"]],cell:"C2",formula:"=EDATE(A2,B2)",result:"2027/08/16"},
    {title:"Worked example: One-year contract expiry",instruction:"A2 is the start and B2 is the term in months.",headers:["A Start","B Months","C Expiry"],rows:[["2026/08/16","12","2027/08/16"]],cell:"C2",formula:"=EDATE(A2,B2)",result:"2027/08/16"},
    {title:"実例：1年後の契約期限",instruction:"A2 は開始日、B2 は契約月数です。",headers:["A 開始日","B 月数","C 期限日"],rows:[["2026/08/16","12","2027/08/16"]],cell:"C2",formula:"=EDATE(A2,B2)",result:"2027/08/16"},
    {title:"完整示例：计算一年后合同到期日",instruction:"A2 是开始日、B2 是合同月数。",headers:["A 开始日","B 月数","C 到期日"],rows:[["2026/08/16","12","2027/08/16"]],cell:"C2",formula:"=EDATE(A2,B2)",result:"2027/08/16"}),
  networkdays: localized(
    {title:"完整例子：計算專案工作天",instruction:"A2 是開始日、B2 是結束日，F2 是需排除的假日。",headers:["A 開始日","B 結束日","F 假日"],rows:[["2026/08/03","2026/08/14","2026/08/10"]],cell:"C2",formula:"=NETWORKDAYS(A2,B2,F2)",result:"9"},
    {title:"Worked example: Project workdays",instruction:"A2 is the start, B2 the end, and F2 a holiday.",headers:["A Start","B End","F Holiday"],rows:[["2026/08/03","2026/08/14","2026/08/10"]],cell:"C2",formula:"=NETWORKDAYS(A2,B2,F2)",result:"9"},
    {title:"実例：プロジェクト営業日",instruction:"A2 は開始日、B2 は終了日、F2 は休日です。",headers:["A 開始日","B 終了日","F 休日"],rows:[["2026/08/03","2026/08/14","2026/08/10"]],cell:"C2",formula:"=NETWORKDAYS(A2,B2,F2)",result:"9"},
    {title:"完整示例：计算项目工作日",instruction:"A2 是开始日、B2 是结束日、F2 是假日。",headers:["A 开始日","B 结束日","F 假日"],rows:[["2026/08/03","2026/08/14","2026/08/10"]],cell:"C2",formula:"=NETWORKDAYS(A2,B2,F2)",result:"9"}),
  today: localized(
    {title:"完整例子：計算合約剩餘天數",instruction:"B2 是到期日，在 C2 用今天日期計算剩餘天數。",headers:["A 合約","B 到期日","C 剩餘天數"],rows:[["網站維護","2026/09/15","30"]],cell:"C2",formula:"=B2-TODAY()",result:"30"},
    {title:"Worked example: Contract days remaining",instruction:"B2 is the due date. Calculate remaining days in C2.",headers:["A Contract","B Due date","C Days left"],rows:[["Website support","2026/09/15","30"]],cell:"C2",formula:"=B2-TODAY()",result:"30"},
    {title:"実例：契約の残日数",instruction:"B2 は期限日です。C2 で残日数を計算します。",headers:["A 契約","B 期限日","C 残日数"],rows:[["サイト保守","2026/09/15","30"]],cell:"C2",formula:"=B2-TODAY()",result:"30"},
    {title:"完整示例：计算合同剩余天数",instruction:"B2 是到期日，在 C2 计算剩余天数。",headers:["A 合同","B 到期日","C 剩余天数"],rows:[["网站维护","2026/09/15","30"]],cell:"C2",formula:"=B2-TODAY()",result:"30"}),
  averageif: localized(
    {title:"完整例子：計算業務部平均薪資",instruction:"B 欄是部門、C 欄是薪資，在 E2 計算業務部平均。",headers:["A 姓名","B 部門","C 薪資"],rows:[["小明","業務部","36,000"],["小美","行政部","34,000"],["小華","業務部","42,000"]],cell:"E2",formula:'=AVERAGEIF(B:B,"業務部",C:C)',result:"39,000"},
    {title:"Worked example: Average Sales salary",instruction:"B is department and C is salary. Calculate the Sales average in E2.",headers:["A Name","B Department","C Salary"],rows:[["Alex","Sales","36,000"],["Amy","Admin","34,000"],["Sam","Sales","42,000"]],cell:"E2",formula:'=AVERAGEIF(B:B,"Sales",C:C)',result:"39,000"},
    {title:"実例：営業部の平均給与",instruction:"B列は部署、C列は給与です。E2 で営業部の平均を求めます。",headers:["A 氏名","B 部署","C 給与"],rows:[["太郎","営業部","36,000"],["花子","管理部","34,000"],["次郎","営業部","42,000"]],cell:"E2",formula:'=AVERAGEIF(B:B,"営業部",C:C)',result:"39,000"},
    {title:"完整示例：计算销售部平均工资",instruction:"B 列是部门、C 列是工资，在 E2 计算销售部平均。",headers:["A 姓名","B 部门","C 工资"],rows:[["小明","销售部","36,000"],["小美","行政部","34,000"],["小华","销售部","42,000"]],cell:"E2",formula:'=AVERAGEIF(B:B,"销售部",C:C)',result:"39,000"}),
  countif: localized(
    {title:"完整例子：統計及格人數",instruction:"B 欄是分數，在 D2 統計 60 分以上人數。",headers:["A 姓名","B 分數"],rows:[["小明","75"],["小美","52"],["小華","68"]],cell:"D2",formula:'=COUNTIF(B:B,">=60")',result:"2"},
    {title:"Worked example: Count passing scores",instruction:"B contains scores. Count scores of 60 or above in D2.",headers:["A Name","B Score"],rows:[["Alex","75"],["Amy","52"],["Sam","68"]],cell:"D2",formula:'=COUNTIF(B:B,">=60")',result:"2"},
    {title:"実例：合格者数を集計",instruction:"B列は点数です。D2 で60点以上を数えます。",headers:["A 氏名","B 点数"],rows:[["太郎","75"],["花子","52"],["次郎","68"]],cell:"D2",formula:'=COUNTIF(B:B,">=60")',result:"2"},
    {title:"完整示例：统计及格人数",instruction:"B 列是分数，在 D2 统计 60 分以上人数。",headers:["A 姓名","B 分数"],rows:[["小明","75"],["小美","52"],["小华","68"]],cell:"D2",formula:'=COUNTIF(B:B,">=60")',result:"2"}),
  sumif: localized(
    {title:"完整例子：加總業務部費用",instruction:"B 欄是部門、C 欄是費用，在 E2 計算業務部總費用。",headers:["A 項目","B 部門","C 費用"],rows:[["交通","業務部","1,200"],["文具","行政部","500"],["餐費","業務部","800"]],cell:"E2",formula:'=SUMIF(B:B,"業務部",C:C)',result:"2,000"},
    {title:"Worked example: Sum Sales costs",instruction:"B is department and C is cost. Calculate Sales total in E2.",headers:["A Item","B Department","C Cost"],rows:[["Travel","Sales","1,200"],["Supplies","Admin","500"],["Meals","Sales","800"]],cell:"E2",formula:'=SUMIF(B:B,"Sales",C:C)',result:"2,000"},
    {title:"実例：営業部の費用を合計",instruction:"B列は部署、C列は費用です。E2 で営業部合計を求めます。",headers:["A 項目","B 部署","C 費用"],rows:[["交通","営業部","1,200"],["文具","管理部","500"],["食費","営業部","800"]],cell:"E2",formula:'=SUMIF(B:B,"営業部",C:C)',result:"2,000"},
    {title:"完整示例：汇总销售部费用",instruction:"B 列是部门、C 列是费用，在 E2 计算销售部总费用。",headers:["A 项目","B 部门","C 费用"],rows:[["交通","销售部","1,200"],["文具","行政部","500"],["餐费","销售部","800"]],cell:"E2",formula:'=SUMIF(B:B,"销售部",C:C)',result:"2,000"}),
  match: localized(
    {title:"完整例子：找出商品位於清單第幾筆",instruction:"A2:A6 是商品清單，在 D2 尋找「蘋果」的相對位置。",headers:["A 商品"],rows:[["香蕉"],["橘子"],["蘋果"],["葡萄"],["西瓜"]],cell:"D2",formula:'=MATCH("蘋果",A2:A6,0)',result:"3"},
    {title:"Worked example: Find a product's position",instruction:"A2:A6 contains products. Find the relative position of Apples in D2.",headers:["A Product"],rows:[["Bananas"],["Oranges"],["Apples"],["Grapes"],["Watermelon"]],cell:"D2",formula:'=MATCH("Apples",A2:A6,0)',result:"3"},
    {title:"実例：商品がリストの何番目か検索",instruction:"A2:A6 は商品一覧です。D2 で「リンゴ」の相対位置を検索します。",headers:["A 商品"],rows:[["バナナ"],["オレンジ"],["リンゴ"],["ブドウ"],["スイカ"]],cell:"D2",formula:'=MATCH("リンゴ",A2:A6,0)',result:"3"},
    {title:"完整示例：查找商品位于列表第几条",instruction:"A2:A6 是商品列表，在 D2 查找“苹果”的相对位置。",headers:["A 商品"],rows:[["香蕉"],["橙子"],["苹果"],["葡萄"],["西瓜"]],cell:"D2",formula:'=MATCH("苹果",A2:A6,0)',result:"3"}),
  index: localized(
    {title:"完整例子：取得清單第 3 筆薪資",instruction:"B2:B5 是薪資清單，在 D2 取得第 3 筆。",headers:["A 姓名","B 薪資"],rows:[["小明","35,000"],["小美","38,000"],["小華","42,000"],["小安","36,000"]],cell:"D2",formula:"=INDEX(B2:B5,3)",result:"42,000"},
    {title:"Worked example: Return the third salary",instruction:"B2:B5 is the salary list. Return its third item in D2.",headers:["A Name","B Salary"],rows:[["Alex","35,000"],["Amy","38,000"],["Sam","42,000"],["Ann","36,000"]],cell:"D2",formula:"=INDEX(B2:B5,3)",result:"42,000"},
    {title:"実例：3番目の給与を取得",instruction:"B2:B5 は給与一覧です。D2 に3番目を返します。",headers:["A 氏名","B 給与"],rows:[["太郎","35,000"],["花子","38,000"],["次郎","42,000"],["安子","36,000"]],cell:"D2",formula:"=INDEX(B2:B5,3)",result:"42,000"},
    {title:"完整示例：返回第 3 条工资",instruction:"B2:B5 是工资列表，在 D2 返回第3条。",headers:["A 姓名","B 工资"],rows:[["小明","35,000"],["小美","38,000"],["小华","42,000"],["小安","36,000"]],cell:"D2",formula:"=INDEX(B2:B5,3)",result:"42,000"}),
  or: localized(
    {title:"完整例子：任一科及格",instruction:"B、C 欄是兩科分數，在 D2 顯示是否符合資格。",headers:["A 姓名","B 國文","C 英文","D 結果"],rows:[["小明","55","72","符合"],["小美","50","58","不符合"]],cell:"D2",formula:'=IF(OR(B2>=60,C2>=60),"符合","不符合")',result:"符合"},
    {title:"Worked example: Pass either subject",instruction:"B and C contain subject scores. Display eligibility in D2.",headers:["A Name","B Subject 1","C Subject 2","D Result"],rows:[["Alex","55","72","Eligible"],["Amy","50","58","Not eligible"]],cell:"D2",formula:'=IF(OR(B2>=60,C2>=60),"Eligible","Not eligible")',result:"Eligible"},
    {title:"実例：どちらかの科目に合格",instruction:"B、C列は科目点数です。D2 に資格結果を表示します。",headers:["A 氏名","B 国語","C 英語","D 結果"],rows:[["太郎","55","72","該当"],["花子","50","58","非該当"]],cell:"D2",formula:'=IF(OR(B2>=60,C2>=60),"該当","非該当")',result:"該当"},
    {title:"完整示例：任一科及格",instruction:"B、C 列是两科分数，在 D2 显示是否符合资格。",headers:["A 姓名","B 语文","C 英语","D 结果"],rows:[["小明","55","72","符合"],["小美","50","58","不符合"]],cell:"D2",formula:'=IF(OR(B2>=60,C2>=60),"符合","不符合")',result:"符合"}),
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
