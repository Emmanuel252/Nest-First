import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CreateNinjaDto } from '../ninjas/dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  //GET /ninjas?weapon=fast --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    // const service = new NinjasService();
    return this.ninjasService.getNinjas(weapon);
  }

  //Get /ninjas/:id --> {...}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    try {
      // Nest Injecte automatiquement l'url dans la methode
      return this.ninjasService.getNinja(+id);
    } catch (err) {
      if (err instanceof DbE) throw new NotFoundException();
    }
  }

  //POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  //PUT /ninjas/:id --> { ... }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(+id, UpdateNinjaDto);
  }

  //DELETE /ninjas/:id
  @Delete(':id')
  removeNinjas(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
  }
}
