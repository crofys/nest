/*
 * @Description: app.modules
 * @Author: 徐长剑
 * @Date: 2019-11-20 15:02:12
 * @LastEditTime: 2019-11-28 10:31:03
 * @LastEditors: 徐长剑
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './modules/post/post.module';
import MongodbPlugin from './plugins/mongodb';

@Module({
  imports: [
    MongodbPlugin,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
