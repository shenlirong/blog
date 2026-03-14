import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  "/code/",
  "/essay/",
  {
    text: "工具",
    icon: "toolbox",
    children: [
      {
        text: '在线编码转换',
        icon: "screwdriver-wrench",
        link: 'https://tool.oschina.net/encode?type=4'
      },
      // {
      //   text: 'HTTP状态查询',
      //   icon: "bars-progress",
      //   link: 'https://tool.chinaz.com/pagestatus/'
      // },
      // {
      //   text: 'Fetch API',
      //   icon: "file-lines",
      //   link: 'https://www.w3cschool.cn/fetch_api/fetch_api-s1a72m0k.html'
      // },

      {
        text: 'Regex在线生成工具',
        icon: "screwdriver-wrench",
        link: 'https://tool.oschina.net/encode?type=4'
      },
      {
        text: '图片处理',
        icon: "image",
        link: 'https://www.iloveimg.com/crop-image'
      },
      // {
      //   text: '在线编码转换',
      //   icon: "screwdriver-wrench",
      //   link: 'https://tool.oschina.net/encode?type=4'
      // },
    ]
  },
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
          }, {
            // icon:"file-zipper",
            text: "3.react",
            link: 'https://zh-hans.react.dev/'
          }
        ]
      }
    ]
  },
]);
