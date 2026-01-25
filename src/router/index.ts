import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('@/pages/TodoPage.vue'),
  },
]

if (import.meta.env.DEV) {
  routes.push({
    path: '/dev',
    name: 'Dev',
    component: () => import('@/pages/dev/ComponentPreviewPage.vue'),
  })
}

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
