import Vue from 'vue';
import App from './App.vue';  //引入视图router-view
import router from './router';  //引入路由
import store from './store';  //

/** 引入组件 */
import '@/common/vantComponent.js'; //按需引入vant组件
import './components';  // 扫描全局对象并自动注册 components -> global


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
