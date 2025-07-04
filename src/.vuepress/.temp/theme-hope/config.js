import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-theme-hope/lib/client/exports/base.js";

import { defineCatalogInfoGetter } from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-theme-hope/lib/client/exports/blog.js";
import "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-theme-hope/lib/client/styles/blog/layout.scss";
import { GlobalEncrypt, LocalEncrypt } from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-theme-hope/lib/client/exports/encrypt.js";

import "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-theme-hope/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-theme-hope/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-theme-hope/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
