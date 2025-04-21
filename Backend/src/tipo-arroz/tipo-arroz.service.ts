import { Injectable } from '@nestjs/common';
import { CreateTipoArrozDto } from './dto/create-tipo-arroz.dto';
import { UpdateTipoArrozDto } from './dto/update-tipo-arroz.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoArrozService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTipoArrozDto) {
    return this.prisma.tipoArroz.create({ data });
  }

  findAll() {
    return this.prisma.tipoArroz.findMany();
  }

  findOne(id: string) {
    return this.prisma.tipoArroz.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateTipoArrozDto) {
    return this.prisma.tipoArroz.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.tipoArroz.delete({ where: { id } });
  }
}
