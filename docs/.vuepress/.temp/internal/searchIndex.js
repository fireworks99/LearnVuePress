export const SEARCH_INDEX = [
  {
    "title": "Hello,VuePress!",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "扩展",
    "headers": [
      {
        "level": 2,
        "title": "1.使用Vue",
        "slug": "_1-使用vue",
        "link": "#_1-使用vue",
        "children": []
      },
      {
        "level": 2,
        "title": "2.修改样式",
        "slug": "_2-修改样式",
        "link": "#_2-修改样式",
        "children": []
      },
      {
        "level": 2,
        "title": "3.其他",
        "slug": "_3-其他",
        "link": "#_3-其他",
        "children": []
      }
    ],
    "path": "/post/extension.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "入门",
    "headers": [
      {
        "level": 2,
        "title": "1.环境准备",
        "slug": "_1-环境准备",
        "link": "#_1-环境准备",
        "children": []
      },
      {
        "level": 2,
        "title": "2.创建项目",
        "slug": "_2-创建项目",
        "link": "#_2-创建项目",
        "children": []
      },
      {
        "level": 2,
        "title": "3.运行项目",
        "slug": "_3-运行项目",
        "link": "#_3-运行项目",
        "children": []
      },
      {
        "level": 2,
        "title": "4.修改配置",
        "slug": "_4-修改配置",
        "link": "#_4-修改配置",
        "children": []
      },
      {
        "level": 2,
        "title": "5.生成Token",
        "slug": "_5-生成token",
        "link": "#_5-生成token",
        "children": []
      },
      {
        "level": 2,
        "title": "6.设置Secrets",
        "slug": "_6-设置secrets",
        "link": "#_6-设置secrets",
        "children": []
      },
      {
        "level": 2,
        "title": "7.提交代码",
        "slug": "_7-提交代码",
        "link": "#_7-提交代码",
        "children": []
      },
      {
        "level": 2,
        "title": "8.配置Github Pages",
        "slug": "_8-配置github-pages",
        "link": "#_8-配置github-pages",
        "children": []
      },
      {
        "level": 2,
        "title": "补充说明",
        "slug": "补充说明",
        "link": "#补充说明",
        "children": []
      }
    ],
    "path": "/post/junior.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "多叉树数据流动图",
    "headers": [
      {
        "level": 2,
        "title": "1.效果",
        "slug": "_1-效果",
        "link": "#_1-效果",
        "children": []
      },
      {
        "level": 2,
        "title": "2.数据",
        "slug": "_2-数据",
        "link": "#_2-数据",
        "children": []
      },
      {
        "level": 2,
        "title": "3.代码",
        "slug": "_3-代码",
        "link": "#_3-代码",
        "children": []
      }
    ],
    "path": "/post/stream.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
