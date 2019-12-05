/*
 * @Description: post.schema
 * @Author: 徐长剑
 * @Date: 2019-11-27 18:28:22
 * @LastEditTime: 2019-11-29 18:46:13
 * @LastEditors: 徐长剑
 */
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity('Post')
export class Post {
  @ApiModelProperty({ description: 'ID'})
  @ObjectIdColumn()
  id: ObjectID;

  @ApiModelProperty({
    description: '标题',
    example: 'This is Hello World article!',
  })
  @IsNotEmpty({ message: '标题不能为空' })
  @Column()
  title: string;

  @Column({
    comment: '内容',
  })
  body: string;
}
