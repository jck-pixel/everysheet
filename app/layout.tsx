import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Excel Assistant｜中文 Excel 公式產生器",
  description: "用中文描述需求，自動產生 Excel 與 Google Sheets 公式，並附中文解釋與範例。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
