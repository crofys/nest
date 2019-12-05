/*
 * @Description:
 * @Author: 徐长剑
 * @Date: 2019-11-28 14:53:34
 * @LastEditTime: 2019-11-29 17:42:20
 * @LastEditors: 徐长剑
 */
import { Get, Post, Body, Inject } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { IResult } from '../../interfaces/result.interface';
import { IMethods } from './curd.interface';

export function generateCurdController(service, methods: IMethods): any {
  // console.log(config.find.title, '====config.find.title');
  const { name } = methods;
  class CurdController {
    /**
     * 查询
     * @param post Post 实体对象
     */
    @Get()
    @ApiOperation({ title: name + '文章' })
    async find(): Promise<IResult<any>> {
      const res = await this[service].find();
      return {
        s: true,
        m: '查询成功',
        d: res,
      };
    }
  }
  return CurdController;
}
// export class CurdController {
//   private readonly postService: ICurdService;

//   constructor(service: string) {
//     this[SERVICE] = this[service];
//   }
//   /**
//    * 查询
//    * @param post Post 实体对象
//    */
//   @Get()
//   @ApiOperation({ title: '列表' })
//   async index(): Promise<IResult<any>> {
//     console.log('只看了', this);
//     const res = await this.postService.find();
//     return {
//       s: true,
//       m: '查询成功',
//       d: res,
//     };
//   }
//   // /**
//   //  * 创建
//   //  * @param post Post 实体对象
//   //  */
//   // async create(param: any): Promise<any> {
//   //   // delete param.id;
//   //   return this[repo].save(param);
//   // }
//   // /**
//   //  * 删除
//   //  * @param id ID
//   //  */
//   // async delete(id: number): Promise<void> {
//   //   await this.findOneById(id);
//   //   this[repo].delete(id);
//   // }
//   // /**
//   //  * 更新
//   //  *
//   //  * @param id ID
//   //  * @param cat 实体对象
//   //  */
//   // async update(id: number, params: any): Promise<void> {
//   //   await this.findOneById(id);
//   //   delete params.id;
//   //   this[repo].update(id, params);
//   // }
//   // /**
//   //  * 创建
//   //  * @param id ID
//   //  */
//   // async findOneById(id: number): Promise<any> {
//   //   const res = await this[repo].findOne(id);
//   //   if (!res) {
//   //     throw new HttpException(`指定 id=${id} 不存在`, 404);
//   //   }
//   //   return res;
//   // }
// }

// export function cc() {}
// cc.prototype.findOneById = async (id: number): Promise<any> => {
//   const res = await this['repo'].findOne(id);
//   if (!res) {
//     // throw new HttpException(`指定 id=${id} 不存在`, 404);
//   }
//   return res;
// };
