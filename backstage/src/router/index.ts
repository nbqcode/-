import { createRouter, createWebHistory } from 'vue-router'
import Layout  from "@/layout/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: Layout,
      children: [
        {
          path: "/console",
          component:()=>import("@/views/console.vue"),
          meta: {
            title:"控制台"
          }
        },
        {
          path: "/system/user",
          component:()=>import("@/views/system/user/index.vue"),
          meta: {
            title:"管理员"
          }
        },
        {
          path: '/system/role',
          component:()=>import("@/views/system/role/index.vue"),
          meta: {
            title:"角色"
          }
        },
        {
          path: '/system/menu',
          component:()=>import("@/views/system/menu/index.vue"),
          meta: {
            title:"系统菜单"
          }
        },
        {
          path: '/work/order',
          component: () => import('@/views/work/order.vue'),
          meta: {
             title:"工单管理"
          }
        },
        {
          path: "/device",
          component:()=>import('@/views/device/index.vue')
        }
        
      ]
    }
  ]
})

export default router
