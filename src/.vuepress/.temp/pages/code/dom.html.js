import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/code/dom.html.vue"
const data = JSON.parse("{\"path\":\"/code/dom.html\",\"title\":\"浏览器原理、网络协议\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"sticky\":94,\"pageview\":true,\"title\":\"浏览器原理、网络协议\",\"category\":[\"前端开发\"]},\"readingTime\":{\"minutes\":9.7,\"words\":2909},\"filePathRelative\":\"code/dom.md\",\"excerpt\":\"\"}")
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
