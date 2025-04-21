import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoSaladaDto } from './create-tipo-salada.dto';

export class UpdateTipoSaladaDto extends PartialType(CreateTipoSaladaDto) {}
