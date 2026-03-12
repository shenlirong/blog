export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[17,74,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,13,41,67,62,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,6,14,15,60,61,63,66,68,69,72,73,7,8,11,9,10,75,0,3,4,5,1,2,12,76,77,78,79,80,16,64,65,70,71]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[10,19,20,21,22,23,24,25,36,18,26]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[10]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

