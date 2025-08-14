import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/algorithm/array.html.vue"
const data = JSON.parse("{\"path\":\"/algorithm/array.html\",\"title\":\"数组相关\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"数组相关\",\"icon\":\"pen-to-square\",\"category\":[\"基础算法\"]},\"readingTime\":{\"minutes\":5.05,\"words\":1514},\"filePathRelative\":\"algorithm/array.md\",\"excerpt\":\"\"}")
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
