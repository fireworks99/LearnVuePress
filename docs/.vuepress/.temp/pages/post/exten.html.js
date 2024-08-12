import comp from "C:/Users/Administrator/Documents/Web_FE/The_Adventures_of_Web_Development/vuepress-starter/docs/.vuepress/.temp/pages/post/exten.html.vue"
const data = JSON.parse("{\"path\":\"/post/exten.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"post/exten.md\"}")
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
