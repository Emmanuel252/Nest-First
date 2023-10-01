import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from './auth.service';
// import { type } from 'os';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  //GET /ninjas--> [ ]
  @Get()
  getAuth(@Query('role') role: 'admin' | 'employe') {
    return this.authService.getAuth(role);
  }
  @Get(':id')
  getOneAuth(@Param('id') id: number) {
    try {
      return this.authService.getUser(+id);
    } catch (err) {
      throw new NotFoundException();
    }
  }
  @Post(':id')
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.authService.createUser(CreateUserDto);
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.updateUser(+id, UpdateUserDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.authService.removeUser(+id);
  }
}
