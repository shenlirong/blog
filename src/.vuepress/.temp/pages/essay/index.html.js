import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/essay/index.html.vue"
const data = JSON.parse("{\"path\":\"/essay/\",\"title\":\"reveal随笔\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"reveal随笔\",\"icon\":\"book-open\",\"sticky\":-1,\"category\":[\"reveal随笔\"],\"permalink\":\"/essay/\",\"description\":\"此处是 reveal 存放的一些随笔，散文、诗歌、感想等，持续更新中.....。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"reveal随笔\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://shenlirong.github.io/test/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shenlirong.github.io/test/blog/essay/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"reveal随笔\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"此处是 reveal 存放的一些随笔，散文、诗歌、感想等，持续更新中.....。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.14,\"words\":43},\"filePathRelative\":\"essay/README.md\",\"excerpt\":\"<p>此处是 reveal 存放的一些随笔，散文、诗歌、感想等，持续更新中.....。</p>\\n\",\"autoDesc\":true}")
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
