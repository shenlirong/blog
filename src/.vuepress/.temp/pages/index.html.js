import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"house\",\"title\":\"主页\",\"heroImage\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"heroText\":\"reveal\",\"heroFullScreen\":true,\"tagline\":\"人生没有白走的路，每一步都算数\",\"projects\":[{\"icon\":\"folder-open\",\"name\":\"运营平台\",\"desc\":\"跟着课程练习，完成后台管理系统\",\"link\":\"http://124.221.38.6/acl/permission\"},{\"icon\":\"link\",\"name\":\"Vue3\",\"desc\":\"JavaScript 框架\",\"link\":\"https://cn.vuejs.org/guide/introduction.html\"},{\"icon\":\"book\",\"name\":\"VuePress Theme Hope\",\"desc\":\"一个具有强大功能的 vuepress 主题\",\"link\":\"https://theme-hope.vuejs.press/zh/\"},{\"icon\":\"link\",\"name\":\"Element-ui\",\"desc\":\"网站快速成型工具\",\"link\":\"https://element-plus.org/zh-CN/component/overview.html\"},{\"icon\":\"link\",\"name\":\"牛客网\",\"desc\":\"求职题库\",\"link\":\"https://www.nowcoder.com/?type=856_1\"},{\"icon\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"name\":\"vuepress-plugin-md-enhance\",\"desc\":\"VuePress2 Markdown 增强功能\",\"link\":\"https://plugin-md-enhance.vuejs.press/zh/\"}],\"footer\":\"\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"主页\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shenlirong.github.io/test/blog/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.57,\"words\":170},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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
