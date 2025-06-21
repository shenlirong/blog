import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/code/webpack-vite.html.vue"
const data = JSON.parse("{\"path\":\"/code/webpack-vite.html\",\"title\":\"webpack与vite的区别\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"sticky\":91,\"star\":true,\"category\":[\"前端开发\"]},\"readingTime\":{\"minutes\":1.41,\"words\":423},\"filePathRelative\":\"code/webpack-vite.md\",\"excerpt\":\"\"}")
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
