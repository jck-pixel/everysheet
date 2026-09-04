"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createLocalAccount, getLocalAccount, signInLocalAccount } from "../lib/localAccount";

export default function AccessPage() {
  const router = useRouter();
  const { user, isLoaded: userLoaded } = useUser();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [hasLocalAccount, setHasLocalAccount] = useState(false);
  const [working, setWorking] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (userLoaded && user) {
      localStorage.setItem("everyformula-access-choice", "account");
      router.replace("/");
    }
  }, [router, user, userLoaded]);

  useEffect(() => {
    const account = getLocalAccount();
    setHasLocalAccount(Boolean(account));
    if (account) setName(account.name);
  }, []);

  async function submitLocalAccount() {
    setError("");
    if (name.trim().length < 2) {
      setError("名稱至少需要 2 個字元。");
      return;
    }
    if (password.length < 6) {
      setError("密碼至少需要 6 個字元。");
      return;
    }
    setWorking(true);
    try {
      if (hasLocalAccount) {
        const success = await signInLocalAccount(name, password);
        if (!success) throw new Error("名稱或密碼不正確。");
      } else {
        await createLocalAccount(name, password);
      }
      router.replace("/");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "目前無法建立本機帳戶，請稍後再試。");
    } finally {
      setWorking(false);
    }
  }

  function continueAsGuest() {
    localStorage.setItem("everyformula-access-choice", "guest");
    router.replace("/");
  }

  return (
    <main className="access-page">
      <section className="access-card">
        <div className="access-brand"><span>Σ=</span> EveryFormula</div>
        <h1>選擇使用方式</h1>
        <p>{hasLocalAccount ? "輸入名稱與密碼繼續使用。" : "建立只保存在這台手機的本機帳戶。"}</p>
        <label className="access-field">
          <span>名稱</span>
          <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="username" />
        </label>
        <label className="access-field">
          <span>密碼</span>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete={hasLocalAccount ? "current-password" : "new-password"} />
        </label>
        <button className="google-access" onClick={submitLocalAccount} disabled={working}>
          {working ? "處理中..." : hasLocalAccount ? "登入本機帳戶" : "建立本機帳戶"}
        </button>
        <div className="access-divider"><span>或</span></div>
        <button className="guest-access" onClick={continueAsGuest}>以訪客模式繼續</button>
        <div className="guest-explanation">
          <strong>訪客模式</strong>
          <p>不用建立帳戶即可立即使用。無論本機帳戶或訪客模式，資料目前都只保存在這台手機。</p>
        </div>
        {error && <p className="auth-error">{error}</p>}
        <button className="back-onboarding" onClick={() => router.push("/onboarding")}>← 返回使用介紹</button>
      </section>
    </main>
  );
}
