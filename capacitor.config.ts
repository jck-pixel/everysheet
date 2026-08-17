import type { CapacitorConfig } from "@capacitor/cli";

const serverUrl =
  process.env.CAPACITOR_SERVER_URL ??
  "https://ai-excel-assistant-rose.vercel.app";

const config: CapacitorConfig = {
  appId: "com.orivio.everysheet",
  appName: "EveryFormula",
  webDir: "public",
  server: {
    url: serverUrl,
    cleartext: false,
  },
  android: {
    backgroundColor: "#f6f7fb",
  },
};

export default config;
