/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-28 14:09:41
 * @LastEditors: 徐长剑
 */

export interface ICurd {
  model: {
    type: any;
  };
}
export const Test = (options: ICurd): ClassDecorator => {
  return (target: any) => {
    // return class
    console.log(Reflect.defineMetadata('classMetaData','hahah', target)); // 'A'
    console.log(target, 'target');
  };
};
export const Curd = (options: ICurd): ClassDecorator => {
  return (target: any) => {
    // return class
    console.log(Reflect.getMetadata('inClass', target)); // 'A'
    console.log(target, 'target');
  };
};
