import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Inject,
} from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';
import { IResult } from '../../interfaces/result.interface';
import { Curd } from '../../utils/curd/index';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

@Controller('post')
@ApiUseTags('文章')
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
  async create(@Body() body: PostEntity): Promise<IResult<any>> {
    const res = await this.postService.create(body);
    return {
      s: true,
      m: '查询成功',
      d: res,
    };
  }

  @Put(':id')
  @ApiOperation({ title: '文章更新' })
  async update(
    @Param('id') id: string,
    @Body() body: Omit<PostEntity, 'id'>,
  ): Promise<IResult<any>> {
    await this.postService.update(id, body);
    return {
      s: true,
      m: '更新成功',
    };
  }
  @Delete(':id')
  @ApiOperation({ title: '文章删除' })
  async delete(@Param('id') id: string): Promise<IResult<any>> {
    await this.postService.delete(id);
    return {
      s: true,
      m: '删除成功',
    };
  }
  @Get(':id')
  @ApiOperation({ title: '文章详情' })
  async details(@Param('id') id: string): Promise<IResult<any>> {
    const res = await this.postService.findOneById(id);
    return {
      s: true,
      m: '查询成功',
      d: res,
    };
  }
}
