import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/code/microtasks-macrotasks.html.vue"
const data = JSON.parse("{\"path\":\"/code/microtasks-macrotasks.html\",\"title\":\"微任务与宏任务\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"sticky\":66,\"category\":[\"前端开发\"],\"description\":\"相关信息 事件循环机制中 微任务和宏任务 的差异主要由 执行机制和设计目标 决定： 1.微任务设计初衷 微任务设计初衷是为解决特定场景需求，例如Promise的回调执行、process.nextTick()等，这些任务通常需要快速完成且不影响其他异步操作，因此采用单队列处理模式。 ‌ 2.宏任务特性 宏任务涉及更复杂的操作（如定时器、文件读写、UI渲染...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"微任务与宏任务\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"reveal\\\",\\\"url\\\":\\\"https://shenlirong.github.io/test/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shenlirong.github.io/test/blog/code/microtasks-macrotasks.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"reveal\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"微任务与宏任务\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"相关信息 事件循环机制中 微任务和宏任务 的差异主要由 执行机制和设计目标 决定： 1.微任务设计初衷 微任务设计初衷是为解决特定场景需求，例如Promise的回调执行、process.nextTick()等，这些任务通常需要快速完成且不影响其他异步操作，因此采用单队列处理模式。 ‌ 2.宏任务特性 宏任务涉及更复杂的操作（如定时器、文件读写、UI渲染...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":16.15,\"words\":4845},\"filePathRelative\":\"code/microtasks-macrotasks.md\",\"excerpt\":\"<div class=\\\"hint-container info\\\">\\n<p class=\\\"hint-container-title\\\">相关信息</p>\\n<p>事件循环机制中 <strong>微任务和宏任务</strong> 的差异主要由 <strong>执行机制和设计目标</strong> 决定：</p>\\n<p><strong>1.微任务设计初衷</strong><br>\\n微任务设计初衷是为解决特定场景需求，例如Promise的回调执行、process.nextTick()等，这些任务通常需要快速完成且不影响其他异步操作，因此采用单队列处理模式。 ‌</p>\\n<p><strong>2.宏任务特性</strong><br>\\n宏任务涉及更复杂的操作（如定时器、文件读写、UI渲染等），需要更灵活的调度机制。浏览器或环境会为不同类型宏任务维护独立队列，例如定时器队列、I/O操作队列等，但执行时仍遵循先进先出原则。 ‌</p>\\n<p><strong>3.执行优先级差异</strong><br>\\n微任务优先级高于宏任务，每次宏任务执行后都会优先处理所有微任务，确保异步操作不会阻塞主线程。这种设计既保证响应性又维持任务处理的独立性</p>\\n</div>\\n\",\"autoDesc\":true}")
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
