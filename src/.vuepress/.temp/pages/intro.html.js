import comp from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/src/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"介绍页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"circle-info\",\"description\":\"介绍页 1.有时候人存在的意义，更多是觉醒和思考，而不仅仅是生存。 2.重复99次，只为第100次的蜕变。 3.平常心是道。 4.成为普通人和成为伟人，难度一样大。 5.所有命运馈赠的\\\"舒适\\\"，早在筹码堆里标好了售价。 6.少看自己所失去的，多看自己所拥有的。\"},\"readingTime\":{\"minutes\":0.35,\"words\":106},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<p>1.有时候人存在的意义，更多是觉醒和思考，而不仅仅是生存。<br>\\n2.重复99次，只为第100次的蜕变。<br>\\n3.平常心是道。<br>\\n4.成为普通人和成为伟人，难度一样大。<br>\\n5.所有命运馈赠的\\\"舒适\\\"，早在筹码堆里标好了售价。<br>\\n6.少看自己所失去的，多看自己所拥有的。</p>\\n\",\"autoDesc\":true}")
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
