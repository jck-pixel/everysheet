import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { guideDemos } from "../guideDemos";
import { textContent } from "./content";

export const metadata: Metadata = {
  title: "Excel TEXT 函數教學｜日期與數字格式｜EveryFormula",
  description: "學習 Excel TEXT，格式化日期、金額、百分比並為編號補零。",
};

export default function TextPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requested = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some((option) => option.value === requested) ? requested as AppLanguage : "zh-TW";
  return <GuideArticleLayout language={language} path="/guides/excel-text-function" content={textContent[language]} demo={guideDemos.text[language]} />;
}
