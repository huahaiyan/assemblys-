/*
 * @Author:华海燕
 * @Date: 2020-07-30 13:37:27
 * @LastEditTime: 2020-07-31 08:42:09
 * @LastEditors: Please set LastEditors
 * @Description: 机器人弹层
 * @FilePath: \assemblys\packages\machinesShell\main\index.ts
 */
import { Component, Vue, Prop, Watch, Emit} from 'vue-property-decorator';
import Machines from '../../../entity/machines';
import imgs from '../../../assets/MachinesShell.gif';
@Component
export default class MachineTipsTs extends Vue {
    @Prop() public bnt1: number|undefined;
    // @ts-ignore
    @Prop() public pData: Machines|undefined;
    @Prop() public pshow: boolean|undefined;
    public show = true;
     // @ts-ignore
    public data: Machines = new Machines();
    public imgs = imgs;
    public created() {
        if ( this.pData) {
            this.data = this.pData;
        }
        this.show = this.pshow ? this.pshow : true;
        console.log('date', this.data);
    }
     @Watch('pData')
        // tslint:disable-next-line:no-trailing-whitespace
     public onChangeValue( newVal: Machines, oldVal: Machines) {   
            if (newVal !== oldVal) {
                // @ts-ignore
                this.data = this.pData;
            }
    }
    @Emit('selectCallback')
    // tslint:disable-next-line:no-empty
    public selectCallback() {}
    @Emit('goCallback')
    // tslint:disable-next-line:no-empty
    public goCallback() {}
    // 关闭
    public close() {
        this.show = false;
    }
}
