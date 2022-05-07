import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
//import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // meta: { requiresAuth: true },
  },
  {
    path: "/Administracion",
    name: "Administracion",
    component: () => import("../views/AdministracionView.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
    // meta: { requiresAuth: false },
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/RegistrationView.vue"),
    // meta: { requiresAuth: false },
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import("../views/EditView.vue"),
    // meta: { requiresAuth: false },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem("isAuth");
  if (to.name !== "Login" && !isAuth) next({ name: "Login" });
  else if (to.name === "Login" && isAuth) next({ name: "home" });
  else next();
});
export default router;
