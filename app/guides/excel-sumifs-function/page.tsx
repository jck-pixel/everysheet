import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { sumifsContent } from "./content";
import { sumifsExamples } from "./examples";

export const metadata: Metadata = { title: "Excel SUMIFS 函數教學｜多條件加總範例｜EveryFormula", description: "學習 Excel SUMIFS 多條件加總，包括文字條件、日期區間、儲存格條件與常見錯誤。" };

export default function SumifsGuidePage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requested = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some(option => option.value === requested) ? requested as AppLanguage : "zh-TW";
  return <GuideArticleLayout language={language} path="/guides/excel-sumifs-function" content={sumifsContent[language]} exampleDemos={sumifsExamples[language]} />;
}
