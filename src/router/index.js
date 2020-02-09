import VueRouter from 'vue-router'
import Vue from 'vue'
import auth from '@/utils/auth'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/', component: Home,
      children: [
        { path: '/', component: Welcome }
      ]
    },
    { path: '*', component: NotFound }
  ]
})
router.beforeEach((to, from, next) => {
  // 如果不是登录页面，而且没有token，拦截到登录页面
  if (to.path !== '/login' && !auth.getUser().token) return next('/login')
  // 其他情况
  next()
})
export default router