import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({

  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: 'Lezi-Wiki',
  description: '不太聪明的驿站 乐子记录之路',
  head,

  ignoreDeadLinks: true,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: [1, 6],
      label: '本页目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/postyizhan/lezi-wiki' }],

    footer: {
      message: 'https://github.com/postyizhan/lezi-wiki',
      copyright: 'Copyright © 2019-present maomao',
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    visitor: {
      badgeId: 'postyizhan.lezi-wiki',
    },

    comment: {
      repo: 'postyizhan/lezi-wiki',
      repoId: 'R_kgDOLJVBFA',
      category: 'comment',
      categoryId: 'DIC_kwDOLJVBFM4CerHO',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
