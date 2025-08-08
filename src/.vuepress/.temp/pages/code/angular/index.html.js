import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/code/angular/index.html.vue"
const data = JSON.parse("{\"path\":\"/code/angular/\",\"title\":\"angular\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"angular\",\"icon\":\"laptop-code\",\"sticky\":-1,\"category\":[\"angular\"],\"description\":\"相关信息 此处存放的一些angular相关，持续更新中。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"angular\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://shenlirong.github.io/test/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shenlirong.github.io/test/blog/code/angular/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"angular\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"相关信息 此处存放的一些angular相关，持续更新中。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.09,\"words\":27},\"filePathRelative\":\"code/angular/README.md\",\"excerpt\":\"<div class=\\\"hint-container info\\\">\\n<p class=\\\"hint-container-title\\\">相关信息</p>\\n<p>此处存放的一些angular相关，持续更新中。</p>\\n</div>\\n\",\"autoDesc\":true}")
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
