import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/posts/dev_laguage/1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/dev_laguage/1.html\",\"title\":\"TypeScript 介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-01T00:00:00.000Z\",\"sticky\":99},\"readingTime\":{\"minutes\":2.44,\"words\":733},\"filePathRelative\":\"posts/dev_laguage/1.md\",\"excerpt\":\"\"}")
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
