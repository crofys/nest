/*
 * @Description: post.schema
 * @Author: 徐长剑
 * @Date: 2019-11-27 18:28:22
 * @LastEditTime: 2019-11-28 10:52:15
 * @LastEditors: 徐长剑
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('cat')
export class Cat {
    /**
     * 自增主键
     */
    @PrimaryGeneratedColumn({
        comment: '自增ID'
    })
    id: number;

    /**
     * 昵称
     */
    @Column({
        comment: '昵称'
    })
    nickname: string;

    /**
     * 品种
     */
    @Column({
        comment: '品种'
    })
    species: string;
}