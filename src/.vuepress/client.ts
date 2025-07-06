import { defineClientConfig } from "vuepress/client";
import Blog from "./components/Blog.vue"
import { defineAsyncComponent } from "vue";

const HttpFiled = defineAsyncComponent(() => import('../code/components/http-filed.vue'))
const HttpConnection = defineAsyncComponent(() => import('../code/components/http-connection.vue'))
const HttpClose = defineAsyncComponent(() => import('../code/components/http-close.vue'))
const refReactive = defineAsyncComponent(() => import('../code/components/ref-reactive.vue'))
const diffAngularVue = defineAsyncComponent(() => import('../code/components/angular-vue.vue'))
const angularLife = defineAsyncComponent(() => import('../code/components/angular-life.vue'))

const browserPrinciple = defineAsyncComponent(() => import('../code/components/browser-principle.vue'))
const httpBasic = defineAsyncComponent(() => import('../code/components/http-basic.vue'))
const networkBasic = defineAsyncComponent(() => import('../code/components/network-basic.vue'))
const frontEndEngineer = defineAsyncComponent(() => import('../code/components/front-end-engineer.vue'))
const compositinModule = defineAsyncComponent(() => import('../code/components/composition-module.vue'))
const nodeBasic = defineAsyncComponent(() => import('../code/components/node-basic.vue'))
const newFeatures = defineAsyncComponent(() => import('../code/components/Vue3-new-features.vue'))
const interfaceType = defineAsyncComponent(() => import('../code/components/interface-type.vue'))
const angularService = defineAsyncComponent(() => import('../code/components/angular-service.vue'))
const webpackLoader = defineAsyncComponent(() => import('../code/components/webpack-loader.vue'))
const angularPipe = defineAsyncComponent(() => import('../code/components/angular-pipe.vue'))
const webpackBundle = defineAsyncComponent(() => import('../code/components/webpack-bundle.vue'))
const componnetEncapsulation = defineAsyncComponent(() => import('../code/components/component-encapsulation.vue'))
const angularDependencyInjection = defineAsyncComponent(() => import('../code/components/angular-dependency-injection.vue'))
const computedWatch = defineAsyncComponent(() => import('../code/components/computed-watch.vue'))
const cicd = defineAsyncComponent(() => import('../code/components/ci-cd.vue'))
const docker = defineAsyncComponent(() => import('../code/components/docker.vue'))
const epang = defineAsyncComponent(() => import('../essay/components/epang.vue'))





export default defineClientConfig({
  //...

  layouts: {
    // ...
    Blog,
  },
  enhance: ({ app, router, siteData }) => {
    app.component('HttpFiled', HttpFiled)
    app.component('HttpConnection', HttpConnection)
    app.component('HttpClose', HttpClose)
    app.component('refReactive', refReactive)
    app.component('diffAngularVue', diffAngularVue)
    app.component('angularLife', angularLife)
    app.component('browserPrinciple', browserPrinciple)
    app.component('httpBasic', httpBasic)
    app.component('networkBasic', networkBasic)
    app.component('frontEndEngineer', frontEndEngineer)
    app.component('compositinModule', compositinModule)
    app.component('nodeBasic', nodeBasic)
    app.component('newFeatures', newFeatures)
    app.component('interfaceType', interfaceType)
    app.component('angularService', angularService)
    app.component('webpackLoader', webpackLoader)
    app.component('angularPipe', angularPipe)
    app.component('webpackBundle', webpackBundle)
    app.component('componnetEncapsulation', componnetEncapsulation)
    app.component('angularDependencyInjection', angularDependencyInjection)
    app.component('computedWatch', computedWatch)
    app.component('cicd', cicd)
    app.component('docker', docker)
    app.component('epang', epang)
  }
});