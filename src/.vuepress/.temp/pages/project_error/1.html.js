import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/project_error/1.html.vue"
const data = JSON.parse("{\"path\":\"/project_error/1.html\",\"title\":\"记一次vite项目无法启动的问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"记一次vite项目无法启动的问题\",\"icon\":\"pen-to-square\"},\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"project_error/1.md\",\"excerpt\":\"\"}")
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
