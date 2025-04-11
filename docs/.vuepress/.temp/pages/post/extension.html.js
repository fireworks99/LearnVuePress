import comp from "C:/Users/Administrator/Documents/Web_FE/VuePress/vuepress-starter/docs/.vuepress/.temp/pages/post/extension.html.vue"
const data = JSON.parse("{\"path\":\"/post/extension.html\",\"title\":\"扩展\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"扩展\",\"lang\":\"zh-CN\",\"author\":\"fireworks99\",\"date\":\"2024-08-09\"},\"headers\":[{\"level\":2,\"title\":\"1.使用Vue\",\"slug\":\"_1-使用vue\",\"link\":\"#_1-使用vue\",\"children\":[]},{\"level\":2,\"title\":\"2.修改样式\",\"slug\":\"_2-修改样式\",\"link\":\"#_2-修改样式\",\"children\":[]},{\"level\":2,\"title\":\"3.其他\",\"slug\":\"_3-其他\",\"link\":\"#_3-其他\",\"children\":[]}],\"git\":{\"updatedTime\":1723444861000,\"contributors\":[{\"name\":\"fireworks99\",\"email\":\"46671672+fireworks99@users.noreply.github.com\",\"commits\":8}]},\"filePathRelative\":\"post/extension.md\"}")
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
