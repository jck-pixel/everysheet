import type { Metadata, Viewport } from "next";
import Script from "next/script";
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

  verification: {
    google: "aEZNlmfvaZqCUdw9wbV24asyVdjUbBEh09_GH74dRbs",
  },
  applicationName: "EverySheet",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/app-icon.svg",
    apple: "/app-icon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EverySheet",
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
  );
}
