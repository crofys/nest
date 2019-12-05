import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';
import { IResult } from '../../interfaces/result.interface';
import { Curd } from '../../utils/curd/index';

@Controller('post')
@ApiUseTags('文章')
@Curd({
  service: 'postService',
  methods: {
    
  },
})
export class PostController {
  constructor(@Inject(PostService) private readonly postService: PostService) {}
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
