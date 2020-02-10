// 导出一个配置好的axios提供给main使用
import axios from 'axios'
import auth from '@/utils/auth'
// 配置axios
axios.defaults.baseUrl = 'http://ttapi.research.itcast.cn/mp/v1_0/'
axios.defaults.headers.Authorization=`Bearer ${auth.getUser().token}`

// 导出
export default axios