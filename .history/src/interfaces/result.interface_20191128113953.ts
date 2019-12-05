/*
 * @Description: 返回结果
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:37:35
 * @LastEditTime: 2019-11-28 11:39:52
 * @LastEditors: 徐长剑
 */
export interface IResult<T = any> {
  s: boolean;
  m: string;
  d?: T;
}
