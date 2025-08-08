export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[11,67,12,13,14,15,16,17,18,19,20,21,22,55,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,68,48,7,49,56,50,51,52,1,8,9,53,54,57,60,61,62,65,66,2,3,6,4,5,69,0,70,71,72,10,58,59,63,64]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[5,15,16,17,18,19,14,46,34,12,36]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[5]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

