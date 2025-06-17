export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[1,17,2,3,4,5,6,0,7,18,8,9,10,16,11,12,15,13,14,19,20,21]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[11,3,4,7,2,6]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[11]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

