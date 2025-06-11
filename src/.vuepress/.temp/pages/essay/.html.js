import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/essay/.html.vue"
const data = JSON.parse("{\"path\":\"/essay/.html\",\"title\":\"背影\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"背影\"},\"readingTime\":{\"minutes\":4.61,\"words\":1384},\"filePathRelative\":\"essay/.md\",\"excerpt\":\"\"}")
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
