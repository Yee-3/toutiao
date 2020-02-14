// 基于vue的插件
import MyBread from '@/components/my-bread'
import MyChannel from '@/components/my-channel'
export default {
  install(Vue) {
    Vue.component(MyBread.name, MyBread)
    Vue.component(MyChannel.name, MyChannel)
  }
}