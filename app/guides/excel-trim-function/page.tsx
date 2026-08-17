import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { guideDemos } from "../guideDemos";
import { trimContent } from "./content";

export const metadata: Metadata = {
  title: "Excel TRIM 函數教學｜清除多餘空格｜EveryFormula",
  description: "學習 Excel TRIM，清除姓名、商品名稱與匯入資料中的多餘空格。",
};

export default function TrimPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requested = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some((option) => option.value === requested) ? requested as AppLanguage : "zh-TW";
  return <GuideArticleLayout language={language} path="/guides/excel-trim-function" content={trimContent[language]} demo={guideDemos.trim[language]} />;
}
