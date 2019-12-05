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
  @Get()
  @ApiOperation({ title: '文章列表' })
  async find(): Promise<IResult<any>> {
    const res = await this.postService.find();
    return {
      s: true,
      m: '查询成功',
      d: res,
    };
  }
  @Post()
  @ApiOperation({ title: '文章创建' })
  async create(@Body() body:PostEntity): Promise<IResult<any>> {
    const res = await this.postService.create(body);
    return {
      s: true,
      m: '查询成功',
      d: res,
    };
  }
}
