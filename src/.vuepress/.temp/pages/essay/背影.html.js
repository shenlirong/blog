import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/essay/背影.html.vue"
const data = JSON.parse("{\"path\":\"/essay/%E8%83%8C%E5%BD%B1.html\",\"title\":\"背影\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"背影\"},\"readingTime\":{\"minutes\":0.01,\"words\":2},\"filePathRelative\":\"essay/背影.md\",\"excerpt\":\"\\n\",\"autoDesc\":true}")
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
