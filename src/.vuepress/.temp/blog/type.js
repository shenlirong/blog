export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[0,39,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,29,25,26,27,28,40,30,31,37,38,32,33,36,34,35,41,42,43]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[32,4,5,6,7,25,8,9,2,10,26,11,3,13,14,15,27,16,17,19,1,21,23,24,28]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[32]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

