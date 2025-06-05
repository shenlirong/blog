import { CodeTabs } from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
