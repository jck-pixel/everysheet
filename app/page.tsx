"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState, useRef } from "react";
import { AppLanguage, languageOptions, uiText } from "./i18n";
import AccountMenu from "./components/AccountMenu";

type Result = {
  status?: "ready" | "needs_info";
  confidence?: "high" | "medium" | "low";
  missingInfo?: string[];
  questions?: string[];
  formula: string;
  placementGuide?: {
    formulaCell?: string;
    columns?: string[];
    headers?: string[];
    sampleRow?: string[];
    steps?: string[];
  } | null;
  explanation: string;
  howToUse: string;
  example: string;
  warning?: string;
  professionalTips?: string[];
  modernFormula?: {
  title?: string;
  formula?: string;
  reason?: string;
} | null;
};

export default function Home() {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [language, setLanguage] = useState<AppLanguage>("zh-TW");
  const [request, setRequest] = useState<string>(uiText["zh-TW"].defaultRequest);
  const [tool, setTool] = useState("Excel");
  const [outputMode, setOutputMode] = useState("general");
  const [mode, setMode] = useState("generate");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [followUp, setFollowUp] = useState("");
  const [originalRequest, setOriginalRequest] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  const t = uiText[language];
  const examples = t.examples.map(([label, text]) => ({ label, text }));

  useEffect(() => {
    const savedLanguage = (localStorage.getItem("everyformula-language") || localStorage.getItem("everysheet-language")) as AppLanguage | null;
    if (savedLanguage && languageOptions.some((option) => option.value === savedLanguage)) {
      setLanguage(savedLanguage);
      setRequest(uiText[savedLanguage].defaultRequest);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  useEffect(() => {
    if (!isUserLoaded || !user) return;
    const settings = user.unsafeMetadata.formulaSettings as {
      language?: AppLanguage;
      tool?: string;
      formulaType?: string;
    } | undefined;
    if (!settings) return;
    if (settings.language && languageOptions.some((option) => option.value === settings.language)) {
      setLanguage(settings.language);
      setRequest(uiText[settings.language].defaultRequest);
      document.documentElement.lang = settings.language;
    }
    if (settings.tool === "Excel" || settings.tool === "Google Sheets") setTool(settings.tool);
    if (settings.formulaType === "general" || settings.formulaType === "professional") {
      setOutputMode(settings.formulaType);
    }
  }, [isUserLoaded, user]);

  function changeLanguage(nextLanguage: AppLanguage) {
    setLanguage(nextLanguage);
    setRequest(uiText[nextLanguage].defaultRequest);
    setResult(null);
    setError("");
    localStorage.setItem("everyformula-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

async function generateFormula(selectedMode?: string) {
  const runMode = selectedMode || mode;

  setMode(runMode);
  setError("");
  setResult(null);
  setCopied(false);

  if (!request.trim()) {
    setError(t.emptyError);
    return;
  }

  setLoading(true);
  setOriginalRequest(request);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        request,
        tool,
        outputMode,
        mode: runMode,
        language,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || t.failed);
    }

    setResult(data);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      setError(t.timeout);
    } else {
      setError(err instanceof Error ? err.message : t.failed);
    }
  } finally {
    clearTimeout(timeoutId);
    setLoading(false);
  }
}

async function continueWithMoreInfo() {
  if (!followUp.trim()) {
    setError(t.followUpError);
    return;
  }

    const combinedRequest = `${originalRequest}

補充資訊：
${followUp}`;

    setRequest(combinedRequest);
    setFollowUp("");
    setResult(null);
    setCopied(false);
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ request: combinedRequest, tool, outputMode, mode, language }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || t.failed);
      }

      setResult(data);

setTimeout(() => {
  resultRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.failed);
    } finally {
      setLoading(false);
    }
  }

async function runExample(exampleText: string) {
  setRequest(exampleText);
  setError("");
  setResult(null);
  setCopied(false);
  setLoading(true);
  setOriginalRequest(exampleText);

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ request: exampleText, tool, outputMode, mode, language }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || t.failed);
    }

    setResult(data);

setTimeout(() => {
  resultRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 100);
  } catch (err) {
    setError(err instanceof Error ? err.message : t.failed);
  } finally {
    setLoading(false);
  }
}

