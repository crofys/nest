/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-28 14:52:19
 * @LastEditors: 徐长剑
 */
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common';

export interface ICurd {
  model: {
    type: any;
  };
}

class CurdService {
  private repo: Repository<any>;

  constructor(model) {
    this.repo = model;
  }
  /**
   * 查询
   * @param post Post 实体对象
   */
  async find(): Promise<{ list: any[]; total: number }> {
    const [list, total] = await this.repo.findAndCount();
    return {
      list,
      total,
    };
  }
  /**
   * 创建
   * @param post Post 实体对象
   */
  async create(param: any): Promise<any> {
    // delete param.id;
    return this.repo.save(param);
  }
  /**
   * 删除
   * @param id ID
   */
  async delete(id: number): Promise<void> {
    await this.findOneById(id);
    this.repo.delete(id);
  }
  /**
   * 更新
   *
   * @param id ID
   * @param cat Cat 实体对象
   */
  async updateCat(id: number, params: any): Promise<void> {
    await this.findOneById(id);
    delete params.id;
    this.repo.update(id, params);
  }
  /**
   * 创建
   * @param id ID
   */
  async findOneById(id: number): Promise<any> {
    const res = await this.repo.findOne(id);
    if (!res) {
      throw new HttpException(`指定 id=${id} 不存在`, 404);
    }
    return res;
  }
}
export const Test = (): ClassDecorator => {
  return (target: any) => {
    // return class
    Reflect.defineMetadata('classMetaData', 'hahah', target);
  };
};
enum allowMethod {
  find = 'find',
  create = 'create',
}
// const allowMethod = []
export const Curd = (options: ICurd): ClassDecorator => {
  return (target: any) => {
    // return class
    const { model } = options;
    const curdService: any = new CurdService(model);
    console.log(allowMethod, 'allowMethod');
    console.log(Reflect.ownKeys(CurdService.prototype), '===='); // 'A'
    console.log(curdService, '==curdService=='); // 'A'
    console.log(Object.getOwnPropertyNames(curdService.__proto__), '===='); // 'A'
    console.log(
      Reflect.getMetadata('classMetaData', target),
      'Reflect.getMetadata',
    ); // 'A'
    console.log(target, 'target');
  };
};
