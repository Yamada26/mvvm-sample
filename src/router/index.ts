import { createRouter, createWebHistory } from 'vue-router'
import MessageView from '@/pages/MessageView.vue'
import PreviewView from '@/pages/PreviewView.vue'

const routes = [
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

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
