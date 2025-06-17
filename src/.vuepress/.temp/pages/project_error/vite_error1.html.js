import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/project_error/vite_error1.html.vue"
const data = JSON.parse("{\"path\":\"/project_error/vite_error1.html\",\"title\":\"记一次vite项目无法启动的问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"记一次vite项目无法启动的问题\",\"icon\":\"pen-to-square\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"记一次vite项目无法启动的问题\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/test/project_error/vite_error1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"记一次vite项目无法启动的问题\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"project_error/vite_error1.md\",\"excerpt\":\"\"}")
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
