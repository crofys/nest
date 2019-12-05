/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-28 14:07:50
 * @LastEditors: 徐长剑
 */

export interface ICurd {
  model: {
    type: any;
  };
}
export const Curd = (options: ICurd): ClassDecorator => {
  return (target: any, key: string) => {
    // return class
    console.log(target, 'target', key);
  };
};
