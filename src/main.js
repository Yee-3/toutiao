// 导包（第三方\自己的）
import Vue from 'vue'
import App from './App.vue'

// import router from './router/index.js'
// 同上
import router from '@/router'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 使用element-ui
Vue.use(ElementUI)

// 配置vue框架的日志级别 productionTip
// false 不是生产环境级别日志，开发环境日志，日志详细
// true 生产环境级别日志，上线之后部署服务器后，日志简单
Vue.config.productionTip = false

// 根实例
// 使用App.vue注释渲染到#APP容器中
// (componts公用级别组件)(views级别的组件)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// main.js的职责
// 项目需要的资源都需要引入到main.js
// 创建一个vuew根实例