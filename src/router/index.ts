import { createRouter, createWebHistory } from 'vue-router'

const router  = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/LoginPage.vue'),
      meta: { title: '登录' }
    },
  ],
})

export default router
