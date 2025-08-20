import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/algorithm/知识点.html.vue"
const data = JSON.parse("{\"path\":\"/algorithm/%E7%9F%A5%E8%AF%86%E7%82%B9.html\",\"title\":\"知识点\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"知识点\",\"icon\":\"pen-to-square\",\"category\":[\"知识点\"]},\"readingTime\":{\"minutes\":8.57,\"words\":2571},\"filePathRelative\":\"algorithm/知识点.md\",\"excerpt\":\"\"}")
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
