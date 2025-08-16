export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[14,71,15,16,17,18,19,20,21,22,23,24,25,26,27,72,28,29,30,31,32,33,34,35,36,37,10,38,64,59,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,4,11,12,57,58,60,63,65,66,69,70,5,6,9,7,8,73,0,2,1,3,74,75,76,13,61,62,67,68]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[8,16,17,18,19,20,21,22,33,15,23]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[8]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

