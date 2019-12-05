/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-29 17:28:13
 * @LastEditors: 徐长剑
 */

import { generateCurdController } from './curd.controller';
import { ICurd, IServiceOption } from './curd.interface';

const METHOD_OPT = [
  {
    find: {
      ApiOperation: { title: '列表' },
    },
  },
];

export const Curd = (options: ICurd): ClassDecorator => {
  return (target: any) => {
    const { service, methods = METHOD_OPT } = options;
    const curdController: any = generateCurdController(methods, '文章列表');
    const controllerPropertys = Object.getOwnPropertyNames(curdController.prototype);

    controllerPropertys.map(key => {
      if (key !== 'constructor' && methods[key]) {
        Reflect.defineProperty(target.prototype, key, {
          value: curdController.prototype[key],
        });
      }
    });
  };
};
