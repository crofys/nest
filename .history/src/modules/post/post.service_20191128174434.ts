/*
 * @Description: post.service
 * @Author: 徐长剑
 * @Date: 2019-11-28 10:29:39
 * @LastEditTime: 2019-11-28 17:44:34
 * @LastEditors: 徐长剑
 */
import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { Curd, CurdService } from '../../utils/curd/index';

@Injectable()
@Curd({
  model: {
    type: Post,
  },
})
export class PostService extends CurdService<Post>{
  constructor(
    @InjectRepository(Post) private readonly postModel: Repository<Post>,
  ) {
    super();
  }
}

console.log(Reflect.ownKeys(PostService.prototype), '====++PostService++'); // 'A'
