import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

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
      "/post/extension"
    ],

  }),

  bundler: viteBundler(),
})
