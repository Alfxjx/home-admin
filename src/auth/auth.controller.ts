import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { signinDto } from 'src/user/dto/signin.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() req: signinDto) {
    const res = await this.authService.login(req);
    return res;
  }

  @Post('signup')
  async signup(@Body() req) {
    const res = await this.authService.signup({
      avatarUrl: '',
      ...req,
    });
    if (!res) {
      throw new HttpException('already has user', 400);
    }
    return res;
  }
}
