import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '星港遠征',
  description: '遊戲攻略站範例',
  lang: 'zh-TW',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '範例 Boss', link: '/guides/sample-boss' },
      { text: '版本紀錄', link: '/guides/changelog' }
    ],
    sidebar: [
      {
        text: '攻略',
        items: [
          { text: '範例 Boss｜港務長', link: '/guides/sample-boss' },
          { text: '版本紀錄', link: '/guides/changelog' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: '本頁目錄'
    }
  }
})
