export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[1,27,2,3,4,5,6,7,8,9,10,11,12,13,0,14,15,16,17,28,18,19,25,26,20,21,24,22,23,29,30,31]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[20,14,3,15,5,4,7,8,16,9,2,12,17]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[20]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

