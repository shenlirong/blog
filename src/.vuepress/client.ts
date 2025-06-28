import { defineClientConfig } from "vuepress/client";
import Blog from "./components/Blog.vue"
import httpFiled from '../code/components/http-filed.vue'
import httpConnection from '../code/components/http-connection.vue'
import httpClose from '../code/components/http-close.vue'

export default defineClientConfig({
  //...

  layouts: {
    // ...
    Blog,
  },
   enhance: ({ app, router, siteData }) => {
    app.component("HttpFiled", httpFiled);
    app.component('HttpConnection',httpConnection);
    app.component('HttpClose',httpClose)
  },
});