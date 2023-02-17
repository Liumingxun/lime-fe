import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { useRouteMeta } from '../composable'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: { name: 'Home' },
  },
  {
    path: '/',
    redirect: { name: 'Home' },
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('../view/login/index.vue'),
    meta: useRouteMeta(),
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('../view/home/index.vue'),
    meta: useRouteMeta(),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
//     console.log(to.fullPath)
// })

// installSessionGuard(router)

export default router
