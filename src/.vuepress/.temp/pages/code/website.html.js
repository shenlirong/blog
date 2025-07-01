import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/code/website.html.vue"
const data = JSON.parse("{\"path\":\"/code/website.html\",\"title\":\"学习网站\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\"},\"readingTime\":{\"minutes\":0.33,\"words\":99},\"filePathRelative\":\"code/website.md\",\"excerpt\":\"\"}")
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
