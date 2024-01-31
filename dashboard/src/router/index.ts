import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/layout/index.vue";
const pages = import.meta.glob("@/views/**/*.vue");
const auto_route = [];
for (const [path,component] of Object.entries(pages)) {
  auto_route.push({
    name: Symbol('com_name'),
    path,
    component
    })
}
console.log(auto_route);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "首页",
      },
      component: Layout,
      redirect:"/console",
      children: [
        {
          path: '/console',
          name: "console",
          component:()=>import("@/views/HomeView.vue")
        }
      ]
    },
  ],
});
export default router;
