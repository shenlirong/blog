export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[16,73,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,6,40,66,61,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,7,8,10,59,60,62,65,67,68,71,72,11,12,15,13,14,74,0,3,4,1,2,5,75,76,77,78,79,9,63,64,69,70]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[14,18,19,20,21,22,23,24,35,17,25]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[14]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

