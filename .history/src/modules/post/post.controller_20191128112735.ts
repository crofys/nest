import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { PostDto } from './post.dto';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';

@Controller('post')
@ApiUseTags('文章')
export class PostController {
  constructor(@Inject(PostService) private readonly PostService: PostService) {}
  @Get()
  @ApiOperation({ title: '列表' })
  async index(): Promise<any> {
    // const res = await PostModel.find({});
    const res = await this.PostService.find();
    return {
      s: true,
      m: '查询成功',
      d: res,
    };
  }
  @Post()
  @ApiOperation({ title: '创建' })
  async create(@Body() body: PostEntity): Promise<any> {
    await this.PostService.create(body);
    return {
      s: true,
      m: '创建成功',
    };
  }
}
