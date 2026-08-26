import type { CapacitorConfig } from "@capacitor/cli";

const serverUrl =
  process.env.CAPACITOR_SERVER_URL ??
  "https://everyformula-jck-pixel11.vercel.app";

const config: CapacitorConfig = {
  appId: "com.everyformula.app",
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
