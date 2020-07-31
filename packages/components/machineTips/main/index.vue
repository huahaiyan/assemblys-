<!--
 * @Author: your name
 * @Date: 2020-07-30 13:37:39
 * @LastEditTime: 2020-07-31 10:53:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\machinesShell\main\index.vue
--> 
<template>
    <div class="assemblyspage assemblysMachineTips" @click="selectCallback">
        <div class="assemblys_tips_n">
            <img :src="imgs" alt="">
            <div class="assemblys_msg" v-if="msg.length>0">
                <div class="assemblys_msg_n">
                   {{msg}}
                </div>
            </div>
        </div>
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