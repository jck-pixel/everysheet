"use client";

import { useUser } from "@clerk/nextjs";

export default function AccountOverview() {
  const { user, isLoaded } = useUser();

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
        <strong>尚未啟用計次</strong>
        <span>收費方案啟用後會在這裡顯示</span>
      </div>
    </section>
  );
}
