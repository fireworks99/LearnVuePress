export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Code/LearnVuePress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello,VuePress!"} }],
  ["/post/extension.html", { loader: () => import(/* webpackChunkName: "post_extension.html" */"D:/Code/LearnVuePress/docs/.vuepress/.temp/pages/post/extension.html.js"), meta: {"title":"扩展"} }],
  ["/post/junior.html", { loader: () => import(/* webpackChunkName: "post_junior.html" */"D:/Code/LearnVuePress/docs/.vuepress/.temp/pages/post/junior.html.js"), meta: {"title":"入门"} }],
  ["/post/stream.html", { loader: () => import(/* webpackChunkName: "post_stream.html" */"D:/Code/LearnVuePress/docs/.vuepress/.temp/pages/post/stream.html.js"), meta: {"title":"多叉树数据流动图"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Code/LearnVuePress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
