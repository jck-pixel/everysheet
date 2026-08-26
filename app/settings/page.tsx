"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AppLanguage, languageOptions } from "../i18n";

type FormulaSettings = {
  language: AppLanguage;
  tool: "Excel" | "Google Sheets";
  formulaType: "general" | "professional";
};

const defaultSettings: FormulaSettings = {
  language: "zh-TW",
  tool: "Excel",
  formulaType: "general",
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
    localStorage.setItem("everyformula-formula-type", settings.formulaType);
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
          <legend>預設公式類型</legend>
          <label className="settings-radio">
            <input
              type="radio"
              checked={settings.formulaType === "general"}
              onChange={() => setSettings({ ...settings, formulaType: "general" })}
            />
            <span><strong>單一函數</strong><small>公式簡單好懂</small></span>
          </label>
          <label className="settings-radio">
            <input
              type="radio"
              checked={settings.formulaType === "professional"}
              onChange={() => setSettings({ ...settings, formulaType: "professional" })}
            />
            <span><strong>組合函數</strong><small>適合多層判斷與複雜需求</small></span>
          </label>
        </fieldset>

        <button className="settings-save" onClick={saveSettings} disabled={saving}>
          {saving ? "正在儲存..." : "儲存設定"}
        </button>
        {saved && <p className="settings-saved">✓ 設定已儲存</p>}
      </section>
    </main>
  );
}
