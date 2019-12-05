/*
 * @Description: post.service
 * @Author: 徐长剑
 * @Date: 2019-11-28 10:29:39
 * @LastEditTime: 2019-11-28 17:26:25
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
 class PostService extends ICurdService {
  constructor(
    @InjectRepository(Post) private readonly postModel: Repository<Post>,
  ) {
    super();
  }
}

console.log(Reflect.getMetadata('classMetaData', PostService), '====++++'); // 'A'
