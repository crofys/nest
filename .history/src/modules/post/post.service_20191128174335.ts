/*
 * @Description: post.service
 * @Author: 徐长剑
 * @Date: 2019-11-28 10:29:39
 * @LastEditTime: 2019-11-28 17:43:35
 * @LastEditors: 徐长剑
 */
import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { Curd, ICurdService } from '../../utils/curd/index';

@Injectable()
@Curd({
  model: {
    type: Post,
  },
})
export class PostService implements ICurdService{
  constructor(
    @InjectRepository(Post) private readonly postModel: Repository<Post>,
  ) {
    // super();
  }
}

console.log(Reflect.ownKeys(PostService.prototype), '====++PostService++'); // 'A'
