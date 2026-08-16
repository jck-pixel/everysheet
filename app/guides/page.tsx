import type { Metadata } from "next";
import Link from "next/link";
import { AppLanguage, guideUiText, languageOptions } from "../i18n";
import GuideLanguageSelect from "./GuideLanguageSelect";

export const metadata: Metadata = {
  title: "Excel 教學中心｜函數教學與實務公式｜EverySheet",
  description:
    "免費學習 Excel 與 Google Sheets 函數，包含 IF、VLOOKUP、XLOOKUP、SUMIFS、COUNTIFS、日期與文字處理公式。",
};

const categories = [
  {
    icon: "🔎",
    title: "查找函數",
    description: "依照編號、姓名或條件查詢資料。",
    items: ["VLOOKUP", "XLOOKUP", "INDEX", "MATCH"],
  },
  {
    icon: "🧠",
    title: "邏輯函數",
    description: "依照條件顯示不同結果。",
    items: ["IF", "IFS", "IFERROR", "AND", "OR"],
  },
  {
    icon: "📊",
    title: "統計函數",
    description: "加總、計數與多條件統計。",
    items: ["SUMIF", "SUMIFS", "COUNTIF", "COUNTIFS", "AVERAGEIF"],
  },
  {
    icon: "📅",
    title: "日期與時間",
    description: "計算日期差、工作天與到期日。",
    items: ["DATEDIF", "TODAY", "NETWORKDAYS", "EDATE"],
  },
  {
    icon: "✏️",
    title: "文字處理",
    description: "擷取、整理及合併文字內容。",
    items: ["LEFT", "RIGHT", "MID", "TEXT", "TRIM", "SUBSTITUTE"],
  },
];

const popularGuides = [
  {
    name: "IF 函數",
    description: "依照條件顯示不同結果",
    href: "/guides/excel-if-function",
    available: true,
  },
  {
    name: "VLOOKUP",
    description: "從資料表中查找指定資料",
    href: "",
    available: false,
  },
  {
    name: "XLOOKUP",
    description: "Microsoft 365 的現代查找函數",
    href: "",
    available: false,
  },
  {
    name: "SUMIFS",
    description: "依照多個條件加總資料",
    href: "",
    available: false,
  },
];

const combinedGuideText: Record<AppLanguage, { eyebrow: string; title: string; description: string; name: string; detail: string; badge: string; singleEyebrow: string; singleTitle: string }> = {
  "zh-TW": { eyebrow:"多個函數", title:"組合公式教學案例", description:"把兩個以上函數組合起來，解決實際工作需求。", name:"IFERROR＋VLOOKUP", detail:"查找資料，找不到時顯示清楚提示。", badge:"2 個函數", singleEyebrow:"單一函數", singleTitle:"單一函數教學" },
  en: { eyebrow:"Multiple functions", title:"Combined Formula Guides", description:"Combine two or more functions to solve practical spreadsheet tasks.", name:"IFERROR + VLOOKUP", detail:"Look up data and show a clear message when no match exists.", badge:"2 functions", singleEyebrow:"Single function", singleTitle:"Single Function Guides" },
  ja: { eyebrow:"複数関数", title:"組み合わせ数式の実例", description:"2つ以上の関数を組み合わせ、実務の課題を解決します。", name:"IFERROR＋VLOOKUP", detail:"データを検索し、見つからない場合は分かりやすく表示。", badge:"2 関数", singleEyebrow:"単一関数", singleTitle:"単一関数ガイド" },
  "zh-CN": { eyebrow:"多个函数", title:"组合公式教学案例", description:"组合两个以上函数，解决实际工作需求。", name:"IFERROR＋VLOOKUP", detail:"查找数据，未找到时显示清楚提示。", badge:"2 个函数", singleEyebrow:"单一函数", singleTitle:"单一函数教学" },
};

