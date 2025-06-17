import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/code/vue2组件通信方式.html.vue"
const data = JSON.parse("{\"path\":\"/code/vue2%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1%E6%96%B9%E5%BC%8F.html\",\"title\":\"Vue3组件通信方式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"sticky\":94,\"category\":[\"前端开发\"],\"tag\":[\"Vue3组件通信方式\",\"前端开发\"]},\"readingTime\":{\"minutes\":8.14,\"words\":2443},\"filePathRelative\":\"code/vue2组件通信方式.md\",\"excerpt\":\"\"}")
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
