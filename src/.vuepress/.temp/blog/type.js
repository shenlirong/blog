export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[13,70,14,15,16,17,18,19,20,21,22,23,24,25,26,71,27,28,29,30,31,32,33,34,35,36,9,37,63,58,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,3,10,11,56,57,59,62,64,65,68,69,4,5,8,6,7,72,0,1,2,73,74,75,12,60,61,66,67]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[7,15,16,17,18,19,20,21,32,14,22]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[7]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

