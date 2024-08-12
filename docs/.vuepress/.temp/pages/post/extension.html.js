import comp from "C:/Users/Administrator/Documents/Web_FE/The_Adventures_of_Web_Development/vuepress-starter/docs/.vuepress/.temp/pages/post/extension.html.vue"
const data = JSON.parse("{\"path\":\"/post/extension.html\",\"title\":\"扩展\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"扩展\",\"author\":\"fireworks99\",\"date\":\"2024-08-09\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"post/extension.md\"}")
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
