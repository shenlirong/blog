import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/zh/timeline/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/timeline/\",\"title\":\"Timeline\",\"lang\":\"en-US\",\"frontmatter\":{\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"title\":\"Timeline\",\"blog\":{\"type\":\"type\",\"key\":\"timeline\"},\"layout\":\"Blog\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Timeline\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shenlirong.github.io/test/test/zh/timeline/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Timeline\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
