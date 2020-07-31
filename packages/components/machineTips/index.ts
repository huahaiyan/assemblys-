/*
 * @Author:华海燕
 * @Date: 2020-07-30 13:35:30
 * @LastEditTime: 2020-07-31 08:45:41
 * @LastEditors: Please set LastEditors
 * @Description: 机器人消信提示
 * @FilePath: \assemblys\packages\machinesShell\index.ts
 */
import MachineTipsView from './main/index.vue';
// tslint:disable-next-line:only-arrow-functions
MachineTipsView.install =  function(Vue: any) {
    Vue.component(MachineTipsView.name, MachineTipsView);
};
export default MachineTipsView;
