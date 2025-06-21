export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[1,22,2,3,4,5,6,7,8,9,0,10,11,12,23,13,14,20,21,15,16,19,17,18,24,25,26]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[15,10,3,11,4,12,2,8]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[15]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

