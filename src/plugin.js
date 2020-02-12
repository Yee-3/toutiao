// 基于vue的插件
import MyBread from '@/components/my-bread'
export default {
  install(Vue) {
    Vue.component(MyBread.name,MyBread)
  }
}