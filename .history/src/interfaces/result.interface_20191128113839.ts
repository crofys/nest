/*
 * @Description: 
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:37:35
 * @LastEditTime: 2019-11-28 11:38:38
 * @LastEditors: 徐长剑
 */
export interface IResult<T> {
  s: boolean;
  m: string;
  d?: T;
}
