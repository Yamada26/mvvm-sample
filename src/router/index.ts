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
