/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-29 17:11:53
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
    const { service, config } = options;
    // const servicePrototype: any = target.prototype;
    const curdController: any = CurdController(service, '文章列表');
    // const curdController: any = new CurdController(service);
    const controllerList = Object.getOwnPropertyNames(curdController.__proto__);

    console.log(curdController, 'contcurdController.prototyperollerList');
    console.log(target, 'controllerList');
    // console.log(Reflect.ownKeys(curdController.prototype), 'controllerList');
    // -------待开发 现在到动态插参数了
    controllerList.map(key => {
      Reflect.defineMetadata('ServiceName', service, curdController);
      // const { name } = key;
      // if (key !== 'constructor') {
      Reflect.defineProperty(target.prototype, key, {
        value: curdController.prototype[key],
      });
      // }
    });

    console.log(target.prototype, 'target.prototype');
    // console.log(Reflect.ownKeys(CurdService.prototype), '===='); // 'A'
    // console.log(Object.getOwnPropertyNames(curdService.__proto__), '===='); // 'A'
  };
};
