/*
 * @Description: curd.interface
 * @Author: 徐长剑
 * @Date: 2019-11-28 16:21:45
 * @LastEditTime: 2019-11-29 18:23:44
 * @LastEditors: 徐长剑
 */

export abstract class ICurdService<T = any> {
  abstract find(): Promise<{ list: any[]; total: number }>;
  abstract create(param: T): Promise<T>;
  abstract update(id: string, param: T): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findOneById(id: string): Promise<T>;
}
export interface IMethodsOpt {
  // title: string;
}

export interface IMethods {
  find?: IMethodsOpt;
  create?: IMethodsOpt;
  update?: IMethodsOpt;
  delete?: IMethodsOpt;
  findOneById?: IMethodsOpt;
}

export interface IServiceOption {
  name: keyof ICurdService;
}
export interface ICurd {
  /**
   * 模块名称
   */
  name: string;
  /**
   * service名称
   */
  service: string;
  /**
   * 实体
   */
  entity: any;
  /**
   * 扩展的方法
   */
  methods: IMethods;
}
