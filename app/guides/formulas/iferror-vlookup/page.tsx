import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../../i18n";
import GuideArticleLayout from "../../GuideArticleLayout";
import { iferrorVlookupContent } from "./content";
import { iferrorVlookupExamples } from "./examples";

export const metadata: Metadata = {
  title: "IFERROR＋VLOOKUP 組合公式教學｜EveryFormula",
  description: "學習用 IFERROR 搭配 VLOOKUP，查不到資料時顯示清楚提示並避免 #N/A。",
};

export default function IferrorVlookupPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requested = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some((option) => option.value === requested) ? requested as AppLanguage : "zh-TW";
  return <GuideArticleLayout language={language} path="/guides/formulas/iferror-vlookup" content={iferrorVlookupContent[language]} exampleDemos={iferrorVlookupExamples[language]} />;
}
