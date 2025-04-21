import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoAcompanhamentoService } from './tipo-acompanhamento.service';
import { CreateTipoAcompanhamentoDto } from './dto/create-tipo-acompanhamento.dto';
import { UpdateTipoAcompanhamentoDto } from './dto/update-tipo-acompanhamento.dto';

@Controller('tipo-acompanhamento')
export class TipoAcompanhamentoController {
  constructor(private readonly tipoAcompanhamentoService: TipoAcompanhamentoService) {}

  @Post()
  create(@Body() createTipoAcompanhamentoDto: CreateTipoAcompanhamentoDto) {
    return this.tipoAcompanhamentoService.create(createTipoAcompanhamentoDto);
  }

  @Get()
  findAll() {
    return this.tipoAcompanhamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoAcompanhamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoAcompanhamentoDto: UpdateTipoAcompanhamentoDto) {
    return this.tipoAcompanhamentoService.update(+id, updateTipoAcompanhamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoAcompanhamentoService.remove(+id);
  }
}
