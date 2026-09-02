"use client";

import { useSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AccessPage() {
  const router = useRouter();
  const { user, isLoaded: userLoaded } = useUser();
  const { signIn, isLoaded: signInLoaded } = useSignIn();
  const [error, setError] = useState("");

  useEffect(() => {
    if (userLoaded && user) {
      localStorage.setItem("everyformula-access-choice", "account");
      router.replace("/");
    }
  }, [router, user, userLoaded]);

  async function continueWithGoogle() {
    if (!signInLoaded || !signIn) return;
    setError("");
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "目前無法連接 Google 帳號，請稍後再試。");
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
        <p>登入帳號可保存使用記錄，並在不同裝置繼續使用。</p>
        <button className="google-access" onClick={continueWithGoogle} disabled={!signInLoaded}>
          <b>G</b> 使用 Google 帳號
        </button>
        <div className="access-divider"><span>或</span></div>
        <button className="guest-access" onClick={continueAsGuest}>以訪客模式繼續</button>
        <div className="guest-explanation">
          <strong>訪客模式</strong>
          <p>不用註冊即可立即使用；歷史記錄與設定只保存在這台裝置。移除 App 或清除資料後將無法復原。</p>
        </div>
        {error && <p className="auth-error">{error}</p>}
        <button className="back-onboarding" onClick={() => router.push("/onboarding")}>← 返回使用介紹</button>
      </section>
    </main>
  );
}
