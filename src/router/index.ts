import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { getUser } from "@/services/UserService";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue")
  },
  {
    path: "/sign-in",
    name: "SignIn",
    // route level code-splitting
    // this generates a separate chunk (SignIn.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "SignIn" */ "../views/SignIn.vue"),
    meta: {
      public: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.public) {
    next();
  } else {
    const user = getUser();
    if (user) {
      next();
    } else {
      next({ name: "SignIn" });
    }
  }
});

export default router;
