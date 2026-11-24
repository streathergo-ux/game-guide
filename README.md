# 星港遠征攻略站範例

用 VitePress 寫的靜態攻略站。把「星港遠征」和範例 Boss 換成你的遊戲即可。

## 本機預覽

```bash
npm install
npm run dev
```

## 建置

```bash
npm run build
```

產出在 `.vitepress/dist`。

## Cloudflare Pages

連到這個 GitHub repo 後，建置設定用：

| 項目 | 值 |
| --- | --- |
| Production branch | `main` |
| Build command | `npx vitepress build` |
| Build output directory | `.vitepress/dist` |
