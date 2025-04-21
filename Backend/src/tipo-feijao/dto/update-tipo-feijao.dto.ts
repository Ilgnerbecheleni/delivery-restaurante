import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoFeijaoDto } from './create-tipo-feijao.dto';

export class UpdateTipoFeijaoDto extends PartialType(CreateTipoFeijaoDto) {}
