import { AppLanguage } from "../../i18n";
import type { GuideDemo } from "../GuideExampleTable";

export const vlookupExamples: Record<AppLanguage, GuideDemo[]> = {
  "zh-TW": [
    {title:"範例一：用員工編號查姓名",instruction:"在 A2 輸入 E002，VLOOKUP 會到員工資料表最左欄查找，並帶回第 2 欄姓名。",headers:["A 查詢編號","B 查詢結果","F 員工編號","G 姓名"],rows:[["E002","王小美","E001","陳小明"],["","","E002","王小美"],["","","E003","林大華"]],cell:"B2",formula:"=VLOOKUP(A2,F:G,2,FALSE)",result:"王小美"},
    {title:"範例二：用商品編號查價格",instruction:"商品編號 P102 位於商品表第一欄，價格在所選範圍的第 3 欄。",headers:["A 查詢編號","B 商品價格","F 商品編號","G 商品名稱","H 價格"],rows:[["P102","120","P101","原子筆","25"],["","","P102","筆記本","120"],["","","P103","資料夾","60"]],cell:"B2",formula:"=VLOOKUP(A2,F:H,3,FALSE)",result:"120"},
    {title:"範例三：複製公式時固定範圍",instruction:"使用 $ 固定 F2:H4，向下複製到 B3、B4 時，商品資料範圍不會跟著移動。",headers:["A 商品編號","B 查詢價格","F 商品編號","G 商品名稱","H 價格"],rows:[["P101","25","P101","原子筆","25"],["P102","120","P102","筆記本","120"],["P103","60","P103","資料夾","60"]],cell:"B2",formula:"=VLOOKUP(A2,$F$2:$H$4,3,FALSE)",result:"25"},
    {title:"範例四：找不到時顯示提示",instruction:"P999 不在商品表中，搭配 IFERROR 後不顯示 #N/A，而是顯示「查無資料」。",headers:["A 查詢編號","B 查詢結果","F 商品編號","G 商品名稱","H 價格"],rows:[["P999","查無資料","P101","原子筆","25"],["","","P102","筆記本","120"],["","","P103","資料夾","60"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$H$4,3,FALSE),"查無資料")',result:"查無資料"},
  ],
  en: [
    {title:"Example 1: Find an employee name",instruction:"Enter E002 in A2. VLOOKUP finds it in the leftmost column and returns the name from column 2.",headers:["A Lookup ID","B Result","F Employee ID","G Name"],rows:[["E002","Amy Wang","E001","Alex Chen"],["","","E002","Amy Wang"],["","","E003","David Lin"]],cell:"B2",formula:"=VLOOKUP(A2,F:G,2,FALSE)",result:"Amy Wang"},
    {title:"Example 2: Find a product price",instruction:"P102 is in the first column of the product table and its price is in column 3.",headers:["A Lookup ID","B Price","F Product ID","G Product","H Price"],rows:[["P102","120","P101","Pen","25"],["","","P102","Notebook","120"],["","","P103","Folder","60"]],cell:"B2",formula:"=VLOOKUP(A2,F:H,3,FALSE)",result:"120"},
    {title:"Example 3: Lock the table range",instruction:"Dollar signs keep F2:H4 fixed when the formula is copied down to B3 and B4.",headers:["A Product ID","B Price","F Product ID","G Product","H Price"],rows:[["P101","25","P101","Pen","25"],["P102","120","P102","Notebook","120"],["P103","60","P103","Folder","60"]],cell:"B2",formula:"=VLOOKUP(A2,$F$2:$H$4,3,FALSE)",result:"25"},
    {title:"Example 4: Show a friendly message",instruction:"P999 is absent from the table, so IFERROR displays Not found instead of #N/A.",headers:["A Lookup ID","B Result","F Product ID","G Product","H Price"],rows:[["P999","Not found","P101","Pen","25"],["","","P102","Notebook","120"],["","","P103","Folder","60"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$H$4,3,FALSE),"Not found")',result:"Not found"},
  ],
  ja: [
    {title:"例1：社員番号から氏名を検索",instruction:"A2 に E002 を入力し、左端列で検索して2列目の氏名を返します。",headers:["A 検索番号","B 結果","F 社員番号","G 氏名"],rows:[["E002","鈴木花子","E001","山田太郎"],["","","E002","鈴木花子"],["","","E003","林大輔"]],cell:"B2",formula:"=VLOOKUP(A2,F:G,2,FALSE)",result:"鈴木花子"},
    {title:"例2：商品番号から価格を検索",instruction:"P102 を商品表の1列目で検索し、3列目の価格を返します。",headers:["A 検索番号","B 価格","F 商品番号","G 商品名","H 価格"],rows:[["P102","120","P101","ペン","25"],["","","P102","ノート","120"],["","","P103","ファイル","60"]],cell:"B2",formula:"=VLOOKUP(A2,F:H,3,FALSE)",result:"120"},
    {title:"例3：検索範囲を固定",instruction:"$ で F2:H4 を固定すると、B3、B4 にコピーしても範囲が移動しません。",headers:["A 商品番号","B 価格","F 商品番号","G 商品名","H 価格"],rows:[["P101","25","P101","ペン","25"],["P102","120","P102","ノート","120"],["P103","60","P103","ファイル","60"]],cell:"B2",formula:"=VLOOKUP(A2,$F$2:$H$4,3,FALSE)",result:"25"},
    {title:"例4：見つからない場合の表示",instruction:"P999 は商品表にないため、IFERROR で #N/A の代わりに「該当なし」を表示します。",headers:["A 検索番号","B 結果","F 商品番号","G 商品名","H 価格"],rows:[["P999","該当なし","P101","ペン","25"],["","","P102","ノート","120"],["","","P103","ファイル","60"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$H$4,3,FALSE),"該当なし")',result:"該当なし"},
  ],
  "zh-CN": [
    {title:"示例一：用员工编号查姓名",instruction:"在 A2 输入 E002，VLOOKUP 会在最左列查找并返回第2列姓名。",headers:["A 查询编号","B 查询结果","F 员工编号","G 姓名"],rows:[["E002","王小美","E001","陈小明"],["","","E002","王小美"],["","","E003","林大华"]],cell:"B2",formula:"=VLOOKUP(A2,F:G,2,FALSE)",result:"王小美"},
    {title:"示例二：用商品编号查价格",instruction:"商品编号 P102 位于商品表第一列，价格在所选范围的第3列。",headers:["A 查询编号","B 商品价格","F 商品编号","G 商品名称","H 价格"],rows:[["P102","120","P101","圆珠笔","25"],["","","P102","笔记本","120"],["","","P103","文件夹","60"]],cell:"B2",formula:"=VLOOKUP(A2,F:H,3,FALSE)",result:"120"},
    {title:"示例三：复制公式时固定范围",instruction:"使用 $ 固定 F2:H4，向下复制到 B3、B4 时数据范围不会移动。",headers:["A 商品编号","B 查询价格","F 商品编号","G 商品名称","H 价格"],rows:[["P101","25","P101","圆珠笔","25"],["P102","120","P102","笔记本","120"],["P103","60","P103","文件夹","60"]],cell:"B2",formula:"=VLOOKUP(A2,$F$2:$H$4,3,FALSE)",result:"25"},
    {title:"示例四：找不到时显示提示",instruction:"P999 不在商品表中，搭配 IFERROR 后显示“未找到”而不是 #N/A。",headers:["A 查询编号","B 查询结果","F 商品编号","G 商品名称","H 价格"],rows:[["P999","未找到","P101","圆珠笔","25"],["","","P102","笔记本","120"],["","","P103","文件夹","60"]],cell:"B2",formula:'=IFERROR(VLOOKUP(A2,$F$2:$H$4,3,FALSE),"未找到")',result:"未找到"},
  ],
};
