import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
/**
 * 引入公用方法
 */
import '@/libs/mixin';
/**
 * 注册全局组件
 */
import '@/components/index';

/**
 * 引入初始化css样式
 */
import '@/assets/style/reset.less';

/**
 * 引入路由模块
 */
import router  from './router/index';
/**
 * vuex
 */
import store from './store/store';
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
