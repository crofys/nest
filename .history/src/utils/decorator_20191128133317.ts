/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-28 13:33:11
 * @LastEditors: 徐长剑
 */
export const Curd = () => {
  return target => {
    console.log(target, 'target');
  };
};
