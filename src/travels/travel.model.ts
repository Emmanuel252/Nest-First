import { Prisma } from '@prisma/client';

export class Travel implements Prisma.TravelCreateInput {
  id: number;
  country: string;
  city: string;
}
