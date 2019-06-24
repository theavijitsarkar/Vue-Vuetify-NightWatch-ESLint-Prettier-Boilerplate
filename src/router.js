import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Login from "./views/login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ]
});
