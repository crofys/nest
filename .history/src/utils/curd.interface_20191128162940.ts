/*
 * @Description: curd.interface
 * @Author: 徐长剑
 * @Date: 2019-11-28 16:21:45
 * @LastEditTime: 2019-11-28 16:29:40
 * @LastEditors: 徐长剑
 */
export interface IServiceConf {
  required?: boolean;
}
export interface ICurd {
  model: {
    type: any;
  };
  service?: any[];
}
