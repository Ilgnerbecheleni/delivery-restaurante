import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoArrozService } from './tipo-arroz.service';
import { CreateTipoArrozDto } from './dto/create-tipo-arroz.dto';
import { UpdateTipoArrozDto } from './dto/update-tipo-arroz.dto';

@Controller('tipo-arroz')
export class TipoArrozController {
  constructor(private readonly service: TipoArrozService) {}

  @Post()
  create(@Body() dto: CreateTipoArrozDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTipoArrozDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