export default function GuidesPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const requestedLanguage = searchParams?.lang as AppLanguage | undefined;
  const language = languageOptions.some((option) => option.value === requestedLanguage)
    ? requestedLanguage as AppLanguage
    : "zh-TW";
  const g = guideUiText[language];
  const combined = combinedGuideText[language];
  const localizedPopularGuides = g.popularItems.map(([name, description], index) => ({
    name,
    description,
    href: index === 0
      ? `/guides/excel-if-function?lang=${language}`
      : index === 1
        ? `/guides/excel-vlookup-function?lang=${language}`
        : index === 2
          ? `/guides/excel-xlookup-function?lang=${language}`
        : index === 3
          ? `/guides/excel-sumifs-function?lang=${language}`
          : "",
    available: index <= 3,
  }));
  const localizedCategories = g.categoryItems.map(([icon, title, description, items]) => ({
    icon,
    title,
    description,
    items,
  }));

  return (
    <main style={styles.page} className="guides-page">
      <section style={styles.hero} className="guides-hero">
        <Link href="/" style={styles.brand} className="guides-brand">
          EverySheet
        </Link>

        <GuideLanguageSelect language={language} />

        <div style={styles.badge} className="guides-badge">Excel Formula Guides</div>

        <h1 style={styles.title} className="guides-title">Excel 教學中心</h1>

        <p style={styles.subtitle} className="guides-subtitle">
          從基礎函數到實務公式，
          <br />
          快速找到你需要的 Excel 與 Google Sheets 教學。
        </p>

        <Link href={`/?lang=${language}`} style={styles.primaryButton} className="guides-primary-button">
          {g.formulaTool}
        </Link>
      </section>

      <section style={styles.content} className="guides-content">
        <div style={styles.sectionHeader} className="guides-section-header">
          <div>
            <span style={styles.eyebrow}>熱門內容</span>
            <h2 style={styles.sectionTitle} className="guides-section-title">{g.popular}</h2>
          </div>

          <p style={styles.sectionDescription} className="guides-section-description">
            {g.popularDescription}
          </p>
        </div>

       <div style={styles.popularGrid} className="guides-popular-grid">
  {localizedPopularGuides.map((guide) =>
    guide.available ? (
      <Link
        key={guide.name}
        href={guide.href}
        style={styles.popularCardLink}
        className="guides-popular-card"
      >
        <div style={styles.cardTop}>
          <span style={styles.functionName}>{guide.name}</span>
          <span style={styles.availableBadge}>{g.start}</span>
        </div>

        <p style={styles.cardDescription} className="guides-card-description">{guide.description}</p>
      </Link>
    ) : (
      <article key={guide.name} style={styles.popularCard} className="guides-popular-card">
        <div style={styles.cardTop}>
          <span style={styles.functionName}>{guide.name}</span>
          <span style={styles.comingSoon}>{g.soon}</span>
        </div>

        <p style={styles.cardDescription} className="guides-card-description">{guide.description}</p>
      </article>
    )
  )}
</div>

        <div style={styles.sectionHeader} className="guides-section-header">
          <div>
            <span style={styles.eyebrow}>{combined.eyebrow}</span>
            <h2 style={styles.sectionTitle} className="guides-section-title">{combined.title}</h2>
          </div>
          <p style={styles.sectionDescription} className="guides-section-description">{combined.description}</p>
        </div>

        <div style={styles.combinedGrid}>
          <Link href={`/guides/formulas/iferror-vlookup?lang=${language}`} style={styles.combinedCard}>
            <div style={styles.cardTop}>
              <span style={styles.functionName}>{combined.name}</span>
              <span style={styles.combinedBadge}>{combined.badge}</span>
            </div>
            <p style={styles.cardDescription}>{combined.detail}</p>
            <span style={styles.combinedAction}>{g.start} →</span>
          </Link>
        </div>

        <div style={styles.sectionHeader} className="guides-section-header">
          <div>
            <span style={styles.eyebrow}>{combined.singleEyebrow}</span>
            <h2 style={styles.sectionTitle} className="guides-section-title">{combined.singleTitle}</h2>
          </div>

          <p style={styles.sectionDescription} className="guides-section-description">
            {g.categoryDescription}
          </p>
        </div>

        <div style={styles.categoryGrid} className="guides-category-grid">
          {localizedCategories.map((category) => (
            <article key={category.title} style={styles.categoryCard} className="guides-category-card">
              <div style={styles.categoryIcon} className="guides-category-icon">{category.icon}</div>

              <h3 style={styles.categoryTitle} className="guides-category-title">{category.title}</h3>

              <p style={styles.categoryDescription} className="guides-category-description">
                {category.description}
              </p>

              <div style={styles.tagList} className="guides-tag-list">
                {category.items.map((item) => (
                  item === "IF" || item === "IFS" || item === "IFERROR" || item === "AND" || item === "OR" || item === "INDEX" || item === "MATCH" || item === "VLOOKUP" || item === "XLOOKUP" || item === "SUMIF" || item === "SUMIFS" || item === "COUNTIF" || item === "COUNTIFS" || item === "AVERAGEIF" || item === "DATEDIF" || item === "TODAY" || item === "NETWORKDAYS" || item === "EDATE" || item === "LEFT" || item === "RIGHT" || item === "MID" || item === "TEXT" || item === "TRIM" || item === "SUBSTITUTE" ? (
                    <Link
                      key={item}
                      href={item === "IF" || item === "IFS" || item === "IFERROR" || item === "AND" || item === "OR"
                        ? item === "IF"
                          ? `/guides/excel-if-function?lang=${language}`
                          : item === "IFS"
                            ? `/guides/excel-ifs-function?lang=${language}`
                            : item === "IFERROR"
                              ? `/guides/excel-iferror-function?lang=${language}`
                              : item === "AND"
                                ? `/guides/excel-and-function?lang=${language}`
                                : `/guides/excel-or-function?lang=${language}`
                        : item === "INDEX"
                          ? `/guides/excel-index-function?lang=${language}`
                        : item === "MATCH"
                          ? `/guides/excel-match-function?lang=${language}`
                        : item === "VLOOKUP"
                          ? `/guides/excel-vlookup-function?lang=${language}`
                          : item === "XLOOKUP"
                            ? `/guides/excel-xlookup-function?lang=${language}`
                            : item === "SUMIF"
                              ? `/guides/excel-sumif-function?lang=${language}`
                            : item === "SUMIFS"
                              ? `/guides/excel-sumifs-function?lang=${language}`
                              : item === "COUNTIF"
                                ? `/guides/excel-countif-function?lang=${language}`
                              : item === "COUNTIFS"
                                ? `/guides/excel-countifs-function?lang=${language}`
                                : item === "AVERAGEIF"
                                  ? `/guides/excel-averageif-function?lang=${language}`
                                  : item === "DATEDIF" ? `/guides/excel-datedif-function?lang=${language}` : item === "TODAY" ? `/guides/excel-today-function?lang=${language}` : item === "NETWORKDAYS" ? `/guides/excel-networkdays-function?lang=${language}` : item === "EDATE" ? `/guides/excel-edate-function?lang=${language}` : item === "LEFT" ? `/guides/excel-left-function?lang=${language}` : item === "RIGHT" ? `/guides/excel-right-function?lang=${language}` : item === "MID" ? `/guides/excel-mid-function?lang=${language}` : item === "TEXT" ? `/guides/excel-text-function?lang=${language}` : item === "TRIM" ? `/guides/excel-trim-function?lang=${language}` : `/guides/excel-substitute-function?lang=${language}`}
                      style={styles.tag}
                      className="guides-tag guides-tag-link"
                    >
                      {item} →
                    </Link>
                  ) : (
                    <span key={item} style={styles.tag} className="guides-tag">
                      {item}
                    </span>
                  )
                ))}
              </div>
            </article>
          ))}
        </div>

        <section style={styles.cta}>
          <div>
            <span style={styles.ctaEyebrow}>EverySheet 公式助手</span>
            <h2 style={styles.ctaTitle}>不知道該使用哪個函數？</h2>

            <p style={styles.ctaDescription}>
              直接用中文描述需求，EverySheet 會協助你建立、修正、解釋或優化公式。
            </p>
          </div>

          <Link href="/" style={styles.ctaButton}>
            立即產生公式
          </Link>
        </section>
      </section>

      <footer style={styles.footer}>
        <Link href="/" style={styles.footerLink}>
          ← 返回 EverySheet
        </Link>

        <span>Excel 教學中心 © 2026</span>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #edf4ff 0%, #f8faff 48%, #ffffff 100%)",
    color: "#0f1b34",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", sans-serif',
  },

  hero: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "72px 24px 60px",
    textAlign: "center",
  },

  brand: {
    display: "inline-block",
    marginBottom: "26px",
    color: "#2563eb",
    fontSize: "18px",
    fontWeight: 800,
    textDecoration: "none",
  },

  badge: {
    display: "inline-block",
    padding: "7px 14px",
    borderRadius: "999px",
    background: "#e7efff",
    color: "#1d4ed8",
    fontSize: "13px",
    fontWeight: 800,
  },

  title: {
    margin: "20px 0 14px",
    fontSize: "clamp(42px, 7vw, 68px)",
    lineHeight: 1.08,
    letterSpacing: "-2px",
  },

  subtitle: {
    maxWidth: "680px",
    margin: "0 auto 30px",
    color: "#667085",
    fontSize: "20px",
    lineHeight: 1.75,
  },

  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "48px",
    padding: "0 24px",
    borderRadius: "14px",
    background: "#2563eb",
    color: "#ffffff",
    fontWeight: 800,
    textDecoration: "none",
    boxShadow: "0 12px 28px rgba(37, 99, 235, 0.22)",
  },

  content: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 24px 72px",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "24px",
    margin: "38px 0 20px",
    flexWrap: "wrap",
  },

  eyebrow: {
    color: "#2563eb",
    fontSize: "13px",
    fontWeight: 800,
    letterSpacing: "1px",
  },

  sectionTitle: {
    margin: "7px 0 0",
    fontSize: "30px",
    lineHeight: 1.25,
  },

  sectionDescription: {
    maxWidth: "440px",
    margin: 0,
    color: "#667085",
    lineHeight: 1.7,
  },

  popularGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },

  combinedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px",
  },

  combinedCard: {
    display: "block",
    padding: "24px",
    border: "1px solid #c4b5fd",
    borderRadius: "20px",
    background: "linear-gradient(135deg,#ffffff 0%,#f5f3ff 100%)",
    color: "#0f1b34",
    textDecoration: "none",
    boxShadow: "0 12px 35px rgba(109,40,217,.10)",
  },

  combinedBadge: {
    padding: "6px 10px",
    borderRadius: "999px",
    background: "#ede9fe",
    color: "#6d28d9",
    fontSize: "12px",
    fontWeight: 800,
    whiteSpace: "nowrap",
  },

  combinedAction: {
    display: "inline-block",
    marginTop: "18px",
    color: "#6d28d9",
    fontSize: "14px",
    fontWeight: 850,
  },

  popularCard: {
    padding: "22px",
    border: "1px solid #dce5f5",
    borderRadius: "20px",
    background: "#ffffff",
    boxShadow: "0 12px 35px rgba(15, 27, 52, 0.06)",
  },

  popularCardLink: {
  display: "block",
  padding: "22px",
  border: "1px solid #a9c4ff",
  borderRadius: "20px",
  background: "#ffffff",
  boxShadow: "0 12px 35px rgba(37, 99, 235, 0.12)",
  color: "#0f1b34",
  textDecoration: "none",
  cursor: "pointer",
},

