/*
 * @Description: post.service
 * @Author: 徐长剑
 * @Date: 2019-11-28 10:29:39
 * @LastEditTime: 2019-11-28 10:58:37
 * @LastEditors: 徐长剑
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postModel: Repository<Post>,
  ) {}

  /**
   * 创建
   *
   * @param post Post 实体对象
   */
  async create(param: Post): Promise<Post> {
    delete param.id;

    return this.postModel.save(param);
  }
}
