export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[7,8,6,0,1,2,5,3,4,9,10,11]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[1]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[8,6,7,1]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

