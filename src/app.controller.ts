/*
 * @Description: 
 * @Author: 徐长剑
 * @Date: 2019-11-20 15:02:12
 * @LastEditTime: 2019-11-27 17:45:34
 * @LastEditors: 徐长剑
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
