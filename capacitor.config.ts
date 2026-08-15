import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.orivio.everysheet",
  appName: "EverySheet",
  webDir: "public",
  server: {
    url: "https://ai-excel-assistant-rose.vercel.app",
    cleartext: false,
  },
  android: {
    backgroundColor: "#f6f7fb",
  },
};

export default config;
