<!--
 * @Author: your name
 * @Date: 2020-07-30 13:37:39
 * @LastEditTime: 2020-07-31 08:51:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\machinesShell\main\index.vue
--> 
<template>
    <div class="assemblysMachineTips">
        <div></div>
    </div>
</template>
<script lang="ts">
import MachineTipsTs from './index';
export default class MachineTipsView extends MachineTipsTs {}
</script>

<style lang="less" scoped>
      @import url('../../../common/common.less');
      @import url('./index.less');
</style>