availableBadge: {
  padding: "6px 10px",
  borderRadius: "999px",
  background: "#2563eb",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: 800,
  whiteSpace: "nowrap",
},

  cardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  },

  functionName: {
    fontSize: "20px",
    fontWeight: 850,
  },

  comingSoon: {
    padding: "5px 9px",
    borderRadius: "999px",
    background: "#f1f5f9",
    color: "#64748b",
    fontSize: "12px",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },

  cardDescription: {
    margin: "14px 0 0",
    color: "#667085",
    lineHeight: 1.65,
  },

  categoryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
  },

  categoryCard: {
    padding: "26px",
    border: "1px solid #dce5f5",
    borderRadius: "22px",
    background: "rgba(255,255,255,0.94)",
    boxShadow: "0 14px 36px rgba(15, 27, 52, 0.06)",
  },

  categoryIcon: {
    fontSize: "28px",
  },

  categoryTitle: {
    margin: "14px 0 8px",
    fontSize: "22px",
  },

  categoryDescription: {
    margin: 0,
    color: "#667085",
    lineHeight: 1.65,
  },

  tagList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "20px",
  },

  tag: {
    padding: "7px 11px",
    border: "1px solid #d9e4f7",
    borderRadius: "10px",
    background: "#f7faff",
    color: "#2457b7",
    fontSize: "13px",
    fontWeight: 750,
  },

  cta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
    marginTop: "54px",
    padding: "34px",
    borderRadius: "26px",
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
    fontSize: "30px",
  },

  ctaDescription: {
    maxWidth: "650px",
    margin: 0,
    color: "#dbeafe",
    lineHeight: 1.7,
  },

  ctaButton: {
    display: "inline-flex",
    minHeight: "48px",
    padding: "0 22px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "14px",
    background: "#ffffff",
    color: "#1d4ed8",
    fontWeight: 850,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "26px 24px 40px",
    borderTop: "1px solid #e4eaf4",
    color: "#7b8497",
    fontSize: "14px",
    flexWrap: "wrap",
  },

  footerLink: {
    color: "#2563eb",
    fontWeight: 750,
    textDecoration: "none",
  },
};
