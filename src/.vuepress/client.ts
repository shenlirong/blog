import { defineClientConfig } from "vuepress/client";
import Blog from "./components/Blog.vue"


import jenkins from '../code/components/jenkins.vue'

import HttpFiled from '../code/components/http-filed.vue'
import HttpConnection from '../code/components/http-connection.vue'
import HttpClose from '../code/components/http-close.vue'
import refReactive from '../code/components/ref-reactive.vue'
import diffAngularVue from '../code/components/angular-vue.vue'
import angularLife from '../code/components/angular-life.vue'

import browserPrinciple from '../code/components/browser-principle.vue'
import httpBasic from '../code/components/http-basic.vue'
import networkBasic from '../code/components/network-basic.vue'
import frontEndEngineer from '../code/components/front-end-engineer.vue'
import compositinModule from '../code/components/composition-module.vue'
import nodeBasic from '../code/components/node-basic.vue'
import newFeatures from '../code/components/Vue3-new-features.vue'
import interfaceType from '../code/components/interface-type.vue'
import angularService from '../code/components/angular-service.vue'
import webpackLoader from '../code/components/webpack-loader.vue'
import angularPipe from '../code/components/angular-pipe.vue'
import webpackBundle from '../code/components/webpack-bundle.vue'
import componnetEncapsulation from '../code/components/component-encapsulation.vue'
import angularDependencyInjection from '../code/components/angular-dependency-injection.vue'
import computedWatch from '../code/components/computed-watch.vue'
import cicd from '../code/components/ci-cd.vue'
import docker from '../code/components/docker.vue'
import epang from '../essay/components/epang.vue'
import layout from '../code/components/flex-layout.vue'
import vIfShow from '../code/components/v-if-show.vue'



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
    app.component('jenkins', jenkins)
    app.component('layout',layout)
    app.component('vIfShow',vIfShow)
  }
});