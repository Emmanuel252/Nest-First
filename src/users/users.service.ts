import { PrismaService } from 'src/prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from './user.model';
{
}

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getAllUser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
