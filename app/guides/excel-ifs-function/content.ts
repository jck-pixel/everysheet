import { AppLanguage } from "../../i18n";
import type { SumifsContent } from "../excel-sumifs-function/content";

export const ifsContent: Record<AppLanguage, SumifsContent> = {
  "zh-TW": {
    guides:"Excel 教學中心", formulaTool:"公式產生器", badge:"邏輯函數", title:"Excel IFS 函數教學", subtitle:"依序判斷多個條件，取代層層巢狀 IF，讓成績、等級與獎金公式更容易閱讀。",
    introTitle:"IFS 是什麼？", intro:"IFS 會從左到右逐一檢查條件，遇到第一個成立的條件就回傳對應結果並停止。適合三種以上的分級判斷。", tags:["成績等級","獎金級距","庫存狀態","績效分級"],
    syntaxTitle:"IFS 語法", syntaxFormula:"=IFS(條件1, 結果1, 條件2, 結果2, …)", syntaxItems:[["條件1","優先檢查的條件"],["結果1","條件1成立時顯示"],["後續條件","依序繼續判斷"],["預設結果","最後可用 TRUE 設定"]],
    examples:[
      {title:"範例一：成績分級",description:"分數由高到低排列，避免高分先被較低門檻攔截。",formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")'},
      {title:"範例二：績效獎金",description:"依業績金額顯示不同獎金比例。",formula:'=IFS(B2>=100000,10%,B2>=50000,5%,B2>=20000,2%,TRUE,0%)'},
      {title:"範例三：庫存狀態",description:"先判斷缺貨，再判斷低庫存，其餘顯示正常。",formula:'=IFS(B2=0,"缺貨",B2<10,"低庫存",TRUE,"正常")'},
      {title:"範例四：搭配 AND",description:"分數及出席率同時達標才顯示優良。",formula:'=IFS(AND(B2>=90,C2>=90%),"優良",AND(B2>=60,C2>=80%),"通過",TRUE,"未通過")'},
    ],
    tipsTitle:"實用技巧", tips:[["順序很重要","IFS 遇到第一個成立條件就停止，門檻通常由高到低排列。"],["最後使用 TRUE","TRUE 可作為都不符合時的預設結果。"],["條件與結果成對","每一個條件後面必須緊接對應結果。"],["版本支援","IFS 適用 Microsoft 365、Excel 2019 及較新版本。"]],
    errorsTitle:"常見錯誤", errors:[["出現 #N/A","沒有任何條件成立且未設定 TRUE 預設結果。"],["條件順序顛倒","若先寫 B2>=60，高分也會先得到及格而不會繼續判斷 A、B 等級。"],["條件與結果數量不同","每個條件都必須有對應結果。"],["舊版 Excel 無法使用","可改用巢狀 IF 或建立查找表。"]],
    ctaTitle:"分級條件太多，不知道怎麼排列？", ctaText:"描述各級門檻與結果，EverySheet 會建立 IFS 公式。", ctaButton:"建立 IFS 公式", back:"← 返回 Excel 教學中心",
  },
  en: {
    guides:"Excel Guides", formulaTool:"Formula tool", badge:"Logical function", title:"Excel IFS Guide", subtitle:"Test multiple conditions in order and replace deeply nested IF formulas for grades, tiers, and bonuses.",
    introTitle:"What does IFS do?", intro:"IFS checks conditions from left to right and returns the result for the first true condition. It is useful for classifications with three or more outcomes.", tags:["Grade bands","Bonus tiers","Stock status","Performance levels"],
    syntaxTitle:"IFS syntax", syntaxFormula:"=IFS(test1, result1, test2, result2, …)", syntaxItems:[["Test 1","The first condition checked"],["Result 1","Returned when test 1 is true"],["More tests","Checked in order"],["Default result","Use TRUE as the final test"]],
    examples:[
      {title:"Example 1: Grade bands",description:"Arrange thresholds from highest to lowest.",formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")'},
      {title:"Example 2: Performance bonus",description:"Return a bonus rate based on sales.",formula:'=IFS(B2>=100000,10%,B2>=50000,5%,B2>=20000,2%,TRUE,0%)'},
      {title:"Example 3: Stock status",description:"Check out of stock first, then low stock, otherwise normal.",formula:'=IFS(B2=0,"Out",B2<10,"Low",TRUE,"Normal")'},
      {title:"Example 4: Use AND",description:"Score and attendance must both meet the selected tier.",formula:'=IFS(AND(B2>=90,C2>=90%),"Excellent",AND(B2>=60,C2>=80%),"Pass",TRUE,"Fail")'},
    ],
    tipsTitle:"Useful tips", tips:[["Order matters","IFS stops at the first true test; thresholds usually go from high to low."],["Finish with TRUE","TRUE provides a default when no earlier condition matches."],["Use pairs","Every test must be followed by its result."],["Version support","IFS is available in Microsoft 365, Excel 2019, and newer versions."]],
    errorsTitle:"Common mistakes", errors:[["#N/A appears","No condition is true and no final TRUE fallback was provided."],["Thresholds are reversed","A low threshold placed first catches higher values too early."],["Tests and results do not match","Every condition needs a corresponding result."],["Older Excel version","Use nested IF or a lookup table instead."]],
    ctaTitle:"Too many tiers to arrange?", ctaText:"Describe each threshold and result and EverySheet will build the IFS formula.", ctaButton:"Create an IFS formula", back:"← Back to Excel Guides",
  },
  ja: {
    guides:"Excel 学習センター", formulaTool:"数式ツール", badge:"論理関数", title:"Excel IFS 関数ガイド", subtitle:"複数条件を順番に判定し、入れ子の IF を分かりやすく置き換えます。",
    introTitle:"IFS 関数とは？", intro:"IFS は左から条件を確認し、最初に成立した条件の結果を返します。3段階以上の成績、評価、賞与区分に便利です。", tags:["成績評価","賞与区分","在庫状態","業績ランク"],
    syntaxTitle:"IFS の構文", syntaxFormula:"=IFS(条件1, 結果1, 条件2, 結果2, …)", syntaxItems:[["条件1","最初に確認する条件"],["結果1","条件1成立時の結果"],["後続条件","順番に判定"],["既定結果","最後に TRUE を使用"]],
    examples:[
      {title:"例1：成績評価",description:"基準を高い順に並べます。",formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")'},
      {title:"例2：業績賞与",description:"売上金額に応じた賞与率を返します。",formula:'=IFS(B2>=100000,10%,B2>=50000,5%,B2>=20000,2%,TRUE,0%)'},
      {title:"例3：在庫状態",description:"在庫切れ、低在庫、通常の順に判定します。",formula:'=IFS(B2=0,"在庫切れ",B2<10,"低在庫",TRUE,"通常")'},
      {title:"例4：AND と組み合わせる",description:"点数と出席率の両方で評価します。",formula:'=IFS(AND(B2>=90,C2>=90%),"優秀",AND(B2>=60,C2>=80%),"合格",TRUE,"不合格")'},
    ],
    tipsTitle:"実用的なヒント", tips:[["順序が重要","最初に成立した条件で停止するため、通常は高い基準から並べます。"],["最後に TRUE","どれにも該当しない場合の既定結果になります。"],["条件と結果は対","各条件の直後に対応結果を置きます。"],["対応バージョン","Microsoft 365、Excel 2019 以降で利用できます。"]],
    errorsTitle:"よくある間違い", errors:[["#N/A が表示","成立条件がなく、最後の TRUE もありません。"],["条件順が逆","低い基準を先に置くと高い値もそこで確定します。"],["条件と結果の数が違う","各条件に結果が必要です。"],["古い Excel", "入れ子の IF または対応表を使用します。"]],
    ctaTitle:"区分が多くて並べ方が分かりませんか？", ctaText:"各基準と結果を説明すると EverySheet が IFS 数式を作成します。", ctaButton:"IFS 数式を作成", back:"← Excel 学習センターに戻る",
  },
  "zh-CN": {
    guides:"Excel 教学中心", formulaTool:"公式生成器", badge:"逻辑函数", title:"Excel IFS 函数教学", subtitle:"依次判断多个条件，取代多层嵌套 IF，让成绩、等级与奖金公式更容易阅读。",
    introTitle:"IFS 是什么？", intro:"IFS 从左到右逐一检查条件，遇到第一个成立条件就返回对应结果。适合三种以上的分级判断。", tags:["成绩等级","奖金级别","库存状态","绩效分级"],
    syntaxTitle:"IFS 语法", syntaxFormula:"=IFS(条件1, 结果1, 条件2, 结果2, …)", syntaxItems:[["条件1","优先检查的条件"],["结果1","条件1成立时显示"],["后续条件","依次继续判断"],["默认结果","最后可使用 TRUE"]],
    examples:[
      {title:"示例一：成绩分级",description:"分数门槛从高到低排列。",formula:'=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"F")'},
      {title:"示例二：绩效奖金",description:"根据业绩金额显示奖金比例。",formula:'=IFS(B2>=100000,10%,B2>=50000,5%,B2>=20000,2%,TRUE,0%)'},
      {title:"示例三：库存状态",description:"先判断缺货，再判断低库存，其余显示正常。",formula:'=IFS(B2=0,"缺货",B2<10,"低库存",TRUE,"正常")'},
      {title:"示例四：搭配 AND",description:"分数与出勤率同时达标才通过。",formula:'=IFS(AND(B2>=90,C2>=90%),"优秀",AND(B2>=60,C2>=80%),"通过",TRUE,"未通过")'},
    ],
    tipsTitle:"实用技巧", tips:[["顺序很重要","IFS 在第一个成立条件停止，门槛通常从高到低排列。"],["最后使用 TRUE","作为所有条件都不成立时的默认结果。"],["条件结果成对","每个条件后必须紧接对应结果。"],["版本支持","适用于 Microsoft 365、Excel 2019 及更新版本。"]],
    errorsTitle:"常见错误", errors:[["出现 #N/A","没有任何条件成立且未设置 TRUE 默认结果。"],["条件顺序颠倒","先写低门槛会使高分提前停止判断。"],["条件与结果数量不同","每个条件必须有对应结果。"],["旧版 Excel 无法使用","可改用嵌套 IF 或查找表。"]],
    ctaTitle:"分级条件太多，不知道怎么排列？", ctaText:"描述各级门槛与结果，EverySheet 会创建 IFS 公式。", ctaButton:"生成 IFS 公式", back:"← 返回 Excel 教学中心",
  },
};
