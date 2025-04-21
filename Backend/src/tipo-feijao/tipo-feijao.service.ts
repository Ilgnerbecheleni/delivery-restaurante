import { Injectable } from '@nestjs/common';
import { CreateTipoFeijaoDto } from './dto/create-tipo-feijao.dto';
import { UpdateTipoFeijaoDto } from './dto/update-tipo-feijao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoFeijaoService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTipoFeijaoDto) {
    return this.prisma.tipoFeijao.create({ data });
  }

  findAll() {
    return this.prisma.tipoFeijao.findMany();
  }

  findOne(id: string) {
    return this.prisma.tipoFeijao.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateTipoFeijaoDto) {
    return this.prisma.tipoFeijao.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.tipoFeijao.delete({ where: { id } });
  }
}
