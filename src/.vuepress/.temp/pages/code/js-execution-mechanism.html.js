import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/code/js-execution-mechanism.html.vue"
const data = JSON.parse("{\"path\":\"/code/js-execution-mechanism.html\",\"title\":\"js执行机制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"sticky\":70,\"category\":[\"前端技术\"]},\"readingTime\":{\"minutes\":4.56,\"words\":1368},\"filePathRelative\":\"code/js-execution-mechanism.md\",\"excerpt\":\"\"}")
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
