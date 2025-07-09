import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"介绍页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"circle-info\",\"description\":\"介绍页 有时候人存在的意义，更多是觉醒和思考，而不仅仅是生存。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"介绍页\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://shenlirong.github.io/test/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shenlirong.github.io/test/blog/intro.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"介绍页\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"介绍页 有时候人存在的意义，更多是觉醒和思考，而不仅仅是生存。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.11,\"words\":32},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<p>有时候人存在的意义，更多是觉醒和思考，而不仅仅是生存。</p>\\n\",\"autoDesc\":true}")
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
