/*
 * @Description: curd.interface
 * @Author: 徐长剑
 * @Date: 2019-11-28 16:21:45
 * @LastEditTime: 2019-11-28 18:12:21
 * @LastEditors: 徐长剑
 */
export abstract class ICurdService<T = any> {
  abstract find(): Promise<{ list: any[]; total: number }>;
  abstract create(param: T): Promise<T>;
  abstract update(id: number, param: T): Promise<void>;
  abstract delete(id: number): Promise<void>;
  abstract findOneById(id: number): Promise<T>;
}

// export interface IServiceOption {
//   name: keyof ICurdService;
// }
export interface IServiceOption {
  name: keyof ICurdService;
}
export interface ICurd {
  service: ICurdService;
}
