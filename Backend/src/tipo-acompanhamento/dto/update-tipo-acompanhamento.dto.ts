import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoAcompanhamentoDto } from './create-tipo-acompanhamento.dto';

export class UpdateTipoAcompanhamentoDto extends PartialType(CreateTipoAcompanhamentoDto) {}
