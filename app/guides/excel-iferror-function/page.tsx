import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { iferrorContent } from "./content";
import { iferrorExamples } from "./examples";

export const metadata: Metadata = { title: "Excel IFERROR 函數教學｜處理公式錯誤｜EverySheet", description: "學習 Excel IFERROR，處理 #N/A、#DIV/0!、#VALUE! 與查找錯誤。" };

export default function IferrorGuidePage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requested = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some(option => option.value === requested) ? requested as AppLanguage : "zh-TW";
  return <GuideArticleLayout language={language} path="/guides/excel-iferror-function" content={iferrorContent[language]} exampleDemos={iferrorExamples[language]} />;
}
