/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-28 14:06:36
 * @LastEditors: 徐长剑
 */

export interface ICurd {
  model: {
    type: any;
  };
}
export const Curd = (options: ICurd): ClassDecorator => {
  return (target, key: string) => {
    // return class
    console.log(target, 'target', key);
  };
};
