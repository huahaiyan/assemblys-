<!--
 * @Author: your name
 * @Date: 2020-07-30 13:37:39
 * @LastEditTime: 2020-07-31 10:59:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \assemblys\packages\machinesShell\main\index.vue
--> 
<template>
    <div class="assemblyspage assemblysMachinesShell">
        <div :class="data.show?'assemblysLayer sMachinesShellBox':'hide'">
            <div class="contentBox">
                <div class="contentMsg">
                    <div class="imgBox">
                         <img class="Shell" :src="imgs"/>
                         <!-- <p class="leftMsg">
                             测试
                         </p> -->
                    </div>
                    <div class="tipsBox">
                        {{data.msgContent}}
                    </div>
                </div>
            <div class="bountsBox">
                <div v-if="data.bntNumber===1" class="bnts bnt1" >
                    <span @click="selectCallback"  v-if="data.bntText===undefined">查看记录</span>
                </div>
                <div v-if="data.bntNumber===2" class="assemblFilexBetween bnts bnt2" >
                    <span @click="selectCallback" class="" v-if="data.bntText===undefined">查看记录</span>
                    <span @click="goCallback" v-if="data.bntText===undefined">去录入</span>
                </div>  
            </div>
             <span @click="close" class="closeBnt">x</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import MachinesShellTs from './index';
export default class MachinesShellView extends MachinesShellTs {}
</script>

<style lang="less" scoped>
      @import url('../../../common/common.less');
    @import url('./index.less');
</style>