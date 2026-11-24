import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '刺客養成',
  description: '刺客養成攻略',
  lang: 'zh-TW',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '轉職', link: '/guides/job' },
      { text: '技能', link: '/guides/skills' },
      { text: '養成', link: '/guides/growth' }
    ],
    sidebar: [
      {
        text: '刺客養成',
        items: [
          { text: '轉職', link: '/guides/job' },
          { text: '技能點法', link: '/guides/skills' },
          { text: '養成優先順序', link: '/guides/growth' },
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
