import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "代码笔记",
    icon: "pen-to-square",
    link: "/posts/vue/vue3",
    // children: [
    //   {
    //     text: "前端开发",
    //     prefix: "vue/",
    //     children: [
    //       { text: "Vue3", icon: "pen-to-square", link: "vue3" }
    //     ]
    //   },
     
    // ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
