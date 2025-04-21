import { Module } from '@nestjs/common';
import { TipoAcompanhamentoService } from './tipo-acompanhamento.service';
import { TipoAcompanhamentoController } from './tipo-acompanhamento.controller';

@Module({
  controllers: [TipoAcompanhamentoController],
  providers: [TipoAcompanhamentoService],
})
export class TipoAcompanhamentoModule {}
