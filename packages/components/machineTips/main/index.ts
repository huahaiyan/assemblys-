/*
 * @Author:华海燕
 * @Date: 2020-07-30 13:37:27
 * @LastEditTime: 2020-07-31 09:39:06
 * @LastEditors: Please set LastEditors
 * @Description: 机器人提示
 * @FilePath: \assemblys\packages\machinesShell\main\index.ts
 */
import { Component, Vue, Prop, Watch, Emit} from 'vue-property-decorator';
import imgs from '../../../assets/MachinesShell1.gif';
@Component
export default class MachineTipsTs extends Vue {
    @Prop() public pMsg: string|undefined;
    // @ts-ignore
    public msg = '';
     // @ts-ignore
    public imgs = imgs;
    public created() {
        if ( this.pMsg) {
            this.msg = this.pMsg;
        }
    }
     @Watch('pMsg')
        // tslint:disable-next-line:no-trailing-whitespace
     public onChangeValue( newVal: string, oldVal: string) {   
            if (newVal !== oldVal) {
                // @ts-ignore
                this.pMsg = this.pMsg;
            }
    }
    @Emit('selectCallback')
    // tslint:disable-next-line:no-empty
    public selectCallback() {}
}
