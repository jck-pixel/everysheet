import { UserProfile } from "@clerk/nextjs";
import Link from "next/link";
import AccountOverview from "../../components/AccountOverview";

export default function AccountPage() {
  return (
    <main className="account-page">
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
          <h1>管理你的 EveryFormula 帳戶</h1>
          <p>查看帳戶狀態，並修改姓名、Email、密碼、安全設定或刪除帳戶。</p>
        </div>
      </section>

      <AccountOverview />

      <div className="user-profile-wrap">
        <UserProfile path="/account" routing="path" />
      </div>
    </main>
  );
}
