import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(): string {
    return 'this action add a new users';
  }

  @Get()
  findAll(): string {
    return 'This action return all the users';
  }
}
