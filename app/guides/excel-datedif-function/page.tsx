import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { datedifContent } from "./content";
import { guideDemos } from "../guideDemos";

export const metadata: Metadata = { title: "Excel DATEDIF 函數教學｜年齡、年資與日期差｜EveryFormula", description: "學習 Excel DATEDIF，計算年齡、年資、月份與兩日期相差天數。" };

export default function DatedifGuidePage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requested = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some(option => option.value === requested) ? requested as AppLanguage : "zh-TW";
  return <GuideArticleLayout language={language} path="/guides/excel-datedif-function" content={datedifContent[language]} demo={guideDemos.datedif[language]} />;
}
