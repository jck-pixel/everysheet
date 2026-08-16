import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { andContent } from "./content";
import { andExamples } from "./examples";

export const metadata: Metadata = { title:"Excel AND 函數教學｜多條件同時成立｜EverySheet", description:"學習 Excel AND，搭配 IF 判斷分數、出席率與多項資格條件。" };
export default function AndGuidePage({searchParams}:{searchParams?:{lang?:string}}){const requested=searchParams?.lang as AppLanguage|undefined;const language=languageOptions.some(o=>o.value===requested)?requested as AppLanguage:"zh-TW";return <GuideArticleLayout language={language} path="/guides/excel-and-function" content={andContent[language]} exampleDemos={andExamples[language]} />;}
