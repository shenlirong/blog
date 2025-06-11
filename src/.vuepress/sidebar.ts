import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "代码笔记",
      icon: "code",
      prefix: "code/",
      link: "code/",
      children: "structure",
    },
    {
      text: "reveal随笔",
      icon: "laptop-code",
      prefix: "essay/",
      link: "essay/",
      children: "structure",
    },
    // {
    //   text: "代码笔记",
    //   icon: "code",
    //   prefix: "posts/",
    //   children: [
    //      {
    //       text: "",
    //       prefix: "site/",
    //       children: [
    //         { text: "学习网站", icon: "pen-to-square", link: "website" },
    //       ]
    //     },
    //     {
    //       text: "",
    //       prefix: "vue/",
    //       children: [
    //         { text: "Vue3", icon: "pen-to-square", link: "vue3" },
    //       ]
    //     },
    //      {
    //       text: "",
    //       prefix: "dev_laguage/",
    //       children: [
    //         { text: "TS与JS相关", icon: "pen-to-square", link: "ts_js" },
    //          { text: "es6笔记", icon: "pen-to-square", link: "es6" },
    //       ],
    //     },
    //      {
    //       text: "",
    //       prefix: "Dom/",
    //       children: [
    //         { text: "Dom简介", icon: "pen-to-square", link: "dom" },
    //          { text: "前端解决跨域的方法", icon: "pen-to-square", link: "cross-domain" },
    //       ],
    //     },
    //     {
    //       text: "",
    //       prefix: "mapbox/",
    //       children: [
    //         { text: "MapboxAPI", icon: "pen-to-square", link: "api" },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   text: "reveal的随笔",
    //   icon: "newspaper",
    //   prefix: "posts/",
    //   children: [
    //     { 
    //       text: "",
    //       prefix: "note/",
    //       children: [
    //          { text: "背影", icon: "pen-to-square", link: "silhouette" },
    //       ]
    //     },
    //   ]
    // },
     {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ]
});
