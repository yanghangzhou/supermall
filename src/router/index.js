import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: { name: '404' },
  // },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '测试'
    },
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/login/login.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
