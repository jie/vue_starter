import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import RegistConfirm from '../views/RegistConfirm.vue'
import store from '../store'

console.log('store:', store)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/account/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/account/regist_confirm/:regist_token',
    name: 'RegistConfirm',
    component: RegistConfirm
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('from:', from, ', to:', to)
  console.log('router:', router)
  store.dispatch("user/checkLoginSession")
  next()
})

export default router
