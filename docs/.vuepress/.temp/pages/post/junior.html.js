import comp from "C:/Users/Administrator/Documents/Web_FE/The_Adventures_of_Web_Development/vuepress-starter/docs/.vuepress/.temp/pages/post/junior.html.vue"
const data = JSON.parse("{\"path\":\"/post/junior.html\",\"title\":\"入门\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"入门\",\"author\":\"fireworks99\",\"date\":\"2024-08-09\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"post/junior.md\"}")
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
