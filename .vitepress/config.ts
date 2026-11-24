import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '遊戲攻略',
  description: '多款遊戲的攻略目錄',
  lang: 'zh-TW',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '刺客養成', link: '/games/assassin/' }
    ],
    sidebar: {
      '/games/assassin/': [
        {
          text: '刺客養成',
          items: [
            { text: '這款遊戲', link: '/games/assassin/' },
            { text: '轉職', link: '/games/assassin/job' },
            { text: '技能點法', link: '/games/assassin/skills' },
            { text: '養成優先順序', link: '/games/assassin/growth' },
            { text: '版本紀錄', link: '/games/assassin/changelog' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    outline: {
      label: '本頁目錄'
    }
  }
})
