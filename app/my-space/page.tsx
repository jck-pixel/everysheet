"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useMemo, useState } from "react";
import AppNavigation from "../components/AppNavigation";
import { deleteFormulaHistoryItem, FormulaHistoryItem, FormulaMode, readFormulaHistory } from "../lib/history";

const tabs: Array<["all" | FormulaMode, string]> = [
  ["all", "全部"], ["generate", "建立"], ["fix", "修正"], ["explain", "解釋"], ["optimize", "優化"],
];

const modeNames: Record<FormulaMode, string> = {
  generate: "建立公式", fix: "修正公式", explain: "解釋公式", optimize: "優化公式",
};

export default function MySpacePage() {
  const { user, isLoaded } = useUser();
  const historyOwner = user?.id || "guest";
  const [items, setItems] = useState<FormulaHistoryItem[]>([]);
  const [tab, setTab] = useState<"all" | FormulaMode>("all");
  const filtered = useMemo(() => tab === "all" ? items : items.filter((item) => item.mode === tab), [items, tab]);

  useEffect(() => {
    if (isLoaded) setItems(readFormulaHistory(historyOwner));
  }, [isLoaded, historyOwner]);

  if (!isLoaded) return <main className="account-page"><p>正在載入歷史記錄...</p></main>;

  return (
    <main className="workspace-page">
      <AppNavigation />
      <header className="workspace-header"><span>EveryFormula</span><h1>歷史記錄</h1><p>查看、複製並重新使用過去的公式。記錄目前保存在此裝置。</p></header>
      <div className="history-tabs">
        {tabs.map(([value, label]) => <button className={tab === value ? "active" : ""} key={value} onClick={() => setTab(value)}>{label}</button>)}
      </div>
      {filtered.length === 0 ? (
        <section className="empty-history"><strong>目前沒有記錄</strong><p>成功產生的公式會自動保存在這裡。</p></section>
      ) : (
        <section className="history-list">
          {filtered.map((item) => (
            <article className="history-card" key={item.id}>
              <div className="history-meta"><span>{modeNames[item.mode]}</span><time>{new Date(item.createdAt).toLocaleString("zh-TW")}</time></div>
              <h2>{item.request}</h2>
              <pre>{item.formula}</pre>
              {item.explanation && <p>{item.explanation}</p>}
              <div className="history-actions">
                <button onClick={() => {
                  localStorage.setItem("everyformula-reuse-request", JSON.stringify({ request: item.request, mode: item.mode, tool: item.tool }));
                  window.location.href = "/";
                }}>再次使用</button>
                <button onClick={() => navigator.clipboard.writeText(item.formula)}>複製公式</button>
                <button className="danger" onClick={() => setItems(deleteFormulaHistoryItem(historyOwner, item.id))}>刪除</button>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
