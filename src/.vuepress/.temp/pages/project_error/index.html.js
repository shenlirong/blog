import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/project_error/index.html.vue"
const data = JSON.parse("{\"path\":\"/project_error/\",\"title\":\"项目总结\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"项目总结\",\"icon\":\"laptop-code\",\"sticky\":-1,\"category\":[\"项目\"],\"permalink\":\"/project_error/\",\"description\":\"此处是 reveal 存放的一些项目中遇到的报错、解决方法等。\"},\"readingTime\":{\"minutes\":0.14,\"words\":41},\"filePathRelative\":\"project_sum/README.md\",\"excerpt\":\"<p>此处是 reveal 存放的一些项目中遇到的报错、解决方法等。</p>\\n\",\"autoDesc\":true}")
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
