import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { markdownTabPlugin } from '@vuepress/plugin-markdown-tab'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'VuePress',
  description: 'VuePress教程',
  base: "/LearnVuePress/",
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },

  head: [['link', { rel: 'icon', href: '/img/favicon.png' }]],

  theme: defaultTheme({
    logo: '/img/logo.gif',

    navbar: [
      { text: "首页", link: '/' },
      {
        text: "友链", 
        children: [
          { text: "我的博客", link: "https://fireworks99.github.io/" },
          { text: "我的Github", link: "https://github.com/fireworks99" },
        ]
      }
    ],

    sidebar: [
      "/post/junior",
      "/post/extension",
      "/post/stream"
    ],

  }),

  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          '@docs': path.resolve(__dirname, '../')
        }
      }
    }
  }),
  plugins: [
    searchPlugin({}),
    markdownTabPlugin({
      // 启用代码选项卡
      codeTabs: true,
      // 启用选项卡
      tabs: true,
    }),
  ]
})
