# # EveryFormula

Excel / Google Sheets 公式助手。

EveryFormula 能幫助你快速：

- 建立公式
- 修正公式
- 解釋公式
- 優化公式
- 支援 Excel 與 Google Sheets

## 本機啟動

```bash
npm install
cp .env.example .env.local
# 將 .env.local 裡的 OPENAI_API_KEY 換成你的 API Key
npm run dev
```

開啟：

```text
http://localhost:3000
```

## 部署到 Vercel

1. 建立 GitHub repo
2. 上傳此專案
3. 到 Vercel 匯入 repo
4. Environment Variables 新增：

```text
OPENAI_API_KEY=你的 OpenAI API Key
```

5. Deploy

## MVP 已包含

- 首頁
- 中文需求輸入
- Excel / Google Sheets 選擇
- 產生公式
- 中文解釋
- 使用方式
- 範例
- 複製公式
- 手機版版面

## Android App

Android App 使用 Capacitor 封裝正式 EveryFormula 網站，套件名稱為
`com.orivio.everysheet`。

```bash
npm install
npm run android:sync
npm run android:apk
```

測試 APK 會產生在：

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## 下一版建議

- 每日免費 5 次限制
- Supabase 登入
- 99 元/月訂閱
- 錯誤公式修正
- VBA 產生
- SEO 教學文章
