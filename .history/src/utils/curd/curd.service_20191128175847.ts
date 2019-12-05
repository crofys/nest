/*
 * @Description:
 * @Author: 徐长剑
 * @Date: 2019-11-28 14:53:34
 * @LastEditTime: 2019-11-28 17:58:20
 * @LastEditors: 徐长剑
 */
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common';
import { ICurdService } from './curd.interface';
import { InjectRepository } from '@nestjs/typeorm';

const repo = Symbol('model');

export abstract class CurdService<T> extends ICurdService<T> {
  private readonly [repo]: Repository<any>;

  constructor(model: Repository<T>) {
    super();
    console.log(model, 'model');
    this[repo] = model;
  }
  /**
   * 查询
   * @param post Post 实体对象
   */
  async find(): Promise<{ list: any[]; total: number }> {
    const [list, total] = await this[repo].findAndCount();
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
    return this[repo].save(param);
  }
  /**
   * 删除
   * @param id ID
   */
  async delete(id: number): Promise<void> {
    await this.findOneById(id);
    this[repo].delete(id);
  }
  /**
   * 更新
   *
   * @param id ID
   * @param cat 实体对象
   */
  async update(id: number, params: any): Promise<void> {
    await this.findOneById(id);
    delete params.id;
    this[repo].update(id, params);
  }
  /**
   * 创建
   * @param id ID
   */
  async findOneById(id: number): Promise<any> {
    const res = await this[repo].findOne(id);
    if (!res) {
      throw new HttpException(`指定 id=${id} 不存在`, 404);
    }
    return res;
  }
}
