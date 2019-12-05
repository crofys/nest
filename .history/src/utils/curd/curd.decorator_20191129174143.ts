/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-29 17:41:42
 * @LastEditors: 徐长剑
 */

import { generateCurdController } from './curd.controller';
import { ICurd, IServiceOption, IMethods } from './curd.interface';

const METHOD_OPT: IMethods = {
  find: {
    // title: '列表',
  },
};

export const Curd = (options: ICurd): ClassDecorator => {
  return (target: any) => {
    const { service, methods = METHOD_OPT } = options;

    const curdController: any = generateCurdController(service, methods);

    const controllerPropertys = Object.getOwnPropertyNames(
      curdController.prototype,
    );


    controllerPropertys.map(key => {
      console.log('object', key, methods[key]);
      if (key !== 'constructor' && methods[key]) {
        Reflect.defineProperty(target.prototype, key, {
          value: curdController.prototype[key],
        });
      }
    });
  };
};
