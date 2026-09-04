import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { zhTW } from "@clerk/localizations";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "EveryFormula｜Excel 與 Google Sheets 公式產生器",
  description:
    "用文字描述需求，快速建立、修正、解釋與優化 Excel 和 Google Sheets 公式。EveryFormula 讓公式更容易完成。",
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
    "EveryFormula",
    "公式產生器",
  ],

  verification: {
    google: "aEZNlmfvaZqCUdw9wbV24asyVdjUbBEh09_GH74dRbs",
  },
  applicationName: "EveryFormula｜公式產生器",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/app-icon.svg",
    apple: "/app-icon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EveryFormula",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={zhTW}>
      <html lang="zh-Hant">
        <body>{children}</body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6VL3G3EF4P"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6VL3G3EF4P');
        `}
      </Script>
      </html>
    </ClerkProvider>
  );
}
