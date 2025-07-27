import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/code/geniric.html.vue"
const data = JSON.parse("{\"path\":\"/code/geniric.html\",\"title\":\"泛型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"sticky\":94,\"star\":true,\"category\":[\"前端开发\"]},\"readingTime\":{\"minutes\":6.05,\"words\":1816},\"filePathRelative\":\"code/geniric.md\",\"excerpt\":\"\"}")
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
