import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/posts/website.html.vue"
const data = JSON.parse("{\"path\":\"/posts/website.html\",\"title\":\"学习网站\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"学习网站\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/test/posts/website.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"学习网站\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.2,\"words\":60},\"filePathRelative\":\"posts/website.md\",\"excerpt\":\"\"}")
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
