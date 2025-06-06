import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "代码笔记",
      icon: "book",
      prefix: "posts/",
      children: [
         {
          text: "",
          prefix: "website/",
          children: [
            { text: "学习网站", icon: "pen-to-square", link: "1" },
          ]
        },
        {
          text: "",
          prefix: "vue/",
          children: [
            { text: "Vue3", icon: "pen-to-square", link: "vue3" },
          ]
        },
         {
          text: "",
          prefix: "dev_laguage/",
          children: [
            { text: "TS与JS相关", icon: "pen-to-square", link: "1" },
          ],
        },
         {
          text: "",
          prefix: "vue_note/",
          children: [
            { text: "Vue学习笔记", icon: "pen-to-square", link: "1" },
          ],
        },
        {
          text: "",
          prefix: "mapbox/",
          children: [
            { text: "MapboxAPI", icon: "pen-to-square", link: "1" },
          ],
        },
      ],
    },
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
  ],
});
