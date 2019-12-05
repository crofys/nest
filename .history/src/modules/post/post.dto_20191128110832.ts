/*
 * @Description: post.dto.ts
 * @Author: 徐长剑
 * @Date: 2019-11-27 18:23:41
 * @LastEditTime: 2019-11-27 18:25:29
 * @LastEditors: 徐长剑
 */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostDto {
  @ApiModelProperty({ description: '标题', example: 'Hello World!' })
  @IsNotEmpty({ message: '标题不能为空' })
  title: string;

  @ApiModelProperty({
    description: '描述',
    example: 'This is Hello World article!',
  })
  body: string;
}
