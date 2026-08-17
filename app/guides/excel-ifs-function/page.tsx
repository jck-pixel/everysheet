import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { ifsContent } from "./content";
import { ifsExamples } from "./examples";

export const metadata: Metadata = { title:"Excel IFS 函數教學｜多條件分級範例｜EveryFormula", description:"學習 Excel IFS，取代巢狀 IF，完成成績、獎金與狀態分級。" };
export default function IfsGuidePage({ searchParams }:{ searchParams?:{ lang?:string } }) {
  const requested=searchParams?.lang as AppLanguage|undefined;
  const language=languageOptions.some(o=>o.value===requested)?requested as AppLanguage:"zh-TW";
  return <GuideArticleLayout language={language} path="/guides/excel-ifs-function" content={ifsContent[language]} exampleDemos={ifsExamples[language]} />;
}
