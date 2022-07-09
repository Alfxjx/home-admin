import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BeanService } from './bean.service';

@UseGuards(JwtAuthGuard)
@Controller('bean')
export class BeanController {
  constructor(private readonly bean$: BeanService) { }


  @Get('')
  async findList() {
    console.log('this is get list');
  }

  @Post('add')
  async addNewOne(@Body() beanDTO) { }


  @Post('update')
  async updateCafe(@Body() beanDTO) { }

  @Post('del/:id')
  async delByID(@Param('id') id) { }
}
