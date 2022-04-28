import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { MyLogger } from 'src/shared/logger/logger.service.';
import { createUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private readonly logger = new MyLogger(UserController.name);

  @Get(':id')
  async userInfo(@Param('id') id: string): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Post('create')
  async create(@Body() requestData: createUserDto) {
    this.logger.log(JSON.stringify(requestData));
    const res = await this.userService.createUser(requestData);
    if (!res) {
      throw new HttpException('error happens', 400);
    }
    return res;
  }
}
