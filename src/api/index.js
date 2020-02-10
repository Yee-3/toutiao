// 导出一个配置好的axios提供给main使用
import axios from 'axios'
import auth from '@/utils/auth'
// 配置axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// axios.defaults.headers.Authorization=`Bearer ${auth.getUser().token}`
axios.interceptors.request.use(config => {
  const user = auth.getUser()
  if (user.token) config.headers.Authorization = `Bearer ${user.token}`
  return config;
}, error => {
    return Promise.reject(error)
})

// 导出
export default axios