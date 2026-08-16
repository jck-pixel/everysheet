import { AppLanguage } from "../i18n";

export type GuideDemo = { title: string; instruction: string; headers: string[]; rows: string[][]; cell: string; formula: string; result: string };

const labels: Record<AppLanguage, { input: string; result: string }> = {
  "zh-TW": { input: "輸入位置", result: "預期結果" }, en: { input: "Enter in", result: "Expected result" },
  ja: { input: "入力セル", result: "結果" }, "zh-CN": { input: "输入位置", result: "预期结果" },
};

export default function GuideExampleTable({ demo, language }: { demo: GuideDemo; language: AppLanguage }) {
  const l = labels[language];
  return <section style={s.card} className="if-guide-card">
    <h2 style={s.title}>{demo.title}</h2><p style={s.text}>{demo.instruction}</p>
    <div style={s.scroll}><table style={s.table}><thead><tr>{demo.headers.map(h => <th key={h} style={s.th}>{h}</th>)}</tr></thead>
      <tbody>{demo.rows.map((row, i) => <tr key={i}>{row.map((value, j) => <td key={j} style={s.td}>{value}</td>)}</tr>)}</tbody></table></div>
    <div style={s.meta}><strong>{l.input}：{demo.cell}</strong><span>{l.result}：<b style={s.result}>{demo.result}</b></span></div>
    <div style={s.formula}>{demo.formula}</div>
  </section>;
}

const s: Record<string, React.CSSProperties> = {
  card: { marginBottom: "22px", padding: "30px", border: "1px solid #9fc4ff", borderRadius: "22px", background: "#fff", boxShadow: "0 14px 40px rgba(37,99,235,.1)" },
  title: { margin: "0 0 12px", fontSize: "28px" }, text: { margin: "0 0 16px", color: "#526078", fontSize: "17px", lineHeight: 1.7 },
  scroll: { overflowX: "auto", margin: "16px 0" }, table: { width: "100%", minWidth: "420px", borderCollapse: "collapse" }, th: { padding: "11px", border: "1px solid #ced9ec", background: "#eaf1ff", textAlign: "center" }, td: { padding: "11px", border: "1px solid #ced9ec", textAlign: "center" },
  meta: { display: "flex", justifyContent: "space-between", gap: "10px", flexWrap: "wrap", padding: "12px 14px", borderRadius: "12px", background: "#f1f6ff", color: "#2457b7" }, result: { color: "#15803d" },
  formula: { marginTop: "16px", padding: "16px 18px", borderRadius: "14px", background: "#101a33", color: "#fff", fontFamily: '"SFMono-Regular",Consolas,monospace', fontSize: "14px", lineHeight: 1.7, overflowX: "auto" },
};
