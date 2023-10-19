import { Controller, Body, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthenService } from './authen.service';

@Controller('authen')
export class AuthenController {
  constructor(private authenService: AuthenService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authenService.signIn(signInDto.username, signInDto.password);
  }
}
