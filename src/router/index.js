import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "ErrorPage",
      component: HomeView,
    },
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        title: "Accueil",
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/services",
      name: "services",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Services.vue"),
    },

    {
      path: "/mentions",
      name: "mentions",
      component: () => import("../components/footer/Mentions.vue"),
    },
    {
      path: "/cgv",
      name: "cgv",
      component: () => import("../components/footer/Cgv.vue"),
    },
    {
      path: "/confidentialite",
      name: "confidentialite",
      component: () => import("../components/footer/Confidentialite.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../components/contact/Contact.vue"),
    },
    {
      path: "/realisations",
      name: "realisations",
      component: () => import("../views/RealisationsView.vue"),
    },
    {
      path: "/confiance",
      name: "confiance",
      component: () => import("../components/clients/clients.vue"),
    },
    {
      path: "/formations",
      name: "formations",
      component: () => import("../views/Formations.vue"),
    },
  ],
});

export default router;
