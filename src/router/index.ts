import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/LoginPage.vue'),
      meta: { title: '登录' },
    },

    {
      path: '',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: () => import('@/views/home/HomePage.vue'),
          name: 'Index',
          meta: { title: '首页', icon: 'dashboard', affix: true }
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/HomePage.vue'),
      meta: { title: '首页' },
    },
  ],
})

export default router
