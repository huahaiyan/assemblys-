<!--
 * @Author: your name
 * @Date: 2020-07-30 11:58:15
 * @LastEditTime: 2020-07-31 13:59:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\src\App.vue
--> 
<template>
  <div id="app">
    <MachineTipsView />
    <MachinesShellView :pData='date' @goCallback='go2' @selectCallback='go'></MachinesShellView>
    <div id="nav">
      <router-link to="/">测试首页5</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch, Emit} from 'vue-property-decorator';
@Component
export default class AppVue extends Vue {
  public date = {
    bntNumber: 2,
    msgContent: '我只是测试数据',
    show:true
  };
  public go(){
    alert('goerie');
  }
    public go2(){
    alert('去录入');
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
