"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function AccountMenu() {
  return (
    <div className="account-menu" aria-label="帳戶選單">
      <SignedOut>
        <Link className="account-text-link" href="/sign-in">登入</Link>
        <Link className="account-primary-link" href="/sign-up">註冊</Link>
      </SignedOut>

      <SignedIn>
        <Link className="account-text-link" href="/settings">設定</Link>
        <Link className="account-text-link account-desktop-only" href="/account">帳戶</Link>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}
