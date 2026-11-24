import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '遊戲攻略',
  description: '多款遊戲的攻略目錄',
  lang: 'zh-TW',
  themeConfig: {
    skipToContentLabel: '跳至內容',
    darkModeSwitchLabel: '外觀',
    lightModeSwitchTitle: '切換為淺色',
    darkModeSwitchTitle: '切換為深色',
    sidebarMenuLabel: '目錄',
    returnToTopLabel: '回到頂端',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      label: '本頁目錄'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜尋',
            buttonAriaLabel: '搜尋攻略'
          },
          modal: {
            noResultsText: '找不到相關攻略',
            resetButtonTitle: '清除',
            footer: {
              selectText: '選擇',
              navigateText: '切換',
              closeText: '關閉'
            }
          }
        }
      }
    },
    sidebar: [
      {
        text: '全部遊戲',
        link: '/'
      },
      {
        text: '刺客養成',
        collapsed: false,
        items: [
          { text: '目錄', link: '/games/assassin/' },
          { text: '武器覺醒順序', link: '/games/assassin/awaken' },
          { text: '轉職', link: '/games/assassin/job' },
          { text: '技能點法', link: '/games/assassin/skills' },
          { text: '養成優先順序', link: '/games/assassin/growth' },
          { text: '版本紀錄', link: '/games/assassin/changelog' }
        ]
      }
    ]
  }
})
