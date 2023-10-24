import { PrismaService } from 'src/prisma.service';
import { Travel } from './travel.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TravelService {
  constructor(private prisma: PrismaService) {}

  async getAllTravel(): Promise<Travel[]> {
    return this.prisma.travel.findMany();
  }

  async getTravel(id: Number): Promise<Travel | null> {
    return this.prisma.travel.findUnique({ where: { id: Number(id) } });
  }

  async createTravel(data: Travel): Promise<Travel> {
    return this.prisma.travel.create({
      data,
    });
  }

  async updateTravel(id: Number, data: Travel): Promise<Travel> {
    return this.prisma.travel.update({
      where: { id: Number(id) },
      data: { country: data.country, city: data.city },
    });
  }

  async deleteTravel(id: Number): Promise<Travel> {
    return this.prisma.travel.delete({
      where: { id: Number(id) },
    });
  }
}
