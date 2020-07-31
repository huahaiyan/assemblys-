/*
 * @Author:hhy
 * @Date: 2020-07-30 13:51:26
 * @LastEditTime: 2020-07-31 10:01:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\index.ts
 */ 
import MachinesShellView from './components/machinesShell/index';
import MachineTipsView from './components/machineTips/index';
const components = [ MachinesShellView, MachineTipsView];
// 定义 install 方法
const install = function (Vue: any) {
    // @ts-ignore
    if (install.installed) return;
    // @ts-ignore
    install.installed = true;
    // 遍历并注册全局组件
    components.map((component: any) => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components,
};