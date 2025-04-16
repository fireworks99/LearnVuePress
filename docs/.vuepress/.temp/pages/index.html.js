import comp from "C:/Users/Administrator/Documents/Web_FE/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Hello,VuePress!\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1723432109000,\"contributors\":[{\"name\":\"fireworks99\",\"username\":\"fireworks99\",\"email\":\"46671672+fireworks99@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/fireworks99\"}],\"changelog\":[{\"hash\":\"c2fd7cf2ebaf081ededc0d802d502bf10309538a\",\"time\":1723432109000,\"email\":\"46671672+fireworks99@users.noreply.github.com\",\"author\":\"fireworks99\",\"message\":\"Generate toc\"},{\"hash\":\"29df62011d8a95902e86286f9cb7434bc72350e3\",\"time\":1723424194000,\"email\":\"46671672+fireworks99@users.noreply.github.com\",\"author\":\"fireworks99\",\"message\":\"First upload\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
