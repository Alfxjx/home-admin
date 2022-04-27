import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { MyLogger } from 'src/shared/logger/logger.service.';
import { createUserDto } from './dto/create-user.dto';
import { signinDto } from './dto/signin.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private readonly logger = new MyLogger(UserController.name);

  @Get(':id')
  async userInfo(@Param('id') id: string): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Post('signin')
  async signin(@Body() req: signinDto) {
    const res = await this.userService.signin(req);
    return res;
  }

  @Post('signup')
  async signup(@Body() requestData: createUserDto) {
    const res = await this.userService.createUser(requestData);
    if (!res) {
      throw new HttpException('error happens', 400);
    }
    return res;
  }
}
