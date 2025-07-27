export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[0,48,1,2,3,4,5,6,7,8,9,10,11,12,36,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,35,30,31,32,33,34,49,45,37,38,39,46,47,40,41,44,42,43,50,51,52]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[40,4,5,6,7,30,8,9,2,10,11,31,12,36,3,14,15,16,18,32,19,20,21,23,1,25,27,28,29,33]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[40]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

