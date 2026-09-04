"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/", icon: "⌂", label: "首頁" },
  { href: "/my-space", icon: "◷", label: "記錄" },
  { href: "/guides", icon: "▤", label: "教學" },
  { href: "/account", icon: "♙", label: "帳號" },
  { href: "/settings", icon: "⚙", label: "設定" },
];

export default function AppNavigation() {
  const pathname = usePathname();

  return (
    <nav className="bottom-navigation" aria-label="主要功能">
      {navigationItems.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link className={active ? "active" : ""} href={item.href} key={item.href} aria-current={active ? "page" : undefined}>
            <span aria-hidden="true">{item.icon}</span>
            <small>{item.label}</small>
          </Link>
        );
      })}
    </nav>
  );
}
