import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/project_sum/index.html.vue"
const data = JSON.parse("{\"path\":\"/project_sum/\",\"title\":\"遇到的问题记录\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"遇到的问题记录\",\"icon\":\"laptop-code\",\"sticky\":-1,\"category\":[\"项目\"],\"permalink\":\"/project_sum/\",\"description\":\"此处是 reveal 存放的一些项目中的总结、报错、解决方法等。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"遇到的问题记录\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://shenlirong.github.io/test/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shenlirong.github.io/test/test/project_sum/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"遇到的问题记录\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"此处是 reveal 存放的一些项目中的总结、报错、解决方法等。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.15,\"words\":44},\"filePathRelative\":\"project_sum/README.md\",\"excerpt\":\"<p>此处是 reveal 存放的一些项目中的总结、报错、解决方法等。</p>\\n\",\"autoDesc\":true}")
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
