import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { guideDemos } from "../guideDemos";
import { rightContent } from "./content";

export const metadata: Metadata = {
  title: "Excel RIGHT 函數教學｜從右擷取文字｜EveryFormula",
  description: "學習 Excel RIGHT，擷取訂單流水號、電話末碼與文字右側內容。",
};

export default function RightPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requested = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some((option) => option.value === requested) ? requested as AppLanguage : "zh-TW";
  return <GuideArticleLayout language={language} path="/guides/excel-right-function" content={rightContent[language]} demo={guideDemos.right[language]} />;
}
