/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-28 17:29:13
 * @LastEditors: 徐长剑
 */

import { CurdService } from './curd.service';
import { ICurd, IServiceOption } from './curd.interface';

enum EService {
  find = {
    name: 'find',
  },
}

export const Curd = (options: ICurd): ClassDecorator => {
  return (target: any) => {
    const { model, service = [] } = options;
    const servicePrototype: any = target.prototype;
    const curdService: any = new CurdService(model);
    // -------待开发 现在到动态插参数了

    // console.log(allowMethod, 'allowMethod');
    service.map(key => {
      const { name } = key;
      Reflect.defineProperty(target, name, {
        value: () => {
          return curdService[name];
        },
      });
    });
    console.log(Reflect.ownKeys(CurdService.prototype), '===='); // 'A'
    console.log(curdService, '==curdService=='); // 'A'
    console.log(Object.getOwnPropertyNames(curdService.__proto__), '===='); // 'A'
    console.log(
      Reflect.getMetadata('classMetaData', target),
      'Reflect.getMetadata',
    ); // 'A'
    console.log(target, 'target');
  };
};
