/*
 * @Author: 华海燕
 * @Date: 2020-07-30 13:47:23
 * @LastEditTime: 2020-07-31 10:57:39
 * @LastEditors: Please set LastEditors
 * @Description: 机器人
 * @FilePath: \assemblys\packages\entity\machines.ts
 */ 
export default class Machines {
    public bntNumber = 1; // 默认值
    public bntText: string[] = []; // 按钮文字
    public msgContent: string = ''; // 文本内容
    public MachinesMsg: string = ''; // 机器人提示内容
    public show = true;
    constructor(bntNumber: number, bntText: string[], msgContent: string, MachinesMsg: string, show = true){
        this.MachinesMsg = MachinesMsg;
        this.bntText = bntText;
        this.msgContent = msgContent;
        this.show = show;
    }
}