function normalizeFormula(value: string) {
  const formulaMatch = value.match(/=[^\n\r]+/);
  return (formulaMatch?.[0] || value)
    .replace(/\s+/g, "")
    .trim()
    .toUpperCase();
}

const isUnchangedFix =
  mode === "fix" &&
  result?.formula &&
  normalizeFormula(request) === normalizeFormula(result.formula);
  
  async function copyFormula() {
    if (!result?.formula) return;

    await navigator.clipboard.writeText(result.formula);

    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <main>
      <section className="hero">
        <AccountMenu />
        <div className="mobile-brand">{t.mobileBrand}</div>
        <select
          className="language-select"
          value={language}
          onChange={(event) => changeLanguage(event.target.value as AppLanguage)}
          aria-label="Language"
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <div className="badge">Excel Formula Generator</div>

        <h1>
          用中文描述需求
          <br />
          快速完成公式
        </h1>

        <p className="subtitle">
          建立公式｜修正錯誤｜解釋公式｜最佳化公式
          <br />
          支援 Excel 與 Google Sheets。
        </p>

        <div className="hero-links">
  <Link href={`/guides?lang=${language}`} className="guides-link">
    <span className="guides-link-wide">📚 前往 Excel 教學中心</span>
    <span className="guides-link-mobile">{t.guideLink}</span>
  </Link>
</div>
        
      </section>

      <section className="app-card">
        <label htmlFor="request">{t.inputLabel}</label>

        <textarea
          id="request"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder={t.placeholder}
        />

        <p className="input-hint">
          {t.hint}
        </p>

        <div className="mode-tabs">
  <button
    className={mode === "generate" ? "active" : ""}
    onClick={() => generateFormula("generate")}
    disabled={loading}
  >
    {t.generate}
  </button>

  <button
    className={mode === "fix" ? "active" : ""}
    onClick={() => generateFormula("fix")}
    disabled={loading}
  >
    {t.fix}
  </button>

  <button
    className={mode === "explain" ? "active" : ""}
    onClick={() => generateFormula("explain")}
    disabled={loading}
  >
    {t.explain}
  </button>

  <button
    className={mode === "optimize" ? "active" : ""}
    onClick={() => generateFormula("optimize")}
    disabled={loading}
  >
    {t.optimize}
  </button>
</div>

        <div className="controls">
  <select
    value={tool}
    onChange={(e) => setTool(e.target.value)}
    aria-label="選擇工具"
  >
    <option>Excel</option>
    <option>Google Sheets</option>
  </select>
</div>

        <div className="mode-box">
          <div className="mode-title">{t.resultFormat}</div>

          <label className={`mode-option ${outputMode === "general" ? "active" : ""}`}>
            <input
              type="radio"
              name="outputMode"
              value="general"
              checked={outputMode === "general"}
              onChange={(e) => setOutputMode(e.target.value)}
            />
            <div>
              <strong>{t.general}</strong>
              <span>{t.generalDescription}</span>
            </div>
          </label>

          <label className={`mode-option ${outputMode === "professional" ? "active" : ""}`}>
            <input
              type="radio"
              name="outputMode"
              value="professional"
              checked={outputMode === "professional"}
              onChange={(e) => setOutputMode(e.target.value)}
            />
            <div>
              <strong>{t.professional}</strong>
              <span>{t.professionalDescription}</span>
            </div>
          </label>
        </div>

        <div className="example-title">{t.popular}</div>

        <div className="examples">
  {examples.map((item) => (
    <button
      className="example-btn"
      key={item.label}
      onClick={() => runExample(item.text)}
      disabled={loading}
    >
      {item.label}
    </button>
  ))}
</div>

        {loading && (
          <div className="loading-box">
            <div className="loading-title">{t.processing}</div>
            <div className="loading-steps">
              <span>{t.understand}</span>
              <span>{t.create}</span>
              <span>{t.organize}</span>
            </div>
          </div>
        )}

        {error && <div className="error">{error}</div>}
      </section>

      {result && (
        <section className="result-card">
          <div className="result-header">
            <h2>{result.status === "needs_info" ? t.needsInfo : t.result}</h2>

            {result.status !== "needs_info" && (
              <button className="copy-btn" onClick={copyFormula}>
                {copied ? t.copied : t.copy}
              </button>
            )}
          </div>

          {result.status === "needs_info" && (
            <div className="mini-box">
              {result.missingInfo && result.missingInfo.length > 0 && (
                <>
                  <p>{t.missing}</p>
                  <ul>
                    {result.missingInfo.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {result.questions && result.questions.length > 0 && (
                <>
                  <p>{t.questions}</p>
                  <ul>
                    {result.questions.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </>
              )}

              <textarea
                value={followUp}
                onChange={(e) => setFollowUp(e.target.value)}
                placeholder={t.followUpPlaceholder}
              />

              <button onClick={continueWithMoreInfo} disabled={loading}>
                {loading ? t.processing : t.continue}
              </button>
            </div>
          )}

          {result.status !== "needs_info" && (
  <>
    {isUnchangedFix ? (
      <div className="formula-status-box">
        <h3>{t.currentFormulaOk}</h3>
        <p>{t.currentFormulaOkText}</p>
      </div>
    ) : (
      <>
        <h3>{t.formula}</h3>
        <pre className="formula-box">{result.formula}</pre>
      </>
    )}

    {result.placementGuide && (
    
  <div className="placement-box">
    <div className="placement-header">
      <h3>📋 Excel 示意圖</h3>
      {result.placementGuide.formulaCell && (
        <div className="placement-location">
          公式貼在 <strong>{result.placementGuide.formulaCell}</strong>
        </div>
      )}
    </div>

    <div className="placement-table-wrap">
      <table className="placement-table">
        <thead>
          <tr>
            {result.placementGuide.columns?.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {result.placementGuide.headers?.map((header) => (
              <td key={header}>{header}</td>
            ))}
          </tr>
          <tr>
            {result.placementGuide.sampleRow?.map((cell) => (
              <td key={cell} className={cell.includes("公式") ? "formula-target" : ""}>
                {cell}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>

    {result.placementGuide.steps && result.placementGuide.steps.length > 0 && (
      <div className="placement-steps">
        {result.placementGuide.steps.map((step, index) => (
          <div className="placement-step" key={step}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    )}
  </div>
)}

              {outputMode === "professional" &&
  result.professionalTips &&
  result.professionalTips.length > 0 && (
    <div className="professional-tips">
      <h3>⭐ 專業建議</h3>
      <ul>
        {result.professionalTips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </div>
  )}
              
              <div className="result-grid">
                <div className="mini-box">
                  <h3>{t.explanation}</h3>
                  <p>{result.explanation}</p>
                </div>

                <div className="mini-box">
                  <h3>{t.usage}</h3>
                  <p>{result.howToUse}</p>
                </div>

                <div className="mini-box">
                  <h3>{t.example}</h3>
                  <p>{result.example}</p>
                </div>

                <div className="mini-box">
                  <h3>{t.warning}</h3>
                  <p>
                    {result.warning ||
                      "請依照你的實際欄位位置，把 A1、B2 等儲存格改成自己的表格位置。"}
                  </p>
                </div>
              </div>
            </>
          )}
        </section>
      )}

      {!result && (
      <section className="info-grid">
        <div className="info-card">
          <h3>適合誰？</h3>
          <p>上班族、行政、生管、財務、學生，只要常用 Excel 都能用。</p>
        </div>

        <div className="info-card">
          <h3>可以做什麼？</h3>
          <p>IF 判斷、VLOOKUP、XLOOKUP、SUMIFS、日期計算、加班費、良率、達成率。</p>
        </div>

        <div className="info-card">
          <h3>怎麼用？</h3>
          <p>用中文描述需求，複製公式，貼到 Excel 或 Google Sheets。</p>
        </div>
      </section>
      )}

      <footer>
  <div>EveryFormula Beta v1.0 © 2026</div>

  <div className="feedback-link">
    <a
      href="https://forms.gle/zeis6GaFuUWTrUVJ8"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬 Beta 意見回饋
    </a>
  </div>
</footer>
    </main>
  );
}
