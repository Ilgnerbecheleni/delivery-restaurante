import { Injectable } from '@nestjs/common';
import { CreateTipoCarneDto } from './dto/create-tipo-carne.dto';
import { UpdateTipoCarneDto } from './dto/update-tipo-carne.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoCarneService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTipoCarneDto) {
    return this.prisma.tipoCarne.create({ data });
  }

  findAll() {
    return this.prisma.tipoCarne.findMany();
  }

  findOne(id: string) {
    return this.prisma.tipoCarne.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateTipoCarneDto) {
    return this.prisma.tipoCarne.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.tipoCarne.delete({ where: { id } });
  }
}
