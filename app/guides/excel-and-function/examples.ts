import { AppLanguage } from "../../i18n";
import type { GuideDemo } from "../GuideExampleTable";

export const andExamples: Record<AppLanguage, GuideDemo[]> = {
  "zh-TW": [
    {title:"範例一：分數與出席率",instruction:"成績至少 60 分且出席率至少 80%，兩項都達標才回傳 TRUE。",headers:["A 姓名","B 成績","C 出席率","D 是否達標"],rows:[["陳小明","75","90%","TRUE"],["王小美","85","70%","FALSE"]],cell:"D2",formula:"=AND(B2>=60,C2>=80%)",result:"TRUE"},
    {title:"範例二：搭配 IF 顯示文字",instruction:"將 AND 放進 IF，兩項都符合時顯示「通過」，否則顯示「未通過」。",headers:["A 姓名","B 成績","C 出席率","D 審核結果"],rows:[["陳小明","75","90%","通過"],["王小美","55","95%","未通過"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"通過","未通過")',result:"通過"},
    {title:"範例三：日期與狀態",instruction:"到期日尚未超過今天，而且帳號狀態為「啟用」，才回傳 TRUE。",headers:["A 帳號","B 到期日","C 狀態","D 可否使用"],rows:[["A001","2027/12/31","啟用","TRUE"],["A002","2025/12/31","啟用","FALSE"]],cell:"D2",formula:'=AND(B2>=TODAY(),C2="啟用")',result:"TRUE"},
    {title:"範例四：三個條件",instruction:"年齡滿 18 歲、年資滿 1 年且測驗至少 80 分，三項都成立才符合資格。",headers:["A 姓名","B 年齡","C 年資","D 測驗","E 資格"],rows:[["陳小明","25","2","88","TRUE"],["王小美","20","0.5","92","FALSE"]],cell:"E2",formula:"=AND(B2>=18,C2>=1,D2>=80)",result:"TRUE"},
  ],
  en: [
    {title:"Example 1: Score and attendance",instruction:"A score of at least 60 and attendance of at least 80% are both required.",headers:["A Name","B Score","C Attendance","D Qualified"],rows:[["Alex","75","90%","TRUE"],["Amy","85","70%","FALSE"]],cell:"D2",formula:"=AND(B2>=60,C2>=80%)",result:"TRUE"},
    {title:"Example 2: Show text with IF",instruction:"Place AND inside IF to display Pass only when both requirements are met.",headers:["A Name","B Score","C Attendance","D Result"],rows:[["Alex","75","90%","Pass"],["Amy","55","95%","Fail"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"Pass","Fail")',result:"Pass"},
    {title:"Example 3: Date and status",instruction:"Return TRUE only when the expiry date has not passed and the account is Active.",headers:["A Account","B Expiry date","C Status","D Available"],rows:[["A001","2027/12/31","Active","TRUE"],["A002","2025/12/31","Active","FALSE"]],cell:"D2",formula:'=AND(B2>=TODAY(),C2="Active")',result:"TRUE"},
    {title:"Example 4: Three conditions",instruction:"Age 18+, at least one year of service, and a test score of 80+ are all required.",headers:["A Name","B Age","C Service","D Test","E Qualified"],rows:[["Alex","25","2","88","TRUE"],["Amy","20","0.5","92","FALSE"]],cell:"E2",formula:"=AND(B2>=18,C2>=1,D2>=80)",result:"TRUE"},
  ],
  ja: [
    {title:"例1：点数と出席率",instruction:"点数60点以上、出席率80%以上の両方を満たす場合だけ TRUE を返します。",headers:["A 氏名","B 点数","C 出席率","D 達成"],rows:[["山田太郎","75","90%","TRUE"],["鈴木花子","85","70%","FALSE"]],cell:"D2",formula:"=AND(B2>=60,C2>=80%)",result:"TRUE"},
    {title:"例2：IF と組み合わせる",instruction:"AND を IF に入れ、両方成立した場合は「合格」、それ以外は「不合格」を表示します。",headers:["A 氏名","B 点数","C 出席率","D 判定"],rows:[["山田太郎","75","90%","合格"],["鈴木花子","55","95%","不合格"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"合格","不合格")',result:"合格"},
    {title:"例3：日付と状態",instruction:"期限内で、アカウントの状態が「有効」の場合だけ TRUE を返します。",headers:["A アカウント","B 有効期限","C 状態","D 利用可"],rows:[["A001","2027/12/31","有効","TRUE"],["A002","2025/12/31","有効","FALSE"]],cell:"D2",formula:'=AND(B2>=TODAY(),C2="有効")',result:"TRUE"},
    {title:"例4：3つの条件",instruction:"18歳以上、勤続1年以上、試験80点以上のすべてを満たす必要があります。",headers:["A 氏名","B 年齢","C 勤続年数","D 試験","E 資格"],rows:[["山田太郎","25","2","88","TRUE"],["鈴木花子","20","0.5","92","FALSE"]],cell:"E2",formula:"=AND(B2>=18,C2>=1,D2>=80)",result:"TRUE"},
  ],
  "zh-CN": [
    {title:"示例一：分数与出勤率",instruction:"成绩至少60分且出勤率至少80%，两项都达标才返回 TRUE。",headers:["A 姓名","B 成绩","C 出勤率","D 是否达标"],rows:[["陈小明","75","90%","TRUE"],["王小美","85","70%","FALSE"]],cell:"D2",formula:"=AND(B2>=60,C2>=80%)",result:"TRUE"},
    {title:"示例二：搭配 IF 显示文本",instruction:"将 AND 放入 IF，两项都符合时显示“通过”，否则显示“未通过”。",headers:["A 姓名","B 成绩","C 出勤率","D 审核结果"],rows:[["陈小明","75","90%","通过"],["王小美","55","95%","未通过"]],cell:"D2",formula:'=IF(AND(B2>=60,C2>=80%),"通过","未通过")',result:"通过"},
    {title:"示例三：日期与状态",instruction:"到期日尚未超过今天，而且账号状态为“启用”，才返回 TRUE。",headers:["A 账号","B 到期日","C 状态","D 是否可用"],rows:[["A001","2027/12/31","启用","TRUE"],["A002","2025/12/31","启用","FALSE"]],cell:"D2",formula:'=AND(B2>=TODAY(),C2="启用")',result:"TRUE"},
    {title:"示例四：三个条件",instruction:"年龄满18岁、工龄满1年且测验至少80分，三项都成立才符合资格。",headers:["A 姓名","B 年龄","C 工龄","D 测验","E 资格"],rows:[["陈小明","25","2","88","TRUE"],["王小美","20","0.5","92","FALSE"]],cell:"E2",formula:"=AND(B2>=18,C2>=1,D2>=80)",result:"TRUE"},
  ],
};
