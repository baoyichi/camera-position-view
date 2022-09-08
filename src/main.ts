import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import * as echarts from 'echarts';
import china from 'echarts/map/json/china.json';
echarts.registerMap('china', china);
Vue.prototype.$echarts = echarts;

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/common.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
