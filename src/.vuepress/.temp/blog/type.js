export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[11,68,12,13,14,15,16,17,18,19,20,21,22,23,24,69,25,26,27,28,29,30,31,32,33,34,1,35,61,56,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,2,3,9,54,55,57,60,62,63,66,67,4,5,8,6,7,70,0,71,72,73,10,58,59,64,65]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[7,13,14,15,16,17,18,19,30,12,20]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[7]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

