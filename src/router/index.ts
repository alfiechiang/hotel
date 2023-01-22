import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('../components/layout/index.vue'),
      children:[
        {
          path: 'person',
          name: 'person',
          component: () => import('../views/personal/index.vue')
        },

        {
          path: 'role',
          name: 'role',
          component: () => import('../views/role/index.vue')
        },

        {
          path: 'upload',
          name: 'upload',
          component: () => import('../views/upload/index.vue')
        },
        {
          path: 'roomtype',
          name: 'roomtype',
          component: () => import('../views/room_type/index.vue')
        },
      ]
    }
  ]
})

export default router
