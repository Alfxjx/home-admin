import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BeanService } from './bean.service';
import { BeanDTO } from './dto/bean.dto';

@UseGuards(JwtAuthGuard)
@Controller('bean')
export class BeanController {
  constructor(private readonly bean$: BeanService) { }


  @Get('')
  async findList() {
    console.log('this is get list');
    return this.bean$.findAll();
  }

  @Post('add')
  async addNewOne(@Body() DTO: BeanDTO) {
    const res = await this.bean$.addNewOne(DTO);
    return res;
  }


  @Post('update')
  async updateCafe(@Body() DTO: { id: string, dto: BeanDTO }) {
    const res = await this.bean$.updateOne(DTO.id, DTO.dto);
    return res;
  }

  @Post('del/:id')
  async delByID(@Param('id') id) {
    const res = await this.bean$.delByID(id);
    return res;
  }
}
