import { AppLanguage } from "../../i18n";
import type { GuideDemo } from "../GuideExampleTable";

export const orExamples: Record<AppLanguage, GuideDemo[]> = {
  "zh-TW": [
    {title:"範例一：任一科及格",instruction:"國文或英文只要其中一科達到 60 分，就回傳 TRUE。",headers:["A 姓名","B 國文","C 英文","D 是否及格"],rows:[["陳小明","55","72","TRUE"],["王小美","48","52","FALSE"]],cell:"D2",formula:"=OR(B2>=60,C2>=60)",result:"TRUE"},
    {title:"範例二：搭配 IF 顯示文字",instruction:"身分證或護照只要有一項仍在有效期限內，就顯示「可辦理」。",headers:["A 姓名","B 身分證效期","C 護照效期","D 辦理結果"],rows:[["陳小明","2025/12/31","2027/12/31","可辦理"],["王小美","2025/06/30","2025/08/31","證件皆過期"]],cell:"D2",formula:'=IF(OR(B2>=TODAY(),C2>=TODAY()),"可辦理","證件皆過期")',result:"可辦理"},
    {title:"範例三：異常提醒",instruction:"庫存為 0 或商品已過期，只要發生其中一種情況就顯示「需要處理」。",headers:["A 商品","B 庫存","C 到期日","D 狀態"],rows:[["牛奶","0","2027/01/10","需要處理"],["咖啡","20","2027/06/30","正常"]],cell:"D2",formula:'=IF(OR(B2=0,C2<TODAY()),"需要處理","正常")',result:"需要處理"},
    {title:"範例四：文字條件擇一",instruction:"狀態為「急件」或「最高優先」時，回傳 TRUE 並交由優先流程處理。",headers:["A 工作項目","B 優先狀態","C 優先處理"],rows:[["客訴回覆","急件","TRUE"],["資料整理","一般","FALSE"]],cell:"C2",formula:'=OR(B2="急件",B2="最高優先")',result:"TRUE"},
  ],
  en: [
    {title:"Example 1: Pass either subject",instruction:"Return TRUE when either Chinese or English is at least 60.",headers:["A Name","B Chinese","C English","D Passed"],rows:[["Alex","55","72","TRUE"],["Amy","48","52","FALSE"]],cell:"D2",formula:"=OR(B2>=60,C2>=60)",result:"TRUE"},
    {title:"Example 2: Show text with IF",instruction:"Display Proceed when either ID document remains valid.",headers:["A Name","B ID expiry","C Passport expiry","D Result"],rows:[["Alex","2025/12/31","2027/12/31","Proceed"],["Amy","2025/06/30","2025/08/31","Both expired"]],cell:"D2",formula:'=IF(OR(B2>=TODAY(),C2>=TODAY()),"Proceed","Both expired")',result:"Proceed"},
    {title:"Example 3: Exception alert",instruction:"Display Action needed when stock is zero or the product has expired.",headers:["A Product","B Stock","C Expiry date","D Status"],rows:[["Milk","0","2027/01/10","Action needed"],["Coffee","20","2027/06/30","Normal"]],cell:"D2",formula:'=IF(OR(B2=0,C2<TODAY()),"Action needed","Normal")',result:"Action needed"},
    {title:"Example 4: Alternative text",instruction:"Return TRUE when the priority is either Urgent or Highest.",headers:["A Task","B Priority","C Prioritize"],rows:[["Customer complaint","Urgent","TRUE"],["Data cleanup","Normal","FALSE"]],cell:"C2",formula:'=OR(B2="Urgent",B2="Highest")',result:"TRUE"},
  ],
  ja: [
    {title:"例1：どちらかの科目に合格",instruction:"国語または英語のどちらかが60点以上なら TRUE を返します。",headers:["A 氏名","B 国語","C 英語","D 合格"],rows:[["山田太郎","55","72","TRUE"],["鈴木花子","48","52","FALSE"]],cell:"D2",formula:"=OR(B2>=60,C2>=60)",result:"TRUE"},
    {title:"例2：IF と組み合わせる",instruction:"身分証またはパスポートのどちらかが有効なら「手続き可」を表示します。",headers:["A 氏名","B 身分証期限","C パスポート期限","D 結果"],rows:[["山田太郎","2025/12/31","2027/12/31","手続き可"],["鈴木花子","2025/06/30","2025/08/31","両方期限切れ"]],cell:"D2",formula:'=IF(OR(B2>=TODAY(),C2>=TODAY()),"手続き可","両方期限切れ")',result:"手続き可"},
    {title:"例3：異常警告",instruction:"在庫が0、または商品が期限切れの場合は「要対応」を表示します。",headers:["A 商品","B 在庫","C 有効期限","D 状態"],rows:[["牛乳","0","2027/01/10","要対応"],["コーヒー","20","2027/06/30","正常"]],cell:"D2",formula:'=IF(OR(B2=0,C2<TODAY()),"要対応","正常")',result:"要対応"},
    {title:"例4：文字条件の選択",instruction:"優先度が「緊急」または「最優先」の場合に TRUE を返します。",headers:["A 作業","B 優先度","C 優先処理"],rows:[["顧客対応","緊急","TRUE"],["データ整理","通常","FALSE"]],cell:"C2",formula:'=OR(B2="緊急",B2="最優先")',result:"TRUE"},
  ],
  "zh-CN": [
    {title:"示例一：任一科及格",instruction:"语文或英语只要其中一科达到60分，就返回 TRUE。",headers:["A 姓名","B 语文","C 英语","D 是否及格"],rows:[["陈小明","55","72","TRUE"],["王小美","48","52","FALSE"]],cell:"D2",formula:"=OR(B2>=60,C2>=60)",result:"TRUE"},
    {title:"示例二：搭配 IF 显示文本",instruction:"身份证或护照只要一项仍在有效期内，就显示“可办理”。",headers:["A 姓名","B 身份证效期","C 护照效期","D 办理结果"],rows:[["陈小明","2025/12/31","2027/12/31","可办理"],["王小美","2025/06/30","2025/08/31","证件均过期"]],cell:"D2",formula:'=IF(OR(B2>=TODAY(),C2>=TODAY()),"可办理","证件均过期")',result:"可办理"},
    {title:"示例三：异常提醒",instruction:"库存为0或商品已过期，只要发生其中一种情况就显示“需要处理”。",headers:["A 商品","B 库存","C 到期日","D 状态"],rows:[["牛奶","0","2027/01/10","需要处理"],["咖啡","20","2027/06/30","正常"]],cell:"D2",formula:'=IF(OR(B2=0,C2<TODAY()),"需要处理","正常")',result:"需要处理"},
    {title:"示例四：文本条件选一",instruction:"状态为“急件”或“最高优先”时返回 TRUE，并进入优先处理流程。",headers:["A 工作项目","B 优先状态","C 优先处理"],rows:[["客户投诉回复","急件","TRUE"],["数据整理","一般","FALSE"]],cell:"C2",formula:'=OR(B2="急件",B2="最高优先")',result:"TRUE"},
  ],
};
