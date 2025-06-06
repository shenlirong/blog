import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"介绍页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"circle-info\",\"description\":\"介绍页 将你的个人介绍和档案放置在此处。\"},\"readingTime\":{\"minutes\":0.08,\"words\":23},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<p>将你的个人介绍和档案放置在此处。</p>\\n\",\"autoDesc\":true}")
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
