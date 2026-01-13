import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import MessageView from '@/pages/MessageView.vue'
import PreviewView from '@/pages/PreviewView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Message',
    component: MessageView,
  },
  {
    path: '/preview',
    name: 'Preview',
    component: PreviewView,
  },
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
