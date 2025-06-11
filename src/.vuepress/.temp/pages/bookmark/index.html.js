import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/bookmark/index.html.vue"
const data = JSON.parse("{\"path\":\"/bookmark/\",\"title\":\"reveal随笔\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"reveal随笔\",\"icon\":\"laptop-code\",\"sticky\":-1,\"category\":[\"reveal随笔\"],\"permalink\":\"/bookmark/\"},\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"essay/README.md\",\"excerpt\":\"\"}")
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
