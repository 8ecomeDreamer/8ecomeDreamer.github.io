/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\github\\front_lounge\\8ecomeDreamer.github.io\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-3178d9bb",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3178d9bb").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-50e62664",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-50e62664").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-48d43000",
    path: "/guide/frontEnd/demo.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-48d43000").then(next)
    },
  },
  {
    name: "v-ea66e920",
    path: "/guide/backEnd/demo.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ea66e920").then(next)
    },
  },
  {
    name: "v-9de0dc84",
    path: "/noteBook/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9de0dc84").then(next)
    },
  },
  {
    path: "/noteBook/index.html",
    redirect: "/noteBook/"
  },
  {
    name: "v-3e5c9a5a",
    path: "/noteBook/backEnd/demo.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3e5c9a5a").then(next)
    },
  },
  {
    name: "v-4d9db518",
    path: "/noteBook/frontEnd/demo.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4d9db518").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]