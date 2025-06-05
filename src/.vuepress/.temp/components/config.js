import { hasGlobalComponent } from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "C:/Users/slr/Desktop/Vue3学习资料/Vue3_test/11/test/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
