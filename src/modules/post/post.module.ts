/*
 * @Description: 文章 moudles
 * @Author: 徐长剑
 * @Date: 2019-11-27 18:17:04
 * @LastEditTime: 2019-11-28 10:53:58
 * @LastEditors: 徐长剑
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
