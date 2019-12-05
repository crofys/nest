/*
 * @Description: curd.interface
 * @Author: 徐长剑
 * @Date: 2019-11-28 16:21:45
 * @LastEditTime: 2019-11-28 17:46:34
 * @LastEditors: 徐长剑
 */
export abstract class ICurdService<T> {
  find?(): Promise<{ list: any[]; total: number }>;
  create?(param: T): Promise<T>;
  update?(id: number, param: T): Promise<void>;
  delete?(id: number): Promise<void>;
  findOneById?(id: number): Promise<T>;
}

export interface IServiceOption {
  name: keyof ICurdService;
}
export interface ICurd {
  model: {
    type: any;
  };
  service?: IServiceOption[];
}
