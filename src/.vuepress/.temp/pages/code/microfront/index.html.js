import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/code/microfront/index.html.vue"
const data = JSON.parse("{\"path\":\"/code/microfront/\",\"title\":\"Micro front-end\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Micro front-end\",\"icon\":\"laptop-code\",\"sticky\":-1,\"category\":[\"microfront\"],\"description\":\"相关信息 此处存放的一些microfront相关，持续更新中。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Micro front-end\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://shenlirong.github.io/test/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shenlirong.github.io/test/blog/code/microfront/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Micro front-end\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"相关信息 此处存放的一些microfront相关，持续更新中。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.1,\"words\":29},\"filePathRelative\":\"code/microfront/README.md\",\"excerpt\":\"<div class=\\\"hint-container info\\\">\\n<p class=\\\"hint-container-title\\\">相关信息</p>\\n<p>此处存放的一些microfront相关，持续更新中。</p>\\n</div>\\n\",\"autoDesc\":true}")
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
