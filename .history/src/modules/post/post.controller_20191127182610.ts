import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { PostDto } from './post.dto';

@Controller('post')
@ApiUseTags('文章')
export class PostController {
  @Get()
  @ApiOperation({ title: '列表' })
  async index(): Promise<any> {
    // const res = await PostModel.find({});
    const res = {};
    return res;
  }
  @Post()
  @ApiOperation({ title: '创建' })
  async create(@Body() body: PostDto): Promise<any> {
    // const res = await PostModel.create(body);
    const res = {};
    return res;
  }
}
