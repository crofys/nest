/*
 * @Description: mongodb
 * @Author: 徐长剑
 * @Date: 2019-11-27 17:47:24
 * @LastEditTime: 2019-11-28 10:49:18
 * @LastEditors: 徐长剑
 */
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import Config from '../config/index';

const { username, host, port, database, password } = Config.Mongodb;
// const DB_URL = `mongodb://${username}:${password}@${host}:${port}/${database}`;

// export default MongooseModule.forRoot(DB_URL);

export default TypeOrmModule.forRoot(
  {
    type: 'mongodb',
    host,
    port,
    username,
    password,
    database,
    entities: [],
    synchronize: true,
  }
)

