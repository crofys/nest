/*
 * @Description: post.schema
 * @Author: 徐长剑
 * @Date: 2019-11-27 18:28:22
 * @LastEditTime: 2019-11-28 11:25:03
 * @LastEditors: 徐长剑
 */
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


@Entity('Post')
export class Post {
  @ApiModelProperty({ description: '标题', example: 'Hello World!' })
  @IsNotEmpty({ message: '标题不能为空' })
  @ObjectIdColumn({
    comment: 'ID',
  })
  id?: ObjectID;


  @ApiModelProperty({
    description: '描述',
    example: 'This is Hello World article!',
  })
  @Column({
    comment: '标题',
  })
  title: string;

  @Column({
    comment: '内容',
  })
  body: string;
}
