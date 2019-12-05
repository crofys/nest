/*
 * @Description: curd.interface
 * @Author: 徐长剑
 * @Date: 2019-11-28 16:21:45
 * @LastEditTime: 2019-11-28 17:36:15
 * @LastEditors: 徐长剑
 */
// export abstract class ICurdService {
//   find?(): Promise<{ list: any[]; total: number }>;
//   create?(param: any): Promise<any>;
//   update?(id: number, param: any): Promise<void>;
//   delete?(id: number): Promise<void>;
//   findOneById?(id: number): Promise<any>;
// }
export interface ICurdService {
  find?(): Promise<{ list: any[]; total: number }>;
  create?(param: any): Promise<any>;
  update?(id: number, param: any): Promise<void>;
  delete?(id: number): Promise<void>;
  findOneById?(id: number): Promise<any>;
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
