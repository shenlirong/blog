import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/posts/dev_laguage/es6.html.vue"
const data = JSON.parse("{\"path\":\"/posts/dev_laguage/es6.html\",\"title\":\"es6数组解构赋值\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"sticky\":96,\"category\":[\"前端开发\"],\"tag\":[\"es6笔记\",\"前端开发\"]},\"readingTime\":{\"minutes\":3.83,\"words\":1149},\"filePathRelative\":\"posts/dev_laguage/es6.md\",\"excerpt\":\"\"}")
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
