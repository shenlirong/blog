export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[0,43,1,2,3,4,5,6,7,8,9,10,11,12,32,13,14,15,16,17,18,19,20,21,22,23,24,25,31,26,27,28,29,30,44,34,33,35,36,42,37,38,41,39,40,45,46,47]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[37,4,5,6,7,26,8,9,2,10,11,27,12,32,3,14,15,16,28,17,18,20,1,22,24,25,29]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[37]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

