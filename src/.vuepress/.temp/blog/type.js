export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[7,23,8,9,10,11,12,13,14,15,6,16,17,18,19,24,0,20,21,22,1,2,5,3,4,25,26,27]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[1,16,9,17,10,18,8,14,19]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[1]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

