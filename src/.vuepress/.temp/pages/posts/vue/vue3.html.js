import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/posts/vue/vue3.html.vue"
const data = JSON.parse("{\"path\":\"/posts/vue/vue3.html\",\"title\":\"vue3\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"vue3\",\"icon\":\"pen-to-square\",\"order\":1,\"sticky\":100,\"category\":[\"前端开发\"],\"tag\":[\"Vue3\",\"前端开发\"],\"description\":\"Vue3笔记\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"vue3\\\",\\\"image\\\":[\\\"http://49.232.112.44/images/default_slot.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/test/posts/vue/vue3.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"vue3\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Vue3笔记\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"http://49.232.112.44/images/default_slot.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端开发\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Vue3\"}]]},\"readingTime\":{\"minutes\":40.87,\"words\":12260},\"filePathRelative\":\"posts/vue/vue3.md\",\"excerpt\":\"<p>Vue3笔记</p>\\n\",\"autoDesc\":true}")
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
