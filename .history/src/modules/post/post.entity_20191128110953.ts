/*
 * @Description: post.schema
 * @Author: 徐长剑
 * @Date: 2019-11-27 18:28:22
 * @LastEditTime: 2019-11-28 11:09:53
 * @LastEditors: 徐长剑
 */
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
@Entity('Post')
export class Post {
  // @ObjectIdColumn({
  //   comment: 'ID',
  // })
  // id?: ObjectID;

  @Column({
    comment: '标题',
  })
  title: string;

  @Column({
    comment: '内容',
  })
  body: string;
}
