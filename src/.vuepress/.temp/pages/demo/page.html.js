import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/demo/page.html.vue"
const data = JSON.parse("{\"path\":\"/demo/page.html\",\"title\":\"页面配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"页面配置\",\"sticky\":-2,\"icon\":\"file\",\"order\":3,\"author\":\"Ms.reveal\",\"date\":\"2023-10-05T00:00:00.000Z\",\"category\":[\"使用指南\"],\"tag\":[\"页面配置\",\"使用指南\"],\"star\":true,\"footer\":\"这是测试显示的页脚\",\"copyright\":\"无版权\",\"description\":\"more 注释之前的内容被视为文章摘要。\"},\"readingTime\":{\"minutes\":1.77,\"words\":531},\"filePathRelative\":\"demo/page.md\",\"excerpt\":\"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\\n\",\"autoDesc\":true}")
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
