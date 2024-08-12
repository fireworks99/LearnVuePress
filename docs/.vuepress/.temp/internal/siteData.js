export const siteData = JSON.parse("{\"base\":\"/LearnVuePress/\",\"lang\":\"zh-CN\",\"title\":\"VuePress\",\"description\":\"VuePress教程\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/img/favicon.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
