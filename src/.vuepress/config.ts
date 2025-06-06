import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/test/",

  lang: "zh-CN",
  title: "reveal",
  description: "vuepress-theme-hope 的博客演示",
  theme,
  //  locales: {
  //   "/": {
  //     lang
  //       : "en-US",
  //   },
  //   "/zh/": {
  //     lang
  //       : "zh-CN",
  //   },
  // },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
