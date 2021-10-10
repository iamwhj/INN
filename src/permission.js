import router from './router/index.js'
import Cookies from 'js-cookie'
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (!Cookies.get('token')) {
      next({path: '/login'})
    } else {
      next()
    }
  } else {
    next()
  } 
})