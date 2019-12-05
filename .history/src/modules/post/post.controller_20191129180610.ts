import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';
import { IResult } from '../../interfaces/result.interface';
import { Curd } from '../../utils/curd/index';

@Controller('post')
@ApiUseTags('文章')
// @Curd({
//   name: '文章',
//   service: 'postService',
//   entity: PostEntity,
//   methods: {
//     find: {
//     },
//     create: {
//     },
//   },
// })
export class PostController {
  constructor(@Inject(PostService) private readonly postService: PostService) {}
}
