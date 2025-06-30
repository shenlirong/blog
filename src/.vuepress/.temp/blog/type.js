export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[1,23,2,3,4,5,6,7,8,9,0,10,11,12,13,24,14,15,21,22,16,17,20,18,19,25,26,27]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[16,10,3,11,4,12,2,8,13]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[16]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

