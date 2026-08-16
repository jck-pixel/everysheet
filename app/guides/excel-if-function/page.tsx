import type { Metadata } from "next";
import Link from "next/link";
import { AppLanguage, languageOptions } from "../../i18n";
import GuideLanguageSelect from "../GuideLanguageSelect";
import { ifGuideContent } from "./content";
import GuideExampleTable from "../GuideExampleTable";
import { guideDemos } from "../guideDemos";

export const metadata: Metadata = {
  title: "Excel IF 函數教學｜語法、範例與常見錯誤｜EverySheet",
  description:
    "完整學習 Excel IF 函數，包含基本語法、數字判斷、文字判斷、AND／OR 多條件範例，以及常見錯誤與使用方法。",
};

export default function LocalizedIfGuidePage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requestedLanguage = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some((option) => option.value === requestedLanguage)
    ? requestedLanguage as AppLanguage
    : "zh-TW";
  const c = ifGuideContent[language];

  return (
    <main style={styles.page} className="if-guide-page">
      <header style={styles.header}>
        <div style={styles.nav} className="if-guide-nav">
          <Link href={`/?lang=${language}`} style={styles.brand}>EverySheet</Link>
          <GuideLanguageSelect language={language} path="/guides/excel-if-function" />
          <div style={styles.navLinks} className="if-guide-nav-links">
            <Link href={`/guides?lang=${language}`} style={styles.navLink}>{c.guides}</Link>
            <Link href={`/?lang=${language}`} style={styles.primaryNavLink}>{c.formulaTool}</Link>
          </div>
        </div>
      </header>

      <article style={styles.article} className="if-guide-article">
        <section style={styles.hero} className="if-guide-hero">
          <div style={styles.badge}>{c.badge}</div>
          <h1 style={styles.title} className="if-guide-title">{c.title}</h1>
          <p style={styles.subtitle} className="if-guide-subtitle">{c.subtitle}</p>
        </section>

        <section style={styles.contentCard} className="if-guide-card">
          <h2 style={styles.sectionTitle}>{c.introTitle}</h2>
          <p style={styles.paragraph}>{c.intro}</p>
          <div style={styles.exampleList}>{c.tags.map((tag) => <span key={tag} style={styles.exampleTag}>{tag}</span>)}</div>
        </section>

        <section style={styles.contentCard} className="if-guide-card">
          <h2 style={styles.sectionTitle}>{c.syntaxTitle}</h2>
          <div style={styles.formulaBox}>{c.syntaxFormula}</div>
          <div style={styles.syntaxGrid}>{c.syntaxItems.map(([title, detail]) => <div key={title} style={styles.syntaxItem}><strong>{title}</strong><span>{detail}</span></div>)}</div>
        </section>

        <GuideExampleTable demo={guideDemos.if[language]} language={language} />

        {c.examples.map((example) => (
          <section key={example.title} style={styles.contentCard} className="if-guide-card">
            <h2 style={styles.sectionTitle}>{example.title}</h2>
            <p style={styles.paragraph}>{example.description}</p>
            <div style={styles.formulaBox}>{example.formula}</div>
          </section>
        ))}

        <section style={styles.contentCard} className="if-guide-card">
          <h2 style={styles.sectionTitle}>{c.errorsTitle}</h2>
          <div style={styles.errorList}>{c.errors.map(([title, detail]) => <div key={title} style={styles.errorItem}><strong>{title}</strong><p style={styles.errorText}>{detail}</p></div>)}</div>
        </section>

        <section style={styles.cta} className="if-guide-cta">
          <div><span style={styles.ctaEyebrow}>EverySheet</span><h2 style={styles.ctaTitle}>{c.ctaTitle}</h2><p style={styles.ctaDescription}>{c.ctaText}</p></div>
          <Link href={`/?lang=${language}`} style={styles.ctaButton}>{c.ctaButton}</Link>
        </section>

        <div style={styles.backArea}><Link href={`/guides?lang=${language}`} style={styles.backLink}>{c.back}</Link></div>
      </article>
    </main>
  );
}

