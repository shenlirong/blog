import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/website/website.html.vue"
const data = JSON.parse("{\"path\":\"/website/website.html\",\"title\":\"前端开发\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\"},\"readingTime\":{\"minutes\":0.38,\"words\":115},\"filePathRelative\":\"website/website.md\",\"excerpt\":\"\"}")
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
