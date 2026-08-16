import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { countifsContent } from "./content";
import { guideDemos } from "../guideDemos";

export const metadata: Metadata = { title: "Excel COUNTIFS 函數教學｜多條件計數範例｜EverySheet", description: "學習 Excel COUNTIFS 多條件計數，包括文字、數字、日期區間與常見錯誤。" };

export default function CountifsGuidePage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requested = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some(option => option.value === requested) ? requested as AppLanguage : "zh-TW";
  return <GuideArticleLayout language={language} path="/guides/excel-countifs-function" content={countifsContent[language]} demo={guideDemos.countifs[language]} />;
}
