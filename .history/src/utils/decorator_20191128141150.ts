/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-28 14:11:46
 * @LastEditors: 徐长剑
 */

export interface ICurd {
  model: {
    type: any;
  };
}
export const Test = (): ClassDecorator => {
  return (target: any) => {
    // return class
    Reflect.defineMetadata('classMetaData', 'hahah', target);
  };
};
export const Curd = (options: ICurd): ClassDecorator => {
  return (target: any) => {
    // return class
    console.log(Reflect.getMetadata('classMetaData', target)); // 'A'
    console.log(target, 'target');
  };
};
