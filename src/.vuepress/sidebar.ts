import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "代码笔记",
      icon: "layer-group",
      prefix: "code/",
      // link: "code/",
      collapsible: true,
      children: [
        {
          text: 'Vue相关',
          icon: "file-lines",
          prefix: "vue/",
          // link: "vue/",
          collapsible: true,
          children: 'structure'
        },
        {
          text: 'JavaScript与TypeScript',
          icon: "note-sticky",
          prefix: "JavaScript-TypeScript/",
          // link: "JavaScript与TypeScript/",
          collapsible: true,
          children: 'structure'
        },
        {
          text: 'css相关与布局',
          icon: "file-code",
          prefix: "css-layout/",
          // link: "CSS与布局/",
          collapsible: true,
          children: 'structure'
        },
        {
          text: 'webpack与vite',
          icon: "folder-minus",
          prefix: "webpack-vite/",
          // link: "webpack与vite/",
          collapsible: true,
          children: 'structure'
        },
        {
          text: 'angular相关',
          icon: "file-half-dashed",
          prefix: "angular/",
          // link: "angular相关/",
          collapsible: true,
          children: 'structure'
        },
        {
          text: '前端工程化',
          icon: "id-card-clip",
          prefix: "enginer/",
          // link: "前端相关/",
          collapsible: true,
          children: 'structure'
        },
        {
          text: 'web安全基础',
          icon: "file-zipper",
          prefix: "webSecure/",
          // link: "web安全基础/",
          collapsible: true,
          children: 'structure'
        },
        {
          text: 'HTML',
          icon: "file-waveform",
          prefix: "HTML/",
          // link: "HTML/",
          collapsible: true,
          children: 'structure'
        },
        {
          text: 'Microfront',
          icon: "file-pen",
          prefix: "microfront/",
          // link: "常见问题/",
          collapsible: true,
          children: 'structure'
        },
        {
          text: '脑洞思考',
          icon: "circle-question",
          prefix: "genic-question/",
          // link: "常见问题/",
          collapsible: true,
          children: 'structure'
        },
      ]
    },
    {
      text: "知识点篇",
      icon: "folder-minus",
      collapsible: true,
      prefix: "algorithm/",
      children: "structure",
    },
    {
      text: "问题溯源与解决日志",
      icon: "tarp",
      collapsible: true,
      prefix: "project_sum/",
      // link: "project_sum/",
      children: "structure",
    },
    {
      text: "相关网站",
      icon: "diagram-project",
      collapsible: true,
      prefix: "website/",
      // link: "website/",
      children: "structure",
    },
    {
      text: "reveal随笔",
      icon: "book-open",
      collapsible: true,
      prefix: "essay/",
      // link: "essay/",
      children: "structure",
    },
    {
      text: "如何使用",
      icon: "laptop-code",
      collapsible: true,
      prefix: "demo/",
      // link: "demo/",
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
