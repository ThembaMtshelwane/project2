import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import JobsView from "@/view/JobsView.vue";
import NotFoundView from "@/view/NotFoundView.vue";
import JobView from "@/view/JobView.vue";
import path from "path";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: () => import("@/view/AddJobView.vue"),
    },
    {
      path: "/jobs/edit/:id",
      name: "edit-job",
      component: () => import("@/view/EditJobView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
