import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CafeService } from './cafe.service';

@UseGuards(JwtAuthGuard)
@Controller('cafe')
export class CafeController {
  constructor(private readonly cafe$: CafeService) {

  }

  @Get('')
  async findList() {
    console.log('this is get list');
  }

  @Post('add')
  async addNewOne(@Body() DTO) { }


  @Post('update')
  async updateCafe(@Body() DTO) { }

  @Post('del/:id')
  async delByID(@Param('id') id) { }
}
