export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[6,42,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,39,37,33,34,35,36,43,0,38,40,41,1,2,5,3,4,44,45,46,47]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[1,10,11,12,13,33,14,15,8,16,17,34,18,19,9,21,22,23,35,24,25,27,7,29,31,32,36,39]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[1]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

