/*
 * @Author: 华海燕
 * @Date: 2020-07-30 13:47:23
 * @LastEditTime: 2020-07-30 15:38:34
 * @LastEditors: Please set LastEditors
 * @Description: 机器人
 * @FilePath: \assemblys\packages\entity\machines.ts
 */ 
export default class Machines {
    public bntNumber = 1; // 默认值
    public bntText: string[] = []; // 按钮文字
    public msgContent: string = ''; // 文本内容
    public MachinesMsg: string = ''; // 机器人提示内容
    constructor(bntNumber: number, bntText: string[], msgContent: string, MachinesMsg: string){
        this.MachinesMsg = MachinesMsg;
        this.bntText = bntText;
        this.msgContent = msgContent;
    }
}