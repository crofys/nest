import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';
import { IResult } from '../../interfaces/result.interface';
import { Curd, ICurdService, CurdService } from '../../utils/curd/index';

@Controller('post')
@ApiUseTags('文章')
@Curd({
  service: 'postService',
  methods: {
    find: {
      ApiOperation: { title: '文章列表' },
    },
  },
})
export class PostController {
  constructor(@Inject(PostService) private readonly postService: PostService) {}
  // @Get()
  // @ApiOperation({ title: '列表' })
  // async index(): Promise<IResult<any>> {
  //   const res = await this.postService.find();
  //   return {
  //     s: true,
  //     m: '查询成功',
  //     d: res,
  //   };
  // }
  @Post()
  @ApiOperation({ title: '创建' })
  async create(@Body() body: PostEntity): Promise<IResult> {
    // await this.postService.create(body);
    return {
      s: true,
      m: '创建成功',
    };
  }
}
