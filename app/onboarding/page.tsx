"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "把需求說出來，公式交給我們",
    body: "不需要先知道函數名稱，只要描述你想完成的事情。",
    content: (
      <div className="onboarding-example">
        <div>超過 8 小時算加班費</div>
        <span>↓</span>
        <code>=IF(A2&gt;8,(A2-8)*B2,0)</code>
      </div>
    ),
  },
  {
    title: "四種工具，一個入口",
    body: "",
    content: (
      <div className="onboarding-tools">
        <div><span>✨</span><p><strong>建立公式</strong><small>描述需求，自動產生公式</small></p></div>
        <div><span>🛠️</span><p><strong>修正公式</strong><small>貼上錯誤公式，找出問題</small></p></div>
        <div><span>📖</span><p><strong>解釋公式</strong><small>把複雜公式翻成白話</small></p></div>
        <div><span>⚡</span><p><strong>優化公式</strong><small>讓公式更簡潔好維護</small></p></div>
      </div>
    ),
  },
  {
    title: "三步完成",
    body: "",
    content: (
      <div className="onboarding-steps">
        <div><b>1</b><span>輸入需求或貼上公式</span></div>
        <div><b>2</b><span>選擇建立、修正、解釋或優化</span></div>
        <div><b>3</b><span>複製結果到 Excel 或 Google Sheets</span></div>
        <p>🎁 免費方案每月可使用 10 次</p>
      </div>
    ),
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [review, setReview] = useState(false);

  useEffect(() => setReview(new URLSearchParams(window.location.search).get("review") === "1"), []);

  function finish() {
    localStorage.setItem("everyformula-onboarding-complete", "1");
    router.replace(review ? "/" : "/access");
  }

  return (
    <main className="onboarding-page">
      <section className="onboarding-card">
        <div className="onboarding-brand"><span>ƒx</span> EveryFormula</div>
        <h1>{slides[step].title}</h1>
        {slides[step].body && <p className="onboarding-body">{slides[step].body}</p>}
        {slides[step].content}
        <div className="onboarding-dots" aria-label={`第 ${step + 1} 頁，共 3 頁`}>
          {slides.map((_, index) => <span className={index === step ? "active" : ""} key={index} />)}
        </div>
        <button className="onboarding-next" onClick={() => step < 2 ? setStep(step + 1) : finish()}>
          {step < 2 ? "下一步" : "開始使用"}
        </button>
        <button className="onboarding-skip" onClick={finish}>{review ? "返回公式工具" : "略過介紹"}</button>
      </section>
    </main>
  );
}
