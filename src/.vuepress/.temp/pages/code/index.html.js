import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/code/index.html.vue"
const data = JSON.parse("{\"path\":\"/code/\",\"title\":\"代码笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"代码笔记\",\"icon\":\"layer-group\",\"category\":[\"代码笔记\"],\"description\":\"相关信息 编程语言 JavaScript/TypeScript java Go Python ..... 框架与工具 Uni-app Vue Angular React ......\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"代码笔记\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://shenlirong.github.io/test/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shenlirong.github.io/test/blog/code/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"代码笔记\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"相关信息 编程语言 JavaScript/TypeScript java Go Python ..... 框架与工具 Uni-app Vue Angular React ......\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.13,\"words\":38},\"filePathRelative\":\"code/README.md\",\"excerpt\":\"<div class=\\\"hint-container info\\\">\\n<p class=\\\"hint-container-title\\\">相关信息</p>\\n<ul>\\n<li>编程语言\\n<ul>\\n<li>JavaScript/TypeScript</li>\\n<li>java</li>\\n<li>Go</li>\\n<li>Python</li>\\n<li>.....</li>\\n</ul>\\n</li>\\n<li>框架与工具\\n<ul>\\n<li>Uni-app</li>\\n<li>Vue</li>\\n<li>Angular</li>\\n<li>React</li>\\n<li>......</li>\\n</ul>\\n</li>\\n</ul>\\n</div>\",\"autoDesc\":true}")
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
