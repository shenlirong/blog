export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[0,42,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,33,31,27,28,29,30,43,32,34,35,41,36,37,40,38,39,44,45,46]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[36,4,5,6,7,27,8,9,2,10,11,28,12,13,3,15,16,17,29,18,19,21,1,23,25,26,30,33]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[36]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

