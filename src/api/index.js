// 导出一个配置好的axios提供给main使用
import axios from 'axios'
import auth from '@/utils/auth'
import router from '@/router'
import JSONBINGINT from 'json-bigint'
// 配置axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// axios.defaults.headers.Authorization=`Bearer ${auth.getUser().token}`
// 转换响应格式
axios.defaults.transformResponse = [data => {
  try {
    return JSONBINGINT.parse(data)
  } catch (e) {
    return data
  }
}]
axios.interceptors.request.use(config => {
  const user = auth.getUser()
  if (user.token) config.headers.Authorization = `Bearer ${user.token}`
  return config;
}, error => {
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(res => {
  return res
}, err => {
  // token失效，后台会报错
  // err.response响应报文对象
  // err.response.status 状态码
    if (err.response && err.response.status === 401) {
    // 拦截到登录
      // 大家代码：this.$router.push('/login')
      // this  一定不是vue实例，只有vue实例才能调用 $router或$route
      // $router就是路由实例，我们在route/index.js初始化过理由实例
      // $router===router/index.js
      // window.location.href这样跳转可能不会触发路由的相关功能
    router.push('./login')
  }
  return Promise.reject(err)
})

// 导出
export default axios
