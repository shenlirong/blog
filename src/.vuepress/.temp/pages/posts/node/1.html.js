import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/posts/node/1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/node/1.html\",\"title\":\"Vue2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-01T00:00:00.000Z\",\"index\":false,\"article\":false,\"description\":\"Vue2 标题 2 这里是内容。 标题 3 这里是内容。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Vue2\\\",\\\"description\\\":\\\"Vue2 标题 2 这里是内容。 标题 3 这里是内容。\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/test/posts/node/1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Vue2\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Vue2 标题 2 这里是内容。 标题 3 这里是内容。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-01T00:00:00.000Z\"}]]},\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"posts/node/1.md\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
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
