/*
 * @Description: mongodb
 * @Author: 徐长剑
 * @Date: 2019-11-27 17:47:24
 * @LastEditTime: 2019-11-28 10:26:55
 * @LastEditors: 徐长剑
 */
import { MongooseModule } from '@nestjs/mongoose';
import Config from '../config/index';

const { username, host, port, database, password } = Config.Mongodb;
const DB_URL = `mongodb://${username}:${password}@${host}:${port}/${database}`;

export default MongooseModule.forRoot(DB_URL);
