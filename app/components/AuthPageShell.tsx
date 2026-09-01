import Link from "next/link";

export default function AuthPageShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="account-page auth-page">
      <div className="account-page-header">
        <Link href="/" className="account-brand">EveryFormula</Link>
        <Link href="/" className="back-home">← 返回首頁</Link>
      </div>
      <section className="auth-intro">
        <span>EveryFormula 帳戶</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      <div className="clerk-panel">{children}</div>
    </main>
  );
}
