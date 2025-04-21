import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoSaladaService } from './tipo-salada.service';
import { CreateTipoSaladaDto } from './dto/create-tipo-salada.dto';
import { UpdateTipoSaladaDto } from './dto/update-tipo-salada.dto';

@Controller('tipo-salada')
export class TipoSaladaController {
  constructor(private readonly tipoSaladaService: TipoSaladaService) {}

  @Post()
  create(@Body() createTipoSaladaDto: CreateTipoSaladaDto) {
    return this.tipoSaladaService.create(createTipoSaladaDto);
  }

  @Get()
  findAll() {
    return this.tipoSaladaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoSaladaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoSaladaDto: UpdateTipoSaladaDto) {
    return this.tipoSaladaService.update(id, updateTipoSaladaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoSaladaService.remove(id);
  }
}
