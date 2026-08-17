import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { guideDemos } from "../guideDemos";
import { substituteContent } from "./content";

export const metadata: Metadata = {
  title: "Excel SUBSTITUTE 函數教學｜尋找與替換文字｜EveryFormula",
  description: "學習 Excel SUBSTITUTE，批次替換商品編號、移除符號並清理文字資料。",
};

export default function SubstitutePage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requested = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some((option) => option.value === requested) ? requested as AppLanguage : "zh-TW";
  return <GuideArticleLayout language={language} path="/guides/excel-substitute-function" content={substituteContent[language]} demo={guideDemos.substitute[language]} />;
}
