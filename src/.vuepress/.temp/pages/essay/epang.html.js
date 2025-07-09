import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/essay/epang.html.vue"
const data = JSON.parse("{\"path\":\"/essay/epang.html\",\"title\":\"阿房宫赋\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"sticky\":80,\"category\":[\"诗词赏析\"],\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"阿房宫赋\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://shenlirong.github.io/test/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shenlirong.github.io/test/blog/essay/epang.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"阿房宫赋\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.08,\"words\":24},\"filePathRelative\":\"essay/epang.md\",\"excerpt\":\"\"}")
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
