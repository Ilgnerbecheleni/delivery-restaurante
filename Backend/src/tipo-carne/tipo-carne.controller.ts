import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoCarneService } from './tipo-carne.service';
import { CreateTipoCarneDto } from './dto/create-tipo-carne.dto';
import { UpdateTipoCarneDto } from './dto/update-tipo-carne.dto';

@Controller('tipo-carne')
export class TipoCarneController {
  constructor(private readonly tipoCarneService: TipoCarneService) {}

  @Post()
  create(@Body() createTipoCarneDto: CreateTipoCarneDto) {
    return this.tipoCarneService.create(createTipoCarneDto);
  }

  @Get()
  findAll() {
    return this.tipoCarneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoCarneService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoCarneDto: UpdateTipoCarneDto) {
    return this.tipoCarneService.update(id, updateTipoCarneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoCarneService.remove(id);
  }
}
