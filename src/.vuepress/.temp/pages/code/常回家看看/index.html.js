import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/code/常回家看看/index.html.vue"
const data = JSON.parse("{\"path\":\"/code/%E5%B8%B8%E5%9B%9E%E5%AE%B6%E7%9C%8B%E7%9C%8B/\",\"title\":\"vwew\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"vwew\",\"order\":-100,\"category\":[\"代码笔记\"]},\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"code/常回家看看/README.md\",\"excerpt\":\"\"}")
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
