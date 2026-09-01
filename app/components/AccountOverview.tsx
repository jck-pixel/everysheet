"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function AccountOverview() {
  const { user, isLoaded } = useUser();
  const [usage, setUsage] = useState<{ used: number; remaining: number } | null>(null);

  useEffect(() => {
    if (!user) return;
    fetch("/api/usage")
      .then((response) => response.ok ? response.json() : null)
      .then((data) => data && setUsage(data))
      .catch(() => undefined);
  }, [user]);

  if (!isLoaded || !user) {
    return <section className="account-overview-card">正在載入帳戶資訊...</section>;
  }

  const primaryEmail = user.primaryEmailAddress;
  const displayName = user.fullName || user.firstName || "尚未設定名稱";
  const emailVerified = primaryEmail?.verification?.status === "verified";

  return (
    <section className="account-overview-card" aria-label="帳戶摘要">
      <div className="account-overview-item">
        <small>帳戶名稱</small>
        <strong>{displayName}</strong>
      </div>
      <div className="account-overview-item">
        <small>Email</small>
        <strong>{primaryEmail?.emailAddress || "尚未設定"}</strong>
        <span className={emailVerified ? "status-ok" : "status-warn"}>
          {emailVerified ? "✓ 已驗證" : "尚未驗證"}
        </span>
      </div>
      <div className="account-overview-item">
        <small>目前方案</small>
        <strong>免費方案</strong>
        <span>付費方案尚未開放</span>
      </div>
      <div className="account-overview-item">
        <small>使用紀錄</small>
        <strong>{usage ? `本月已使用 ${usage.used} 次` : "正在讀取本月用量"}</strong>
        <span>{usage ? `剩餘 ${usage.remaining} 次／每月 10 次` : "建立、修正、解釋與優化共用額度"}</span>
      </div>
    </section>
  );
}
