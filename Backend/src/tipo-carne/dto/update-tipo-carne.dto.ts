import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoCarneDto } from './create-tipo-carne.dto';

export class UpdateTipoCarneDto extends PartialType(CreateTipoCarneDto) {}
