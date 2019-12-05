/*
 * @Description: 入科文件
 * @Author: 徐长剑
 * @Date: 2019-11-20 15:02:12
 * @LastEditTime: 2019-11-27 17:54:06
 * @LastEditors: 徐长剑
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import Log from './plugins/log';
import SwaggerPlugin from './plugins/swagger';
import Config from './config/index';

global['G_CONFIG'] = Config;
global['Log'] = Log;

async function start() {
  const app = await NestFactory.create(AppModule);
  // 设置swager
  SwaggerPlugin(app, Config.Swagger);

  await app.listen(Config.Port);

  Log.info('server is run in http://127.0.0.1:' + Config.Port);
}
start();
