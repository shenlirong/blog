import { defineUserConfig } from "vuepress";
// import { commentPlugin } from '@vuepress/plugin-comment'
import theme from "./theme.js";


export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "reveal",
  description: "vuepress-theme-hope 的博客演示",
  theme,
  // plugins:[
  //   commentPlugin({
  //     provider: 'Giscus', // Artalk | Giscus | Waline | Twikoo
  //     // 服务商配置
  //   }),
  // ]
  //  locales: {
  //   "/": {
  //     lang
  //       : "zh-CN",
  //   },
  //   "/zh/": {
  //     lang
  //       : "en-US",
  //   },
  // },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});


