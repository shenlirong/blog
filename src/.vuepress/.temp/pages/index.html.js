import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"house\",\"title\":\"主页\",\"heroImage\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"heroText\":\"reveal\",\"heroFullScreen\":true,\"tagline\":\"人生没有白走的路，每一步都算数\",\"projects\":[{\"icon\":\"folder-open\",\"name\":\"运营平台\",\"desc\":\"跟着课程练习，完成后台管理系统\",\"link\":\"http://124.221.38.6/acl/permission\"},{\"icon\":\"link\",\"name\":\"Vue3\",\"desc\":\"JavaScript 框架\",\"link\":\"https://cn.vuejs.org/guide/introduction.html\"},{\"icon\":\"book\",\"name\":\"VuePress Theme Hope\",\"desc\":\"一个具有强大功能的 vuepress 主题\",\"link\":\"https://theme-hope.vuejs.press/zh/\"},{\"icon\":\"link\",\"name\":\"Element-ui\",\"desc\":\"网站快速成型工具\",\"link\":\"https://element-plus.org/zh-CN/component/overview.html\"},{\"icon\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"name\":\"vuepress-plugin-md-enhance\",\"desc\":\"VuePress2 Markdown 增强功能\",\"link\":\"https://plugin-md-enhance.vuejs.press/zh/\"}],\"footer\":\"自定义你的页脚文字\",\"description\":\"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: Blog 和 home: true。 相关配置文档请见 博客主页。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"主页\\\",\\\"description\\\":\\\"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: Blog 和 home: true。 相关配置文档请见 博客主页。\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/test/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: Blog 和 home: true。 相关配置文档请见 博客主页。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.78,\"words\":234},\"filePathRelative\":\"README.md\",\"excerpt\":\"<p>这是一个博客主页的案例。</p>\\n<p>要使用此布局，你应该在页面前端设置 <code>layout: Blog</code> 和 <code>home: true</code>。</p>\\n<p>相关配置文档请见 <a href=\\\"https://theme-hope.vuejs.press/zh/guide/blog/home.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">博客主页</a>。</p>\\n\",\"autoDesc\":true}")
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
