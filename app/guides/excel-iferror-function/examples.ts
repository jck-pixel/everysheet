import { AppLanguage } from "../../i18n";
import type { GuideDemo } from "../GuideExampleTable";

export const iferrorExamples: Record<AppLanguage, GuideDemo[]> = {
  "zh-TW": [
    {title:"範例一：VLOOKUP 找不到資料",instruction:"A2 的 E003 不在員工資料表中，使用 IFERROR 把 #N/A 改成「查無資料」。",headers:["A 查詢編號","B 查詢結果","F 員工編號","G 姓名"],rows:[["E003","查無資料","E001","陳小明"],["","","E002","王小美"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"查無資料")',result:"查無資料"},
    {title:"範例二：避免除以 0",instruction:"B 欄投入數量為 0 時原本會出現 #DIV/0!，現在改為顯示 0%。",headers:["A 完成數量","B 投入數量","C 達成率"],rows:[["80","100","80%"],["0","0","0%"]],cell:"C3",formula:"=IFERROR(A3/B3,0%)",result:"0%"},
    {title:"範例三：錯誤時顯示空白",instruction:"資料尚未輸入完整時，結果儲存格先保持空白，不顯示錯誤。",headers:["A 完成數量","B 投入數量","C 達成率"],rows:[["80","100","80%"],["","",""]],cell:"C3",formula:'=IFERROR(A3/B3,"")',result:"空白"},
    {title:"範例四：搭配 XLOOKUP",instruction:"依員工編號查找部門；E003 不存在時顯示「查無資料」。",headers:["A 查詢編號","B 查詢結果","F 員工編號","G 部門"],rows:[["E003","查無資料","E001","業務部"],["","","E002","行政部"]],cell:"B2",formula:'=IFERROR(XLOOKUP(A2,F:F,G:G),"查無資料")',result:"查無資料"},
  ],
  en: [
    {title:"Example 1: VLOOKUP not found",instruction:"E003 is absent from the employee table, so IFERROR replaces #N/A with Not found.",headers:["A Lookup ID","B Result","F Employee ID","G Name"],rows:[["E003","Not found","E001","Alex Chen"],["","","E002","Amy Wang"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"Not found")',result:"Not found"},
    {title:"Example 2: Avoid division by zero",instruction:"When the input in B is zero, replace #DIV/0! with 0%.",headers:["A Completed","B Input","C Completion rate"],rows:[["80","100","80%"],["0","0","0%"]],cell:"C3",formula:"=IFERROR(A3/B3,0%)",result:"0%"},
    {title:"Example 3: Show a blank",instruction:"Keep the result cell blank while the required source data has not been entered.",headers:["A Completed","B Input","C Completion rate"],rows:[["80","100","80%"],["","",""]],cell:"C3",formula:'=IFERROR(A3/B3,"")',result:"Blank"},
    {title:"Example 4: With XLOOKUP",instruction:"Look up a department by employee ID; display Not found when E003 does not exist.",headers:["A Lookup ID","B Result","F Employee ID","G Department"],rows:[["E003","Not found","E001","Sales"],["","","E002","Admin"]],cell:"B2",formula:'=IFERROR(XLOOKUP(A2,F:F,G:G),"Not found")',result:"Not found"},
  ],
  ja: [
    {title:"例1：VLOOKUP で見つからない",instruction:"E003 は社員表にないため、IFERROR で #N/A を「該当なし」に変更します。",headers:["A 検索番号","B 結果","F 社員番号","G 氏名"],rows:[["E003","該当なし","E001","山田太郎"],["","","E002","鈴木花子"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"該当なし")',result:"該当なし"},
    {title:"例2：ゼロ除算を防ぐ",instruction:"B列が0のときに表示される #DIV/0! を 0% に置き換えます。",headers:["A 完了数","B 投入数","C 達成率"],rows:[["80","100","80%"],["0","0","0%"]],cell:"C3",formula:"=IFERROR(A3/B3,0%)",result:"0%"},
    {title:"例3：エラー時に空白",instruction:"必要なデータが未入力の間は、結果セルを空白に保ちます。",headers:["A 完了数","B 投入数","C 達成率"],rows:[["80","100","80%"],["","",""]],cell:"C3",formula:'=IFERROR(A3/B3,"")',result:"空白"},
    {title:"例4：XLOOKUP と組み合わせる",instruction:"社員番号から部署を検索し、E003 が存在しない場合は「該当なし」を表示。",headers:["A 検索番号","B 結果","F 社員番号","G 部署"],rows:[["E003","該当なし","E001","営業部"],["","","E002","管理部"]],cell:"B2",formula:'=IFERROR(XLOOKUP(A2,F:F,G:G),"該当なし")',result:"該当なし"},
  ],
  "zh-CN": [
    {title:"示例一：VLOOKUP 未找到数据",instruction:"E003 不在员工数据表中，使用 IFERROR 将 #N/A 改成“未找到”。",headers:["A 查询编号","B 查询结果","F 员工编号","G 姓名"],rows:[["E003","未找到","E001","陈小明"],["","","E002","王小美"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$G$3,2,FALSE),"未找到")',result:"未找到"},
    {title:"示例二：避免除以 0",instruction:"B 列投入数量为0时原本出现 #DIV/0!，现在改为显示0%。",headers:["A 完成数量","B 投入数量","C 完成率"],rows:[["80","100","80%"],["0","0","0%"]],cell:"C3",formula:"=IFERROR(A3/B3,0%)",result:"0%"},
    {title:"示例三：错误时显示空白",instruction:"数据尚未输入完整时，结果单元格保持空白，不显示错误。",headers:["A 完成数量","B 投入数量","C 完成率"],rows:[["80","100","80%"],["","",""]],cell:"C3",formula:'=IFERROR(A3/B3,"")',result:"空白"},
    {title:"示例四：搭配 XLOOKUP",instruction:"根据员工编号查找部门；E003 不存在时显示“未找到”。",headers:["A 查询编号","B 查询结果","F 员工编号","G 部门"],rows:[["E003","未找到","E001","销售部"],["","","E002","行政部"]],cell:"B2",formula:'=IFERROR(XLOOKUP(A2,F:F,G:G),"未找到")',result:"未找到"},
  ],
};
