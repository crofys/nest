/*
 * @Description: curd.interface
 * @Author: 徐长剑
 * @Date: 2019-11-28 16:21:45
 * @LastEditTime: 2019-11-28 17:02:22
 * @LastEditors: 徐长剑
 */
export interface ICurdService {
  find?(): Promise<{ list: any[]; total: number }>;
  create?(param: any): Promise<any>;
  update?(param: any): Promise<void>;
  delete?(id: number): Promise<void>;
  findOneById?(id: number): Promise<any>;
}
export interface IServiceOption {
  required?: boolean;
}
export interface ICurd {
  model: {
    type: any;
  };
  service?: IServiceOption[];
}
