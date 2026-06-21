import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/projects/trendle",
    name: "ProjectsTrendle",
    component: () => import("@/views/ProjectView.vue"),
    props: { project: "trendle" },
  },
  {
    path: "/projects/ml",
    name: "ProjectsML",
    component: () => import("@/views/ProjectView.vue"),
    props: { project: "ml" },
  },
  {
    path: "/projects/butter",
    name: "ProjectButter",
    component: () => import("@/views/ProjectView.vue"),
    props: { project: "butter" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) return savedPosition;
    else return { top: 0 };
  },
});

export default router;
