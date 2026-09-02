"use client";

import { UserProfile, useUser } from "@clerk/nextjs";
import Link from "next/link";
import AccountOverview from "../../components/AccountOverview";
import AppNavigation from "../../components/AppNavigation";

export default function AccountPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <main className="account-page"><p>正在載入帳號資訊...</p></main>;

  return (
    <main className="account-page">
      <AppNavigation />
      <div className="account-page-header">
        <Link href="/" className="account-brand">EveryFormula</Link>
        <div className="account-header-links">
          <Link href="/settings">使用設定</Link>
          <Link href="/">返回公式產生器</Link>
        </div>
      </div>

      <section className="account-summary">
        <div>
          <span>帳戶資訊</span>
          <h1>{user ? "管理你的 EveryFormula 帳戶" : "目前使用訪客模式"}</h1>
          <p>{user ? "查看帳戶狀態與安全設定。" : "不必註冊即可使用；歷史與設定目前保存在這台裝置。"}</p>
        </div>
      </section>

      {user ? (
        <>
          <AccountOverview />
          <div className="user-profile-wrap"><UserProfile path="/account" routing="path" /></div>
        </>
      ) : (
        <section className="settings-card">
          <span className="settings-eyebrow">免費方案</span>
          <h2>每月可使用 10 次</h2>
          <p>建立、修正、解釋與優化共用額度。Google 帳號連結會在訂閱與跨裝置同步功能推出時提供。</p>
        </section>
      )}
    </main>
  );
}
