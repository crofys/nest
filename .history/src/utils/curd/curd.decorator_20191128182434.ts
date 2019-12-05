/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-28 18:24:34
 * @LastEditors: 徐长剑
 */

import { CurdController } from './curd.controller';
import { ICurd, IServiceOption } from './curd.interface';

const SERVICE = [
  {
    name: 'find',
  },
  {
    name: 'create',
  },
  {
    name: 'update',
  },
  {
    name: 'delete',
  },
  {
    name: 'findOneById',
  },
];

export const Curd = (options: ICurd): ClassDecorator => {
  return (target: any) => {
    const { service } = options;
    const servicePrototype: any = target.prototype;
    const curdController: any = new CurdController(service);
    const controllerList = Reflect.ownKeys(curdController);
    // -------待开发 现在到动态插参数了
    controllerList.map(key => {
      // const { name } = key;
      Reflect.defineProperty(target.prototype, key, {
        value: () => {
          return controllerList[key];
        },
      });
    });
    // console.log(Reflect.ownKeys(CurdService.prototype), '===='); // 'A'
    // console.log(Object.getOwnPropertyNames(curdService.__proto__), '===='); // 'A'
  };
};
