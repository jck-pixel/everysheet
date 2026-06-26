import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EverySheet｜Excel / Google Sheets Copilot",
  description:
    "用中文描述需求，快速建立、修正、解釋、優化 Excel 與 Google Sheets 公式。EverySheet 幫你完成 Excel 工作。",
  keywords: [
    "Excel",
    "Excel公式",
    "Excel公式產生器",
    "Excel AI",
    "Google Sheets",
    "Google Sheets公式",
    "VLOOKUP",
    "XLOOKUP",
    "IF公式",
    "SUMIFS",
    "EverySheet",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
