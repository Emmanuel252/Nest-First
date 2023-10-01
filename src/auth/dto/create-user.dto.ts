// import { IsEnum, MinLength } from 'class-validator';

export class CreateUserDto {
  // @MinLength(3)
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'employe';
}
