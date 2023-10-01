import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class AuthService {
  private users = [
    {
      id: 0,
      name: 'Ariel',
      email: 'Ariel@gmail.com',
      password: 'Ariirii',
      role: 'employe',
    },
    {
      id: 1,
      name: 'Armel',
      email: 'Armel@gmail.com',
      password: 'Amimi',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Willy',
      email: 'Willy@gmail.com',
      password: 'Willilli',
      role: 'employe',
    },
  ];

  getAuth(role?: 'admin' | 'employe') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new Error('Not users');
    return user;
  }
  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: Date.now(),
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return;
    });
    return this.getUser(id);
  }

  removeUser(id: number) {
    const toBeRemoved = this.getUser(id);
    this.users = this.users.filter((users) => users.id !== id);
    return toBeRemoved;
  }
}
