import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EveryFormula｜公式產生器",
    short_name: "EveryFormula",
    description: "用文字建立、修正、解釋與優化 Excel 和 Google Sheets 公式。",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f7fb",
    theme_color: "#2563eb",
    orientation: "portrait",
    lang: "zh-TW",
    icons: [
      {
        src: "/app-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/app-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
