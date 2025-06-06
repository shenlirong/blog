import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/posts/note_main.html.vue"
const data = JSON.parse("{\"path\":\"/posts/note_main.html\",\"title\":\"代码笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-01T00:00:00.000Z\",\"description\":\"代码笔记 前端开发 网站相关 watch：要明确指出监视的数据 watchEffect：不用明确指出监视的数据（函数中用到哪些属性，那就监视哪些属性）。 标题 3 这里是内容。\"},\"readingTime\":{\"minutes\":0.25,\"words\":76},\"filePathRelative\":\"posts/note_main.md\",\"excerpt\":\"\\n<h2>前端开发</h2>\\n<blockquote>\\n<ol>\\n<li>\\n<p>网站相关</p>\\n</li>\\n<li>\\n<p><code>watch</code>：要明确指出监视的数据</p>\\n</li>\\n<li>\\n<p><code>watchEffect</code>：不用明确指出监视的数据（函数中用到哪些属性，那就监视哪些属性）。</p>\\n</li>\\n</ol>\\n</blockquote>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
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
