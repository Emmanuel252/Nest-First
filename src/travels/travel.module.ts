import { Module } from '@nestjs/common';
import { TravelController } from './travel.controller';
import { TravelService } from './travel.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TravelController],
  providers: [TravelService, PrismaService],
})
export class TravelModule {}
