export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[1,24,2,3,4,5,6,7,8,9,10,0,11,12,13,14,25,15,16,22,23,17,18,21,19,20,26,27,28]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[17,11,3,12,4,13,6,2,9,14]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[17]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

