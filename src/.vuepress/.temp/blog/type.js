export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[15,72,16,17,18,19,20,21,22,23,24,25,26,27,28,73,29,30,31,32,33,34,35,36,37,38,11,39,65,60,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,5,12,13,58,59,61,64,66,67,70,71,6,7,10,8,9,74,0,2,3,1,4,75,76,77,14,62,63,68,69]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[9,17,18,19,20,21,22,23,34,16,24]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[9]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

