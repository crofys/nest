/*
 * @Description: 文章 moudles
 * @Author: 徐长剑
 * @Date: 2019-11-27 18:17:04
 * @LastEditTime: 2019-11-28 10:30:55
 * @LastEditors: 徐长剑
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostSchema } from './post.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
