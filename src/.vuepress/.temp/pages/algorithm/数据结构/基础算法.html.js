import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/algorithm/数据结构/基础算法.html.vue"
const data = JSON.parse("{\"path\":\"/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%9F%BA%E7%A1%80%E7%AE%97%E6%B3%95.html\",\"title\":\"基础算法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"基础算法\",\"icon\":\"pen-to-square\",\"category\":[\"知识点篇\"]},\"readingTime\":{\"minutes\":77.74,\"words\":23322},\"filePathRelative\":\"algorithm/数据结构/基础算法.md\",\"excerpt\":\"\"}")
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
