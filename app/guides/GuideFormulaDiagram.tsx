import { AppLanguage } from "../i18n";

const labels: Record<AppLanguage, { title: string; need: string; formula: string; result: string; auto: string; row: string }> = {
  "zh-TW": { title: "Excel 操作示意圖", need: "需求／原始資料", formula: "公式輸入", result: "計算結果", auto: "Excel 自動顯示結果", row: "公式列" },
  en: { title: "Excel example diagram", need: "Task / source data", formula: "Formula entry", result: "Calculated result", auto: "Excel displays the result", row: "Formula row" },
  ja: { title: "Excel 操作イメージ", need: "目的／元データ", formula: "数式入力", result: "計算結果", auto: "Excel が結果を表示", row: "数式行" },
  "zh-CN": { title: "Excel 操作示意图", need: "需求／原始数据", formula: "公式输入", result: "计算结果", auto: "Excel 自动显示结果", row: "公式行" },
};

export default function GuideFormulaDiagram({ language, description, formula }: { language: AppLanguage; description: string; formula: string }) {
  const l = labels[language];
  return <div style={s.wrap} aria-label={l.title}>
    <div style={s.caption}>{l.title}</div>
    <div style={s.formulaBar}><span style={s.fx}>fx</span><code style={s.code}>{formula}</code></div>
    <div style={s.scroll}>
      <div style={s.sheet}>
        <div style={s.corner}></div><div style={s.column}>A</div><div style={s.column}>B</div><div style={s.column}>C</div>
        <div style={s.rowNumber}>1</div><div style={s.headerCell}>{l.need}</div><div style={s.headerCell}>{l.formula}</div><div style={s.headerCell}>{l.result}</div>
        <div style={s.rowNumber}>2</div><div style={s.cell}>{description}</div><div style={s.formulaCell}>{formula}</div><div style={s.resultCell}>{l.auto}</div>
      </div>
    </div>
    <div style={s.meta}><span>{l.row}：B2</span><span style={s.flow}>{l.need} → {l.formula} → {l.result}</span></div>
  </div>;
}

const s: Record<string, React.CSSProperties> = {
  wrap: { marginTop: "20px", border: "1px solid #b9ccec", borderRadius: "16px", overflow: "hidden", background: "#fff", boxShadow: "0 10px 26px rgba(37,99,235,.08)" },
  caption: { padding: "11px 14px", background: "#eaf1ff", color: "#2457b7", fontSize: "13px", fontWeight: 850 },
  formulaBar: { display: "flex", alignItems: "center", gap: "10px", minHeight: "46px", padding: "8px 12px", borderTop: "1px solid #d6e0f0", borderBottom: "1px solid #d6e0f0", background: "#f8fbff" },
  fx: { color: "#15803d", fontFamily: "Georgia,serif", fontSize: "18px", fontStyle: "italic", fontWeight: 800 },
  code: { color: "#0f1b34", fontFamily: '"SFMono-Regular",Consolas,monospace', fontSize: "13px", overflowWrap: "anywhere" },
  scroll: { overflowX: "auto" },
  sheet: { display: "grid", gridTemplateColumns: "42px minmax(210px,1.2fr) minmax(250px,1.4fr) minmax(160px,.9fr)", minWidth: "700px" },
  corner: { minHeight: "34px", borderRight: "1px solid #cbd5e1", borderBottom: "1px solid #cbd5e1", background: "#e8edf4" },
  column: { display: "flex", alignItems: "center", justifyContent: "center", minHeight: "34px", borderRight: "1px solid #cbd5e1", borderBottom: "1px solid #cbd5e1", background: "#e8edf4", color: "#475569", fontSize: "12px", fontWeight: 800 },
  rowNumber: { display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 4px", borderRight: "1px solid #cbd5e1", borderBottom: "1px solid #cbd5e1", background: "#eef2f7", color: "#64748b", fontSize: "12px", fontWeight: 700 },
  headerCell: { padding: "11px", borderRight: "1px solid #cbd5e1", borderBottom: "1px solid #cbd5e1", background: "#dbeafe", color: "#1e3a8a", fontSize: "13px", fontWeight: 850 },
  cell: { padding: "12px", borderRight: "1px solid #cbd5e1", borderBottom: "1px solid #cbd5e1", color: "#475569", fontSize: "13px", lineHeight: 1.6 },
  formulaCell: { padding: "12px", borderRight: "2px solid #2563eb", borderBottom: "2px solid #2563eb", background: "#eff6ff", color: "#0f1b34", fontFamily: '"SFMono-Regular",Consolas,monospace', fontSize: "12px", lineHeight: 1.6, overflowWrap: "anywhere" },
  resultCell: { padding: "12px", borderRight: "1px solid #cbd5e1", borderBottom: "1px solid #cbd5e1", background: "#f0fdf4", color: "#15803d", fontSize: "13px", fontWeight: 800 },
  meta: { display: "flex", justifyContent: "space-between", gap: "8px", flexWrap: "wrap", padding: "10px 13px", color: "#526078", fontSize: "12px" },
  flow: { color: "#2457b7", fontWeight: 750 },
};
