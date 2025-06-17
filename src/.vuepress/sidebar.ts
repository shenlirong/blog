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
      text: "项目",
      icon: "eraser",
      prefix: "project_sum/",
      link: "project_sum/",
      children: "structure",
    },
    {
      text: "reveal随笔",
      icon: "book-open",
      prefix: "essay/",
      link: "essay/",
      children: "structure",
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
  ]
});
