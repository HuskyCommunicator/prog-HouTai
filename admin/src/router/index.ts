import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },

    {
      name: 'menu',
      path: '/menu',
      redirect: '/home',
      component: () => import('@/views/menu/menu.vue'),
      children: [
        {
          name: 'home',
          path: '/home',
          component: () => import('@/views/home/home.vue')
        },
        {
          name: 'set',
          path: '/set',
          component: () => import('@/views/systemSet/set.vue')
        }
      ]
    }
  ]
})

export default router
