// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueBus from 'vue-bus'
import ElementUI from 'element-ui' // 引入ui
import 'element-ui/lib/theme-chalk/index.css' // 引入ui
import './style/main.less'

Vue.use(VueBus)
Vue.use(ElementUI, { size: 'small' }) // 引入ui

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
