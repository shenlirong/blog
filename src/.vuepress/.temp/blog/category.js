export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"使用指南\":{\"path\":\"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[0,1,2,3,4]},\"指南\":{\"path\":\"/category/%E6%8C%87%E5%8D%97/\",\"indexes\":[5]},\"Mapbox\":{\"path\":\"/category/mapbox/\",\"indexes\":[6]},\"前端开发\":{\"path\":\"/category/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/\",\"indexes\":[7]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"禁用\":{\"path\":\"/tag/%E7%A6%81%E7%94%A8/\",\"indexes\":[4]},\"加密\":{\"path\":\"/tag/%E5%8A%A0%E5%AF%86/\",\"indexes\":[3]},\"布局\":{\"path\":\"/tag/%E5%B8%83%E5%B1%80/\",\"indexes\":[5]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[2]},\"页面配置\":{\"path\":\"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/\",\"indexes\":[1]},\"使用指南\":{\"path\":\"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[1]},\"Mapbox\":{\"path\":\"/tag/mapbox/\",\"indexes\":[6]},\"前端开发\":{\"path\":\"/tag/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/\",\"indexes\":[7,6]},\"Vue3\":{\"path\":\"/tag/vue3/\",\"indexes\":[7]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

