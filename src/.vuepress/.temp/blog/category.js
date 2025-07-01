export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"Mapbox\":{\"path\":\"/category/mapbox/\",\"indexes\":[0]},\"前端开发\":{\"path\":\"/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/\",\"indexes\":[1,2,3,4,5,6,7,8,9,10,11,12,13,14]},\"代码笔记\":{\"path\":\"/category/%E4%BB%A3%E7%A0%81%E7%AC%94%E8%AE%B0/\",\"indexes\":[15]},\"使用指南\":{\"path\":\"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[16,17,18,19,20]},\"指南\":{\"path\":\"/category/%E6%8C%87%E5%8D%97/\",\"indexes\":[21]},\"reveal随笔\":{\"path\":\"/category/reveal%E9%9A%8F%E7%AC%94/\",\"indexes\":[22]},\"项目\":{\"path\":\"/category/%E9%A1%B9%E7%9B%AE/\",\"indexes\":[23]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"Mapbox\":{\"path\":\"/tag/mapbox/\",\"indexes\":[0]},\"前端开发\":{\"path\":\"/tag/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/\",\"indexes\":[1,2,4,0]},\"es6笔记\":{\"path\":\"/tag/es6%E7%AC%94%E8%AE%B0/\",\"indexes\":[4]},\"Vue3\":{\"path\":\"/tag/vue3/\",\"indexes\":[1]},\"Vue组件通信方式\":{\"path\":\"/tag/vue%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1%E6%96%B9%E5%BC%8F/\",\"indexes\":[2]},\"禁用\":{\"path\":\"/tag/%E7%A6%81%E7%94%A8/\",\"indexes\":[20]},\"加密\":{\"path\":\"/tag/%E5%8A%A0%E5%AF%86/\",\"indexes\":[19]},\"布局\":{\"path\":\"/tag/%E5%B8%83%E5%B1%80/\",\"indexes\":[21]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[18]},\"页面配置\":{\"path\":\"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/\",\"indexes\":[17]},\"使用指南\":{\"path\":\"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[17]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

