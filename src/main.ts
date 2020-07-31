/*
 * @Author: your name
 * @Date: 2020-07-30 11:58:15
 * @LastEditTime: 2020-07-30 13:57:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\src\main.ts
 */ 
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import MachinesShellView from '../packages/index';
Vue.use(MachinesShellView);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
