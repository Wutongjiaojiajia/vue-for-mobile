import Vue from 'vue';
import App from './App.vue';  //引入视图router-view
import router from './router';  //引入路由
import store from './store';  //

import './components';  // 扫描全局对象并自动注册 components -> global


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
