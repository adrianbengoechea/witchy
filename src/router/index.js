import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      forLoggedUser: true
    },
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta: {
      forLoggedUser: true
    },
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "Log In",
    meta: {
      forLoggedUser: false
    },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "Sign In",
    meta: {
      forLoggedUser: false
    },
    component: () => import("../views/Register.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, form, next) => {
  if (to.meta.forLoggedUser === true) {
    if (store.getters.authUser) {
      next();
    } else {
      next("/login");
    }
  } else if (to.meta.forLoggedUser === false) {
    if (!store.getters.authUser) {
      next();
    } else {
      next("/");
    }
  } else {
    next("/");
  }
});

export default router;
