import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoArrozDto } from './create-tipo-arroz.dto';

export class UpdateTipoArrozDto extends PartialType(CreateTipoArrozDto) {}
