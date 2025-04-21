import { Injectable } from '@nestjs/common';
import { CreateTipoSaladaDto } from './dto/create-tipo-salada.dto';
import { UpdateTipoSaladaDto } from './dto/update-tipo-salada.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoSaladaService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTipoSaladaDto) {
    return this.prisma.tipoSalada.create({ data });
  }

  findAll() {
    return this.prisma.tipoSalada.findMany();
  }

  findOne(id: string) {
    return this.prisma.tipoSalada.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateTipoSaladaDto) {
    return this.prisma.tipoSalada.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.tipoSalada.delete({ where: { id } });
  }
}
