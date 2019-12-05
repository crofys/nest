/*
 * @Description: post.schema
 * @Author: 徐长剑
 * @Date: 2019-11-27 18:28:22
 * @LastEditTime: 2019-11-28 10:28:23
 * @LastEditors: 徐长剑
 */
import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
});
