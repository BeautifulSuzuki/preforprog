import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/matlab',
    name: 'MatlabIndex',
    component: () => import('@/views/languages/MatlabIndex.vue')
  },
  {
    path: '/python',
    name: 'PythonIndex',
    component: () => import('@/views/languages/PythonIndex.vue')
  },
  {
    path: '/c',
    name: 'CIndex',
    component: () => import('@/views/languages/CIndex.vue')
  },
  {
    path: '/cpp',
    name: 'CppIndex',
    component: () => import('@/views/languages/CppIndex.vue')
  },
  {
    path: '/javascript',
    name: 'JsIndex',
    component: () => import('@/views/languages/JsIndex.vue')
  },
  {
    path: '/matlab/beginner',
    name: 'MatlabForBeginner',
    component: () => import('@/views/articles/MatlabForBeginner.vue')
  },
  {
    path: '/python/beginner',
    name: 'PythonForBeginner',
    component: () => import('@/views/articles/PythonForBeginner.vue')
  },
  {
    path: '/c/beginner',
    name: 'CForBeginner',
    component: () => import('@/views/articles/CForBeginner.vue')
  },
  // {
  //   path: '/cpp/beginner',
  //   name: 'CppForBeginner',
  //   component: () => import('@/views/articles/CppForBeginner.vue')
  // },
  // {
  //   path: '/js/beginner',
  //   name: 'JsForBeginner',
  //   component: () => import('@/views/articles/JsForBeginner.vue')
  // },
  // 他の記事ルートも同様に追加
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
