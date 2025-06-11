import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/posts/Dom/cross-main.html.vue"
const data = JSON.parse("{\"path\":\"/posts/Dom/cross-main.html\",\"title\":\"前端解决跨域的方法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"sticky\":97,\"category\":[\"前端开发\"]},\"readingTime\":{\"minutes\":1.29,\"words\":386},\"filePathRelative\":\"posts/Dom/cross-main.md\",\"excerpt\":\"\"}")
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
