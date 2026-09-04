import type { Metadata } from "next";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideArticleLayout from "../GuideArticleLayout";
import { orContent } from "./content";
import { orExamples } from "./examples";
export const metadata:Metadata={title:"Excel OR 函數教學｜任一條件成立｜EveryFormula",description:"學習 Excel OR，搭配 IF 判斷替代條件、資格與異常提醒。"};
export default function OrGuidePage({searchParams}:{searchParams?:{lang?:string}}){const requested=searchParams?.lang as AppLanguage|undefined;const language=languageOptions.some(o=>o.value===requested)?requested as AppLanguage:"zh-TW";return <GuideArticleLayout language={language} path="/guides/excel-or-function" content={orContent[language]} exampleDemos={orExamples[language]}/>;}
