---
title: 入门
author: fireworks99
date: '2024-08-09'
---

# 1.环境准备

1. 需要 `Node.js v18.16.0+`，这里选择了 `Node.js v18.20.4(Long Term Support)`。`nvm install 18.20.4`，下载的时候如果报错可以将代理设为全局试试。
2. `nvm use 18.20.4`
3. 包管理器可选npm、yarn、pnpm，官网举例用的是pnpm，这里便用它。npm install -g pnpm

# 2.创建项目

通过脚手架创建项目（也可以一步步创建，[参考官网](https://vuepress.github.io/zh/guide/getting-started.html#创建项目)）：

`pnpm create vuepress project-name`

这里会有一些选项，其中vite跟webpack之间我选了vite

# 3.运行项目

`pnpm docs:dev`

如果有警告说版本依赖不对，比如`vuepress` 是2.0.0-rc.14的，那么他需要的 `@vuepress/bundler-vite` 也是这一版本号，但是我通过脚手架安装的是2.0.0-rc.7的，那么就安装一遍那个高版本的 `@vuepress/bundler-vite` （一定要注意当前shell脚本所在目录，我第一次就搞错目录了，又删了重新执行的）

# 4.修改配置

VuePress 站点的基本配置文件是 `.vuepress/config.js`

~~~javascript
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'VuePress',
  description: 'VuePress教程',

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
    ]
  }),

  bundler: viteBundler(),
})
~~~

