/*
 * @Description:
 * @Author: 徐长剑
 * @Date: 2019-11-28 14:53:34
 * @LastEditTime: 2019-11-28 18:33:50
 * @LastEditors: 徐长剑
 */
// import { Repository } from 'typeorm';
// import { HttpException } from '@nestjs/common';
// import { ICurdService } from './curd.interface';
// import { InjectRepository } from '@nestjs/typeorm';
import { Get, Post, Body, Inject } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { ICurdService } from './curd.interface';
import { IResult } from '../../interfaces/result.interface';

const SERVICE = Symbol('service');

@ApiUseTags('文章')
export class CurdController {
  private readonly [SERVICE]: ICurdService;

  constructor(service: ICurdService) {
    this[SERVICE] = service;
  }
  /**
   * 查询
   * @param post Post 实体对象
   */
  @ApiOperation({ title: '列表' })
  @Get()
  async index(): Promise<IResult<any>> {
    const res = await this[SERVICE].find();
    return {
      s: true,
      m: '查询成功',
      d: res,
    };
  }
  // /**
  //  * 创建
  //  * @param post Post 实体对象
  //  */
  // async create(param: any): Promise<any> {
  //   // delete param.id;
  //   return this[repo].save(param);
  // }
  // /**
  //  * 删除
  //  * @param id ID
  //  */
  // async delete(id: number): Promise<void> {
  //   await this.findOneById(id);
  //   this[repo].delete(id);
  // }
  // /**
  //  * 更新
  //  *
  //  * @param id ID
  //  * @param cat 实体对象
  //  */
  // async update(id: number, params: any): Promise<void> {
  //   await this.findOneById(id);
  //   delete params.id;
  //   this[repo].update(id, params);
  // }
  // /**
  //  * 创建
  //  * @param id ID
  //  */
  // async findOneById(id: number): Promise<any> {
  //   const res = await this[repo].findOne(id);
  //   if (!res) {
  //     throw new HttpException(`指定 id=${id} 不存在`, 404);
  //   }
  //   return res;
  // }
}
