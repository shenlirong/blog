import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/demo/layout.html.vue"
const data = JSON.parse("{\"path\":\"/demo/layout.html\",\"title\":\"布局\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"布局\",\"icon\":\"object-group\",\"order\":2,\"sticky\":-4,\"category\":[\"指南\"],\"tag\":[\"布局\"]},\"readingTime\":{\"minutes\":0.54,\"words\":162},\"filePathRelative\":\"demo/layout.md\",\"excerpt\":\"\"}")
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
