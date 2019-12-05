/*
 * @Description: mongodb
 * @Author: 徐长剑
 * @Date: 2019-11-27 17:47:24
 * @LastEditTime: 2019-12-05 18:46:06
 * @LastEditors: 徐长剑
 */
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import Config from '../config/index';

const { username, host, port, database, password } = Config.Mongodb;
// const DB_URL = `mongodb://${username}:${password}@${host}:${port}/${database}`;

// export default MongooseModule.forRoot(DB_URL);
console.log(username, host, port, database, password, '====');
export default TypeOrmModule.forRoot({
  type: 'mongodb',
  host: '49.232.47.8',
  port: 27017,
  username: 'admin',
  password: 'F5hzeOC9IUQSPyLa',
  database: 'docs',
  entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')],
  synchronize: true,
  useUnifiedTopology: true,
});
