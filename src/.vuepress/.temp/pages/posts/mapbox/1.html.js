import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/posts/mapbox/1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/mapbox/1.html\",\"title\":\"Mapbox API\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-01T00:00:00.000Z\",\"sticky\":98,\"category\":[\"Mapbox\"],\"tag\":[\"Mapbox\",\"前端开发\"]},\"readingTime\":{\"minutes\":6.76,\"words\":2029},\"filePathRelative\":\"posts/mapbox/1.md\",\"excerpt\":\"\"}")
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
