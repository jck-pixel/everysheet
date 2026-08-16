"use client";

import { useRouter } from "next/navigation";
import { AppLanguage, languageOptions } from "../i18n";

export default function GuideLanguageSelect({ language, path = "/guides" }: { language: AppLanguage; path?: string }) {
  const router = useRouter();

  return (
    <select
      className="guides-language-select"
      value={language}
      onChange={(event) => {
        const nextLanguage = event.target.value as AppLanguage;
        localStorage.setItem("everysheet-language", nextLanguage);
        document.documentElement.lang = nextLanguage;
        router.push(`${path}?lang=${nextLanguage}`);
      }}
      aria-label="Language"
    >
      {languageOptions.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
