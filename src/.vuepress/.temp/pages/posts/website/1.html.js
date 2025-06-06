import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/posts/website/1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/website/1.html\",\"title\":\"学习网站\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-01T00:00:00.000Z\",\"index\":false,\"article\":false,\"description\":\"学习网站 此处是 reveal 存放的一些网站，持续更新中.....。 前端开发 1.Vue3：https://cn.vuejs.org/guide/introduction.html 2.UI:https://element-plus.org/zh-CN/component/overview.html MarkDown 文档 1.菜鸟：https:/...\"},\"readingTime\":{\"minutes\":0.2,\"words\":59},\"filePathRelative\":\"posts/website/1.md\",\"excerpt\":\"\\n<p>此处是 reveal 存放的一些网站，持续更新中.....。</p>\\n<h2>前端开发</h2>\\n<p>1.Vue3：<a href=\\\"https://cn.vuejs.org/guide/introduction.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://cn.vuejs.org/guide/introduction.html</a><br>\\n2.UI:<a href=\\\"https://element-plus.org/zh-CN/component/overview.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://element-plus.org/zh-CN/component/overview.html</a></p>\",\"autoDesc\":true}")
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
