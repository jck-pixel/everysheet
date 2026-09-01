"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AppLanguage, languageOptions } from "../i18n";

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
    if (!isLoaded || !user) return;
    const remote = user.unsafeMetadata.formulaSettings as Partial<FormulaSettings> | undefined;
    setSettings({ ...defaultSettings, ...remote });
  }, [isLoaded, user]);

  async function saveSettings() {
    if (!user) return;
    setSaving(true);
    setSaved(false);
    await user.update({
      unsafeMetadata: {
        ...user.unsafeMetadata,
        formulaSettings: settings,
      },
    });
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
      <div className="account-page-header">
        <Link href="/" className="account-brand">EveryFormula</Link>
        <div className="account-header-links">
          <Link href="/account">帳戶資訊</Link>
          <Link href="/">返回公式產生器</Link>
        </div>
      </div>

      <section className="settings-card">
        <span className="settings-eyebrow">使用設定</span>
        <h1>設定預設產生方式</h1>
        <p>儲存後，登入其他裝置也會沿用相同偏好。</p>

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
    </main>
  );
}
