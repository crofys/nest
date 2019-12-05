/*
 * @Description: post.schema
 * @Author: 徐长剑
 * @Date: 2019-11-27 18:28:22
 * @LastEditTime: 2019-11-28 10:52:45
 * @LastEditors: 徐长剑
 */
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
@Entity('Post')
export class Post {
  @ObjectIdColumn({
    comment: '自增ID',
  })
  id: ObjectID;

  @Column({
    comment: '昵称',
  })
  nickname: string;

  @Column({
    comment: '品种',
  })
  species: string;
}
