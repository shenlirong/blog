import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  "/code/",
  "/essay/",
  {
    text: "教程",
    icon: "circle-info",
    children: [
      {
        text: '网站快速成型工具',
        children: [
          {
            text: '1.vue',
            link: 'https://element-plus.org/zh-CN/component/overview.html'
          }, 
          {
            text: "2.angular",
            link: 'https://ng.ant.design/version/7.5.x/docs/introduce/zh'
          }
        ]
      },
      {
        text: 'javaScript框架',
        children: [
          {
            text: '1.vue',
            link: 'https://cn.vuejs.org/guide/introduction'
          }, {
            // icon:"file-half-dashed",
            text: "2.angular",
            link: 'https://www.angular.cn/overview'
          },{
            // icon:"file-zipper",
            text: "3.react",
            link: 'https://zh-hans.react.dev/'
          }
        ]
      }
    ]
  },
]);
