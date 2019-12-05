/*
 * @Description:
 * @Author: 徐长剑
 * @Date: 2019-11-27 15:42:56
 * @LastEditTime: 2019-11-27 16:41:27
 * @LastEditors: 徐长剑
 */
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export default (app: INestApplication, { Title, Description, Version }) => {
  const options = new DocumentBuilder()
    .setTitle(Title)
    .setDescription(Description)
    .setVersion(Version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

};
