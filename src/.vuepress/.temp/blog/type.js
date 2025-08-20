export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[14,71,15,16,17,18,19,20,21,22,23,24,25,26,27,72,28,29,30,31,32,33,34,35,36,37,9,38,64,58,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,3,10,12,57,59,60,63,65,66,69,70,4,5,8,6,7,73,0,2,1,74,11,75,76,13,61,62,67,68]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[7,16,17,18,19,20,21,22,33,15,23]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[7]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

