import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoFeijaoService } from './tipo-feijao.service';
import { CreateTipoFeijaoDto } from './dto/create-tipo-feijao.dto';
import { UpdateTipoFeijaoDto } from './dto/update-tipo-feijao.dto';

@Controller('tipo-feijao')
export class TipoFeijaoController {
  constructor(private readonly tipoFeijaoService: TipoFeijaoService) {}

  @Post()
  create(@Body() createTipoFeijaoDto: CreateTipoFeijaoDto) {
    return this.tipoFeijaoService.create(createTipoFeijaoDto);
  }

  @Get()
  findAll() {
    return this.tipoFeijaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoFeijaoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoFeijaoDto: UpdateTipoFeijaoDto) {
    return this.tipoFeijaoService.update(id, updateTipoFeijaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoFeijaoService.remove(id);
  }
}
