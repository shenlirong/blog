export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[0,33,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,23,19,20,21,22,34,24,25,31,32,26,27,30,28,29,35,36,37]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[26,4,5,19,2,20,6,3,8,9,10,21,11,12,14,1,16,18,22]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[26]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

