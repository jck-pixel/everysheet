import Link from "next/link";
import { AppLanguage } from "../i18n";
import GuideLanguageSelect from "./GuideLanguageSelect";
import GuideExampleTable, { GuideDemo } from "./GuideExampleTable";

type Content = {
  guides: string; formulaTool: string; badge: string; title: string; subtitle: string;
  introTitle: string; intro: string; tags: string[]; syntaxTitle: string; syntaxFormula: string;
  syntaxItems: [string, string][]; examples: { title: string; description: string; formula: string }[];
  tipsTitle: string; tips: [string, string][]; errorsTitle: string; errors: [string, string][];
  ctaTitle: string; ctaText: string; ctaButton: string; back: string;
};

export default function GuideArticleLayout({ language, path, content: c, demo }: { language: AppLanguage; path: string; content: Content; demo?: GuideDemo }) {
  return <main style={s.page} className="if-guide-page">
    <header style={s.header}><div style={s.nav} className="if-guide-nav">
      <Link href={`/?lang=${language}`} style={s.brand}>EverySheet</Link><GuideLanguageSelect language={language} path={path} />
      <div style={s.navLinks} className="if-guide-nav-links"><Link href={`/guides?lang=${language}`} style={s.navLink}>{c.guides}</Link><Link href={`/?lang=${language}`} style={s.primaryNavLink}>{c.formulaTool}</Link></div>
    </div></header>
    <article style={s.article} className="if-guide-article">
      <section style={s.hero} className="if-guide-hero"><div style={s.badge}>{c.badge}</div><h1 style={s.title} className="if-guide-title">{c.title}</h1><p style={s.subtitle} className="if-guide-subtitle">{c.subtitle}</p></section>
      <section style={s.card} className="if-guide-card"><h2 style={s.sectionTitle}>{c.introTitle}</h2><p style={s.paragraph}>{c.intro}</p><div style={s.tagList}>{c.tags.map(tag => <span key={tag} style={s.tag}>{tag}</span>)}</div></section>
      <section style={s.card} className="if-guide-card"><h2 style={s.sectionTitle}>{c.syntaxTitle}</h2><div style={s.formula}>{c.syntaxFormula}</div><div style={s.grid}>{c.syntaxItems.map(([title, detail]) => <div key={title} style={s.gridItem}><strong>{title}</strong><span>{detail}</span></div>)}</div></section>
      {demo && <GuideExampleTable demo={demo} language={language} />}
      {c.examples.map(example => <section key={example.title} style={s.card} className="if-guide-card"><h2 style={s.sectionTitle}>{example.title}</h2><p style={s.paragraph}>{example.description}</p><div style={s.formula}>{example.formula}</div></section>)}
      <section style={s.card} className="if-guide-card"><h2 style={s.sectionTitle}>{c.tipsTitle}</h2><div style={s.grid}>{c.tips.map(([title, detail]) => <div key={title} style={s.gridItem}><strong>{title}</strong><span>{detail}</span></div>)}</div></section>
      <section style={s.card} className="if-guide-card"><h2 style={s.sectionTitle}>{c.errorsTitle}</h2><div style={s.errorList}>{c.errors.map(([title, detail]) => <div key={title} style={s.errorItem}><strong>{title}</strong><p style={s.errorText}>{detail}</p></div>)}</div></section>
      <section style={s.cta} className="if-guide-cta"><div><span style={s.ctaEyebrow}>EverySheet</span><h2 style={s.ctaTitle}>{c.ctaTitle}</h2><p style={s.ctaText}>{c.ctaText}</p></div><Link href={`/?lang=${language}`} style={s.ctaButton}>{c.ctaButton}</Link></section>
      <div style={s.backArea}><Link href={`/guides?lang=${language}`} style={s.backLink}>{c.back}</Link></div>
    </article>
  </main>;
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "linear-gradient(180deg,#edf4ff 0%,#f8faff 42%,#fff 100%)", color: "#0f1b34", fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans TC",sans-serif' },
  header: { borderBottom: "1px solid #dce5f5", background: "rgba(255,255,255,.88)" }, nav: { maxWidth: "1000px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" },
  brand: { color: "#2563eb", fontSize: "20px", fontWeight: 850, textDecoration: "none" }, navLinks: { display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }, navLink: { color: "#526078", fontWeight: 700, textDecoration: "none" }, primaryNavLink: { padding: "10px 15px", borderRadius: "11px", background: "#2563eb", color: "#fff", fontWeight: 800, textDecoration: "none" },
  article: { maxWidth: "900px", margin: "0 auto", padding: "56px 24px 80px" }, hero: { textAlign: "center", marginBottom: "36px" }, badge: { display: "inline-block", padding: "7px 13px", borderRadius: "999px", background: "#e7efff", color: "#1d4ed8", fontSize: "13px", fontWeight: 800 }, title: { margin: "18px 0 14px", fontSize: "clamp(40px,7vw,64px)", lineHeight: 1.08, letterSpacing: "-2px" }, subtitle: { maxWidth: "700px", margin: "0 auto", color: "#667085", fontSize: "20px", lineHeight: 1.75 },
  card: { marginBottom: "22px", padding: "30px", border: "1px solid #dce5f5", borderRadius: "22px", background: "#fff", boxShadow: "0 14px 40px rgba(15,27,52,.06)" }, sectionTitle: { margin: "0 0 16px", fontSize: "28px", lineHeight: 1.3 }, paragraph: { margin: "0 0 18px", color: "#526078", fontSize: "17px", lineHeight: 1.85 },
  tagList: { display: "flex", flexWrap: "wrap", gap: "10px" }, tag: { padding: "9px 12px", borderRadius: "11px", background: "#f1f6ff", color: "#2457b7", fontSize: "14px", fontWeight: 700 }, formula: { margin: "18px 0", padding: "18px 20px", borderRadius: "14px", background: "#101a33", color: "#fff", fontFamily: '"SFMono-Regular",Consolas,monospace', fontSize: "15px", lineHeight: 1.7, overflowX: "auto" }, grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "12px" }, gridItem: { display: "flex", flexDirection: "column", gap: "6px", padding: "15px", borderRadius: "13px", background: "#f7faff", color: "#526078" },
  errorList: { display: "grid", gap: "14px" }, errorItem: { padding: "18px", border: "1px solid #e2e8f0", borderRadius: "15px", background: "#fbfcff" }, errorText: { margin: "8px 0 0", color: "#667085", lineHeight: 1.75 }, cta: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "26px", marginTop: "34px", padding: "32px", borderRadius: "24px", background: "linear-gradient(135deg,#16213d,#1f3a72 58%,#2563eb)", color: "#fff", flexWrap: "wrap" }, ctaEyebrow: { color: "#bfdbfe", fontSize: "13px", fontWeight: 800 }, ctaTitle: { margin: "8px 0 10px", fontSize: "28px" }, ctaText: { maxWidth: "600px", margin: 0, color: "#dbeafe", lineHeight: 1.75 }, ctaButton: { display: "inline-flex", minHeight: "48px", padding: "0 20px", alignItems: "center", justifyContent: "center", borderRadius: "13px", background: "#fff", color: "#1d4ed8", fontWeight: 850, textDecoration: "none" }, backArea: { marginTop: "30px", textAlign: "center" }, backLink: { color: "#2563eb", fontWeight: 750, textDecoration: "none" },
};
