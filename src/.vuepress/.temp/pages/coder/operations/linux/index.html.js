import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/coder/operations/linux/index.html.vue"
const data = JSON.parse("{\"path\":\"/coder/operations/linux/\",\"title\":\"代码笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"代码笔记\",\"icon\":\"linux\",\"sticky\":-1,\"category\":[\"代码笔记\"],\"permalink\":\"/coder/operations/linux/\"},\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"code/README.md\",\"excerpt\":\"\"}")
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
