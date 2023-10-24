import { Prisma } from '@prisma/client';

export class Users implements Prisma.UserCreateInput {
  email: string;
  surname: string;
  password: string;
}
