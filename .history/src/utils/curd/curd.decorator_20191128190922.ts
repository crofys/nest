/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-28 19:09:22
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
    const curdController: any =  CurdController(service);
    // const curdController: any = new CurdController(service);
    const controllerList = Object.getOwnPropertyNames(curdController.__proto__);
    console.log(controllerList, 'controllerList');
    // -------待开发 现在到动态插参数了
    controllerList.map(key => {
      // const { name } = key;
      if (key !== 'constructor') {
        target.prototype[key] = curdController.prototype[key];
        // Reflect.defineProperty(target.prototype, key, {
        //   value: () => {
        //     return curdController[key];
        //   },
        // });
      }
    });

    console.log(target.prototype, 'target.prototype');
    // console.log(Reflect.ownKeys(CurdService.prototype), '===='); // 'A'
    // console.log(Object.getOwnPropertyNames(curdService.__proto__), '===='); // 'A'
  };
};
