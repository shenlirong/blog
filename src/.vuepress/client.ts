import { defineClientConfig } from "vuepress/client";
import Blog from "./components/Blog.vue"

export default defineClientConfig({
  //...

  layouts: {
    // ...
    Blog,
  },
});