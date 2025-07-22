export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[0,44,1,2,3,4,5,6,7,8,9,10,11,12,33,13,14,15,16,17,18,19,20,21,22,23,24,25,26,32,27,28,29,30,31,45,41,34,35,42,43,36,37,40,38,39,46,47,48]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[36,4,5,6,7,27,8,9,2,10,11,28,12,33,3,14,15,16,17,29,18,19,21,1,23,25,26,30]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[36]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

