import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../Layout/index.vue'
import Main from '../views/Main/index.vue'

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/Main',
    children: [
      {
        path: '/Main',
        component: Main
      }, {
        path: '/Travel',
        component: () => import('@/views/Travel/index.vue'),
        redirect: '/Travel/cityCard',
        children: [{
          path: 'cityCard',
          component: () => import('@/views/Travel/cityCard.vue')
        }, {
          path: 'cityTravel',
          component: () => import('@/views/Travel/cityTravel.vue')
        }]
      }, {
        path: '/Community',
        component: () => import('@/views/Share/index.vue')
      }, {
        path: '/Statement',
        component: () => import('@/views/Statement/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router