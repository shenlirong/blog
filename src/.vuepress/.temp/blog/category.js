export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"诗词赏析\":{\"path\":\"/category/%E8%AF%97%E8%AF%8D%E8%B5%8F%E6%9E%90/\",\"indexes\":[0]},\"reveal随笔\":{\"path\":\"/category/reveal%E9%9A%8F%E7%AC%94/\",\"indexes\":[1]},\"使用指南\":{\"path\":\"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[2,3,4,5,6]},\"指南\":{\"path\":\"/category/%E6%8C%87%E5%8D%97/\",\"indexes\":[7]},\"项目\":{\"path\":\"/category/%E9%A1%B9%E7%9B%AE/\",\"indexes\":[8]},\"前端开发\":{\"path\":\"/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/\",\"indexes\":[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]},\"Mapbox\":{\"path\":\"/category/mapbox/\",\"indexes\":[46]},\"容器技术\":{\"path\":\"/category/%E5%AE%B9%E5%99%A8%E6%8A%80%E6%9C%AF/\",\"indexes\":[47]},\"前端技术\":{\"path\":\"/category/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/\",\"indexes\":[48]},\"代码笔记\":{\"path\":\"/category/%E4%BB%A3%E7%A0%81%E7%AC%94%E8%AE%B0/\",\"indexes\":[49]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"禁用\":{\"path\":\"/tag/%E7%A6%81%E7%94%A8/\",\"indexes\":[6]},\"加密\":{\"path\":\"/tag/%E5%8A%A0%E5%AF%86/\",\"indexes\":[5]},\"布局\":{\"path\":\"/tag/%E5%B8%83%E5%B1%80/\",\"indexes\":[7]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[4]},\"页面配置\":{\"path\":\"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/\",\"indexes\":[3]},\"使用指南\":{\"path\":\"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[3]},\"Mapbox\":{\"path\":\"/tag/mapbox/\",\"indexes\":[46]},\"前端开发\":{\"path\":\"/tag/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/\",\"indexes\":[9,10,12,46]},\"es6笔记\":{\"path\":\"/tag/es6%E7%AC%94%E8%AE%B0/\",\"indexes\":[12]},\"Vue3\":{\"path\":\"/tag/vue3/\",\"indexes\":[9]},\"Vue组件通信方式\":{\"path\":\"/tag/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1%E6%96%B9%E5%BC%8F/\",\"indexes\":[10]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

