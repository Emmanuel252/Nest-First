import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateNinjaDto } from '../ninjas/dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}
  //GET /ninjas?weapon=fast --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    // const service = new NinjasService();
    return this.ninjaService.getNinjas(weapon);
  }

  //Get /ninjas/:id --> {...}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    // Nest Injecte automatiquement l'url dans la methode
    return { id };
  }

  //POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }

  //PUT /ninjas/:id --> { ... }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return {
      id,
      name: updateNinjaDto,
    };
  }

  //DELETE /ninjas/:id
  @Delete(':id')
  removeNinjas(@Param('id') id: string) {
    return { id };
  }
}
