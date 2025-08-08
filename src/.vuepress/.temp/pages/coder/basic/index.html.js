import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/coder/basic/index.html.vue"
const data = JSON.parse("{\"path\":\"/coder/basic/\",\"title\":\"什么是微任务、什么是宏任务？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"sticky\":66,\"category\":[\"前端开发\"],\"permalink\":\"/coder/basic/\"},\"readingTime\":{\"minutes\":15.31,\"words\":4594},\"filePathRelative\":\"code/microtasks-macrotasks.md\",\"excerpt\":\"\"}")
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