function LegacyIfGuidePage() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.nav}>
          <Link href="/" style={styles.brand}>
            EverySheet
          </Link>

          <div style={styles.navLinks}>
            <Link href="/guides" style={styles.navLink}>
              Excel 教學中心
            </Link>

            <Link href="/" style={styles.primaryNavLink}>
              公式產生器
            </Link>
          </div>
        </div>
      </header>

      <article style={styles.article}>
        <section style={styles.hero}>
          <div style={styles.breadcrumb}>
            <Link href="/guides" style={styles.breadcrumbLink}>
              Excel 教學中心
            </Link>
            <span>／</span>
            <span>IF 函數</span>
          </div>

          <div style={styles.badge}>邏輯函數</div>

          <h1 style={styles.title}>Excel IF 函數教學</h1>

          <p style={styles.subtitle}>
            從基本條件判斷到 AND、OR 多條件公式，
            一次學會 IF 函數的語法、範例與常見錯誤。
          </p>
        </section>

        <section style={styles.contentCard}>
          <h2 style={styles.sectionTitle}>IF 函數是什麼？</h2>

          <p style={styles.paragraph}>
            IF 函數會先判斷一個條件是否成立，再依照結果顯示不同內容。
            它常用在成績判斷、庫存狀態、達成率、是否逾期及 OK／NG 顯示。
          </p>

          <div style={styles.exampleList}>
            <span style={styles.exampleTag}>分數 ≥ 60 顯示及格</span>
            <span style={styles.exampleTag}>庫存低於 10 顯示補貨</span>
            <span style={styles.exampleTag}>金額超過 1,000 顯示高額</span>
            <span style={styles.exampleTag}>日期逾期顯示提醒</span>
          </div>
        </section>

        <section style={styles.contentCard}>
          <h2 style={styles.sectionTitle}>IF 函數語法</h2>

          <div style={styles.formulaBox}>
            =IF(條件, 條件成立時顯示的結果, 條件不成立時顯示的結果)
          </div>

          <div style={styles.syntaxGrid}>
            <div style={styles.syntaxItem}>
              <strong>條件</strong>
              <span>例如 A2&gt;=60</span>
            </div>

            <div style={styles.syntaxItem}>
              <strong>成立時結果</strong>
              <span>例如「及格」</span>
            </div>

            <div style={styles.syntaxItem}>
              <strong>不成立時結果</strong>
              <span>例如「不及格」</span>
            </div>
          </div>
        </section>

        <section style={styles.contentCard}>
          <h2 style={styles.sectionTitle}>範例一：判斷是否及格</h2>

          <p style={styles.paragraph}>
            假設 A 欄是姓名、B 欄是分數，想在 C 欄顯示是否及格。
          </p>

          <div style={styles.table}>
            <div style={styles.tableHeader}>A</div>
            <div style={styles.tableHeader}>B</div>
            <div style={styles.tableHeader}>C</div>

            <div style={styles.tableCell}>姓名</div>
            <div style={styles.tableCell}>分數</div>
            <div style={styles.tableCell}>結果</div>

            <div style={styles.tableCell}>王小明</div>
            <div style={styles.tableCell}>75</div>
            <div style={styles.resultCell}>及格</div>
          </div>

          <div style={styles.formulaBox}>
            =IF(B2&gt;=60,&quot;及格&quot;,&quot;不及格&quot;)
          </div>

          <div style={styles.steps}>
            <div style={styles.step}>1. 在 C2 貼上公式。</div>
            <div style={styles.step}>2. 按 Enter 查看結果。</div>
            <div style={styles.step}>3. 將公式往下拖曳套用其他列。</div>
          </div>
        </section>

        <section style={styles.contentCard}>
          <h2 style={styles.sectionTitle}>範例二：判斷庫存是否需要補貨</h2>

          <p style={styles.paragraph}>
            如果 A2 的庫存數量低於 10，就顯示「需要補貨」，否則顯示「庫存正常」。
          </p>

          <div style={styles.formulaBox}>
            =IF(A2&lt;10,&quot;需要補貨&quot;,&quot;庫存正常&quot;)
          </div>
        </section>

        <section style={styles.contentCard}>
          <h2 style={styles.sectionTitle}>範例三：搭配 AND 判斷多個條件</h2>

          <p style={styles.paragraph}>
            如果分數達到 60 分，而且出席率達到 80%，才顯示「通過」。
          </p>

          <div style={styles.formulaBox}>
            =IF(AND(B2&gt;=60,C2&gt;=80%),&quot;通過&quot;,&quot;未通過&quot;)
          </div>
        </section>

        <section style={styles.contentCard}>
          <h2 style={styles.sectionTitle}>範例四：搭配 OR 判斷任一條件</h2>

          <p style={styles.paragraph}>
            如果 A2 大於 100，或 B2 大於 50，就顯示「PASS」。
          </p>

          <div style={styles.formulaBox}>
            =IF(OR(A2&gt;100,B2&gt;50),&quot;PASS&quot;,&quot;&quot;)
          </div>
        </section>

        <section style={styles.contentCard}>
          <h2 style={styles.sectionTitle}>常見錯誤</h2>

          <div style={styles.errorList}>
            <div style={styles.errorItem}>
              <strong>文字沒有加雙引號</strong>
              <p style={styles.errorText}>
                文字結果必須使用雙引號，例如「及格」應寫成
                &quot;及格&quot;。
              </p>
            </div>

            <div style={styles.errorItem}>
              <strong>括號或逗號缺少</strong>
              <p style={styles.errorText}>
                IF 函數需要三個部分，缺少逗號或右括號會造成公式錯誤。
              </p>
            </div>

            <div style={styles.errorItem}>
              <strong>百分比格式錯誤</strong>
              <p style={styles.errorText}>
                80% 可以寫成 80%，也可以寫成 0.8，但要確認儲存格內容的實際格式。
              </p>
            </div>

            <div style={styles.errorItem}>
              <strong>巢狀 IF 太多層</strong>
              <p style={styles.errorText}>
                條件太多時，可以考慮 IFS、XLOOKUP 或建立對照表，避免公式太難維護。
              </p>
            </div>
          </div>
        </section>

        <section style={styles.cta}>
          <div>
            <span style={styles.ctaEyebrow}>EverySheet 公式助手</span>

            <h2 style={styles.ctaTitle}>條件太複雜，不知道 IF 怎麼寫？</h2>

            <p style={styles.ctaDescription}>
              直接用中文描述，例如「B 欄大於 60 且 C 欄達到 80% 顯示通過」，
              EverySheet 會幫你建立公式。
            </p>
          </div>

          <Link href="/" style={styles.ctaButton}>
            立即產生 IF 公式
          </Link>
        </section>

        <div style={styles.backArea}>
          <Link href="/guides" style={styles.backLink}>
            ← 返回 Excel 教學中心
          </Link>
        </div>
      </article>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #edf4ff 0%, #f8faff 42%, #ffffff 100%)",
    color: "#0f1b34",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", sans-serif',
  },

  header: {
    borderBottom: "1px solid #dce5f5",
    background: "rgba(255,255,255,0.88)",
  },

  nav: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },

  brand: {
    color: "#2563eb",
    fontSize: "20px",
    fontWeight: 850,
    textDecoration: "none",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
  },

  navLink: {
    color: "#526078",
    fontWeight: 700,
    textDecoration: "none",
  },

  primaryNavLink: {
    padding: "10px 15px",
    borderRadius: "11px",
    background: "#2563eb",
    color: "#ffffff",
    fontWeight: 800,
    textDecoration: "none",
  },

  article: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "56px 24px 80px",
  },

  hero: {
    textAlign: "center",
    marginBottom: "36px",
  },

  breadcrumb: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "24px",
    color: "#7b8497",
    fontSize: "14px",
  },

  breadcrumbLink: {
    color: "#2563eb",
    fontWeight: 700,
    textDecoration: "none",
  },

  badge: {
    display: "inline-block",
    padding: "7px 13px",
    borderRadius: "999px",
    background: "#e7efff",
    color: "#1d4ed8",
    fontSize: "13px",
    fontWeight: 800,
  },

  title: {
    margin: "18px 0 14px",
    fontSize: "clamp(40px, 7vw, 64px)",
    lineHeight: 1.08,
    letterSpacing: "-2px",
  },

  subtitle: {
    maxWidth: "700px",
    margin: "0 auto",
    color: "#667085",
    fontSize: "20px",
    lineHeight: 1.75,
  },

  contentCard: {
    marginBottom: "22px",
    padding: "30px",
    border: "1px solid #dce5f5",
    borderRadius: "22px",
    background: "#ffffff",
    boxShadow: "0 14px 40px rgba(15, 27, 52, 0.06)",
  },

  sectionTitle: {
    margin: "0 0 16px",
    fontSize: "28px",
    lineHeight: 1.3,
  },

  paragraph: {
    margin: "0 0 18px",
    color: "#526078",
    fontSize: "17px",
    lineHeight: 1.85,
  },

  exampleList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },

  exampleTag: {
    padding: "9px 12px",
    borderRadius: "11px",
    background: "#f1f6ff",
    color: "#2457b7",
    fontSize: "14px",
    fontWeight: 700,
  },

  formulaBox: {
    margin: "18px 0",
    padding: "18px 20px",
    borderRadius: "14px",
    background: "#101a33",
    color: "#ffffff",
    fontFamily: '"SFMono-Regular", Consolas, monospace',
    fontSize: "15px",
    lineHeight: 1.7,
    overflowX: "auto",
  },

  syntaxGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "12px",
  },

  syntaxItem: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "15px",
    borderRadius: "13px",
    background: "#f7faff",
    color: "#526078",
  },

  table: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    margin: "20px 0",
    borderTop: "1px solid #ced9ec",
    borderLeft: "1px solid #ced9ec",
  },

  tableHeader: {
    padding: "12px",
    borderRight: "1px solid #ced9ec",
    borderBottom: "1px solid #ced9ec",
    background: "#eaf1ff",
    textAlign: "center",
    fontWeight: 850,
  },

  tableCell: {
    padding: "13px",
    borderRight: "1px solid #ced9ec",
    borderBottom: "1px solid #ced9ec",
    textAlign: "center",
  },

  resultCell: {
    padding: "13px",
    borderRight: "1px solid #ced9ec",
    borderBottom: "1px solid #ced9ec",
    background: "#eefbf3",
    color: "#15803d",
    textAlign: "center",
    fontWeight: 850,
  },

  steps: {
    display: "grid",
    gap: "9px",
    marginTop: "18px",
  },

  step: {
    padding: "11px 14px",
    borderRadius: "11px",
    background: "#f7faff",
    color: "#526078",
  },

  errorList: {
    display: "grid",
    gap: "14px",
  },

  errorItem: {
    padding: "18px",
    border: "1px solid #e2e8f0",
    borderRadius: "15px",
    background: "#fbfcff",
  },

  errorText: {
    margin: "8px 0 0",
    color: "#667085",
    lineHeight: 1.75,
  },

  cta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "26px",
    marginTop: "34px",
    padding: "32px",
    borderRadius: "24px",
    background:
      "linear-gradient(135deg, #16213d 0%, #1f3a72 58%, #2563eb 100%)",
    color: "#ffffff",
    boxShadow: "0 20px 44px rgba(15, 27, 52, 0.2)",
    flexWrap: "wrap",
  },

  ctaEyebrow: {
    color: "#bfdbfe",
    fontSize: "13px",
    fontWeight: 800,
  },

  ctaTitle: {
    margin: "8px 0 10px",
    fontSize: "28px",
  },

  ctaDescription: {
    maxWidth: "600px",
    margin: 0,
    color: "#dbeafe",
    lineHeight: 1.75,
  },

  ctaButton: {
    display: "inline-flex",
    minHeight: "48px",
    padding: "0 20px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "13px",
    background: "#ffffff",
    color: "#1d4ed8",
    fontWeight: 850,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },

  backArea: {
    marginTop: "30px",
    textAlign: "center",
  },

  backLink: {
    color: "#2563eb",
    fontWeight: 750,
    textDecoration: "none",
  },
};
