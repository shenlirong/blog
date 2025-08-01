export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[9,50,10,11,12,13,14,15,16,17,18,19,20,21,47,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,46,41,42,43,44,51,45,0,48,1,2,8,49,3,4,7,5,6,52,53,54,55]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[3,13,14,15,16,41,17,18,11,19,20,42,21,47,12,23,24,25,26,28,43,29,30,31,32,34,10,36,38,39,40,44]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[3]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

