/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-28 13:38:43
 * @LastEditors: 徐长剑
 */

export interface ICurd {
  model: {
    type: any;
  };
}
export const Curd = ({ model }: ICurd) => {
  return target => {
    console.log(target, 'target');
  };
};
