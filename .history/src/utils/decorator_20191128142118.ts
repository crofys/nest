/*
 * @Description: decorator
 * @Author: 徐长剑
 * @Date: 2019-11-28 11:41:16
 * @LastEditTime: 2019-11-28 14:20:45
 * @LastEditors: 徐长剑
 */
import { Repository } from 'typeorm';

export interface ICurd {
  model: {
    type: any;
  };
}

class CurdService {
  private _model: Repository<any>;
  constructor(model) {
    this._model = model;
  }
  /**
   * 查询
   * @param post Post 实体对象
   */
  async find(): Promise<{ list: any[]; total: number }> {
    const [list, total] = await this.repro.findAndCount();
    return {
      list,
      total,
    };
  }
  /**
   * 创建
   * @param post Post 实体对象
   */
  async create(param: Post): Promise<Post> {
    // delete param.id;
    return this.postModel.save(param);
  }
  /**
   * 删除
   * @param id ID
   */
  async delete(id: number): Promise<void> {
    await this.findOneById(id);
    this.postModel.delete(id);
  }
  /**
   * 更新
   *
   * @param id ID
   * @param cat Cat 实体对象
   */
  async updateCat(id: number, params: Post): Promise<void> {
    await this.findOneById(id);
    delete params.id;
    this.postModel.update(id, params);
  }
  /**
   * 创建
   * @param id ID
   */
  async findOneById(id: number): Promise<Post> {
    const res = await this.postModel.findOne(id);
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
export const Curd = (options: ICurd): ClassDecorator => {
  return (target: any) => {
    // return class
    console.log(Reflect.getMetadata('classMetaData', target), '===='); // 'A'
    console.log(target, 'target');
  };
};
