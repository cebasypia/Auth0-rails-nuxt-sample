import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5a94a5cd = () => interopDefault(import('../pages/callback.vue' /* webpackChunkName: "pages/callback" */))
const _4b6dbe11 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6f5b0c92 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _fc73ca0c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/callback",
    component: _5a94a5cd,
    name: "callback"
  }, {
    path: "/login",
    component: _4b6dbe11,
    name: "login"
  }, {
    path: "/logout",
    component: _6f5b0c92,
    name: "logout"
  }, {
    path: "/",
    component: _fc73ca0c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
