import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/project_sum/index.html.vue"
const data = JSON.parse("{\"path\":\"/project_sum/\",\"title\":\"问题溯源与解决日志\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"问题溯源与解决日志\",\"icon\":\"laptop-code\",\"sticky\":-1,\"category\":[\"问题溯源与解决日志\"],\"permalink\":\"/project_sum/\"},\"readingTime\":{\"minutes\":0.18,\"words\":53},\"filePathRelative\":\"project_sum/README.md\",\"excerpt\":\"\"}")
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
