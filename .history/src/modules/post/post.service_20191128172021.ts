/*
 * @Description: post.service
 * @Author: 徐长剑
 * @Date: 2019-11-28 10:29:39
 * @LastEditTime: 2019-11-28 17:20:21
 * @LastEditors: 徐长剑
 */
import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { Curd, ICurdService } from '../../utils/curd/index';

@Curd({
  model: {
    type: Post,
  },
})
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postModel: Repository<Post>,
  ) {}

  // /**
  //  * 查询
  //  * @param post Post 实体对象
  //  */
  // async find(): Promise<{ list: Post[]; total: number }> {
  //   const [list, total] = await this.postModel.findAndCount();
  //   return {
  //     list,
  //     total,
  //   };
  // }
  // /**
  //  * 创建
  //  * @param post Post 实体对象
  //  */
  // async create(param: Post): Promise<Post> {
  //   // delete param.id;
  //   return this.postModel.save(param);
  // }
  // /**
  //  * 删除
  //  * @param id ID
  //  */
  // async delete(id: number): Promise<void> {
  //   await this.findOneById(id);
  //   this.postModel.delete(id);
  // }
  // /**
  //  * 更新
  //  *
  //  * @param id ID
  //  * @param cat Cat 实体对象
  //  */
  // async updateCat(id: number, params: Post): Promise<void> {
  //   await this.findOneById(id);
  //   delete params.id;
  //   this.postModel.update(id, params);
  // }
  // /**
  //  * 创建
  //  * @param id ID
  //  */
  // async findOneById(id: number): Promise<Post> {
  //   const res = await this.postModel.findOne(id);
  //   if (!res) {
  //     throw new HttpException(`指定 id=${id} 不存在`, 404);
  //   }
  //   return res;
  // }
}

console.log(Reflect.getMetadata('classMetaData', PostService), '====++++'); // 'A'
