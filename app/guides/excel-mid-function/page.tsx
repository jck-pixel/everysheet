import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { guideDemos } from "../guideDemos";
import { midContent } from "./content";

export const metadata: Metadata = {
  title: "Excel MID 函數教學｜擷取文字中段｜EveryFormula",
  description: "學習 Excel MID，從訂單編號、商品代碼與文字中間擷取指定內容。",
};

export default function MidPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requested = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some((option) => option.value === requested) ? requested as AppLanguage : "zh-TW";
  return <GuideArticleLayout language={language} path="/guides/excel-mid-function" content={midContent[language]} demo={guideDemos.mid[language]} />;
}
