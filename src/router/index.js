import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../Layout'
import Main from '../views/Main'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/Main',
    children: [{
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
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
