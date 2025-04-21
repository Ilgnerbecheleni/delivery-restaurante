import { Injectable } from '@nestjs/common';
import { CreateTipoAcompanhamentoDto } from './dto/create-tipo-acompanhamento.dto';
import { UpdateTipoAcompanhamentoDto } from './dto/update-tipo-acompanhamento.dto';

@Injectable()
export class TipoAcompanhamentoService {
  create(createTipoAcompanhamentoDto: CreateTipoAcompanhamentoDto) {
    return 'This action adds a new tipoAcompanhamento';
  }

  findAll() {
    return `This action returns all tipoAcompanhamento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoAcompanhamento`;
  }

  update(id: number, updateTipoAcompanhamentoDto: UpdateTipoAcompanhamentoDto) {
    return `This action updates a #${id} tipoAcompanhamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoAcompanhamento`;
  }
}
