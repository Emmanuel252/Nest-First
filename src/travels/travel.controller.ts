import { TravelService } from './travel.service';
import { Travel } from './travel.model';
import {
  Body,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Controller,
} from '@nestjs/common';

@Controller('api/xperience/travel')
export class TravelController {
  constructor(private readonly travelServices: TravelService) {}

  @Get()
  async getAllTravel(): Promise<Travel[]> {
    return this.travelServices.getAllTravel();
  }

  @Post()
  async postTravel(@Body() postData: Travel): Promise<Travel> {
    return this.travelServices.createTravel(postData);
  }

  @Get(':id')
  async getTravel(@Body() id: number): Promise<Travel | null> {
    return this.travelServices.getTravel(id);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<Travel> {
    return this.travelServices.deleteTravel(id);
  }

  @Put(':id')
  async updateTravel(
    @Param('id') id: number,
    @Body() postData: Travel,
  ): Promise<Travel> {
    return this.travelServices.updateTravel(id, postData);
  }
}
