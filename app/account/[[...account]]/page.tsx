"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AccountOverview from "../../components/AccountOverview";
import AppNavigation from "../../components/AppNavigation";
import { deleteLocalAccount, getLocalAccount, isLocalAccountSignedIn, signOutLocalAccount, type LocalAccount } from "../../lib/localAccount";

export default function AccountPage() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const [localAccount, setLocalAccount] = useState<LocalAccount | null>(null);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLocalAccount(isLocalAccountSignedIn() ? getLocalAccount() : null);
  }, []);

  async function handleSignOut() {
    localStorage.removeItem("everyformula-access-choice");
    if (user) await signOut();
    else signOutLocalAccount();
    router.replace("/access");
  }

  async function handleDelete() {
    if (confirmation !== "刪除帳戶") return;
    setDeleting(true);
    setError("");
    try {
      if (user) {
        const response = await fetch("/api/account/delete", { method: "DELETE" });
        if (!response.ok) throw new Error("帳戶刪除失敗，請稍後再試。");
        await signOut();
      } else {
        deleteLocalAccount();
      }
      router.replace("/access");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "帳戶刪除失敗，請稍後再試。");
      setDeleting(false);
    }
  }

  if (!isLoaded) return <main className="account-page"><p>正在載入帳號資訊...</p></main>;

  return (
    <main className="account-page">
      <AppNavigation />
      <div className="account-page-header">
        <span className="account-brand">EveryFormula</span>
      </div>

      <section className="account-summary">
        <div>
          <span>帳戶資訊</span>
          <h1>{user || localAccount ? "管理你的 EveryFormula 帳戶" : "目前使用訪客模式"}</h1>
          <p>{user ? "查看帳戶狀態與安全設定。" : "帳戶、歷史與設定目前保存在這台裝置。"}</p>
        </div>
      </section>

      {user ? (
        <AccountOverview />
      ) : localAccount ? (
        <section className="account-overview-card" aria-label="本機帳戶摘要">
          <div className="account-overview-item"><small>帳戶名稱</small><strong>{localAccount.name}</strong></div>
          <div className="account-overview-item"><small>帳戶類型</small><strong>本機帳戶</strong><span>資料只保存在此裝置</span></div>
          <div className="account-overview-item"><small>目前方案</small><strong>免費方案</strong><span>每月可使用 10 次</span></div>
        </section>
      ) : (
        <section className="settings-card">
          <span className="settings-eyebrow">免費方案</span>
          <h2>每月可使用 10 次</h2>
          <p>你目前以訪客模式使用。建立、修正、解釋與優化共用額度。</p>
          <button className="account-login-button" onClick={() => router.push("/access")}>登入或建立帳戶</button>
        </section>
      )}

      {user || localAccount ? <section className="settings-card account-actions-card">
        <h2>帳戶操作</h2>
        <button className="account-signout" onClick={handleSignOut}>登出</button>
        <button className="account-delete-start" onClick={() => setConfirmingDelete(true)}>刪除帳戶</button>
        {confirmingDelete ? (
          <div className="delete-confirmation">
            <strong>永久刪除帳戶</strong>
            <p>此動作無法復原。請輸入「刪除帳戶」以確認。</p>
            <input value={confirmation} onChange={(event) => setConfirmation(event.target.value)} placeholder="刪除帳戶" />
            <div>
              <button onClick={() => { setConfirmingDelete(false); setConfirmation(""); }}>取消</button>
              <button className="danger-button" onClick={handleDelete} disabled={confirmation !== "刪除帳戶" || deleting}>
                {deleting ? "正在刪除..." : "永久刪除"}
              </button>
            </div>
          </div>
        ) : null}
        {error ? <p className="auth-error">{error}</p> : null}
      </section> : null}
    </main>
  );
}
