import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from "vue-router";

//手写router
// import {
//     createRouter,
//     createWebHashHistory
// } from './gRouter/index'

import Home from "../pages/home.vue";
import About from "../pages/about.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
