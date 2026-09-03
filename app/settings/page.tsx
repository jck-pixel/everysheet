"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AppLanguage, languageOptions } from "../i18n";
import AppNavigation from "../components/AppNavigation";

type FormulaSettings = {
  language: AppLanguage;
  tool: "Excel" | "Google Sheets";
  theme: "light" | "dark" | "system";
};

const defaultSettings: FormulaSettings = {
  language: "zh-TW",
  tool: "Excel",
  theme: "system",
};

export default function SettingsPage() {
  const { user, isLoaded } = useUser();
  const [settings, setSettings] = useState(defaultSettings);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;
    const local: Partial<FormulaSettings> = {
      language: (localStorage.getItem("everyformula-language") as AppLanguage) || undefined,
      tool: (localStorage.getItem("everyformula-tool") as FormulaSettings["tool"]) || undefined,
      theme: (localStorage.getItem("everyformula-theme") as FormulaSettings["theme"]) || undefined,
    };
    const remote = user?.unsafeMetadata.formulaSettings as Partial<FormulaSettings> | undefined;
    setSettings({ ...defaultSettings, ...local, ...remote });
  }, [isLoaded, user]);

  async function saveSettings() {
    setSaving(true);
    setSaved(false);
    if (user) {
      await user.update({
        unsafeMetadata: {
          ...user.unsafeMetadata,
          formulaSettings: settings,
        },
      });
    }
    localStorage.setItem("everyformula-language", settings.language);
    localStorage.setItem("everyformula-tool", settings.tool);
    localStorage.setItem("everyformula-theme", settings.theme);
    const dark = settings.theme === "dark" ||
      (settings.theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    setSaving(false);
    setSaved(true);
  }

  if (!isLoaded) {
    return <main className="account-page"><p>正在載入設定...</p></main>;
  }

  return (
    <main className="account-page">
      <AppNavigation />
      <div className="account-page-header">
        <span className="account-brand">EveryFormula</span>
      </div>

      <section className="settings-card">
        <span className="settings-eyebrow">使用設定</span>
        <h1>設定預設產生方式</h1>
        <p>{user ? "設定會保存在帳戶與此裝置。" : "設定會保存在此裝置。"}</p>

        <label htmlFor="settings-language">顯示語言</label>
        <select
          id="settings-language"
          value={settings.language}
          onChange={(event) => setSettings({ ...settings, language: event.target.value as AppLanguage })}
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>

        <label htmlFor="settings-tool">預設工具</label>
        <select
          id="settings-tool"
          value={settings.tool}
          onChange={(event) => setSettings({ ...settings, tool: event.target.value as FormulaSettings["tool"] })}
        >
          <option>Excel</option>
          <option>Google Sheets</option>
        </select>

        <fieldset>
          <legend>外觀顏色</legend>
          {([
            ["system", "跟隨手機"],
            ["light", "白色模式"],
            ["dark", "黑色模式"],
          ] as const).map(([value, label]) => (
            <label className="settings-radio" key={value}>
              <input
                type="radio"
                name="theme"
                value={value}
                checked={settings.theme === value}
                onChange={() => setSettings({ ...settings, theme: value })}
              />
              <span>{label}</span>
            </label>
          ))}
        </fieldset>

        <button className="settings-save" onClick={saveSettings} disabled={saving}>
          {saving ? "正在儲存..." : "儲存設定"}
        </button>
        {saved && <p className="settings-saved">✓ 設定已儲存</p>}
      </section>

      <section className="settings-card help-card">
        <span className="settings-eyebrow">使用說明</span>
        <h2>重新查看功能介紹</h2>
        <p>查看建立、修正、解釋與優化公式的操作方法。</p>
        <Link className="settings-help-link" href="/onboarding?review=1">開啟使用說明</Link>
      </section>
    </main>
  );
}
