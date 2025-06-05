import CodeDemo from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
