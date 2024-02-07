import { createRouter, createWebHistory } from 'vue-router'
import Layout  from "@/layout/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: Layout
    }
  ]
})

export default router
