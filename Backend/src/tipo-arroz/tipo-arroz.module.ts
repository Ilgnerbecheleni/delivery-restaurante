import { Module } from '@nestjs/common';
import { TipoArrozService } from './tipo-arroz.service';
import { TipoArrozController } from './tipo-arroz.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
  controllers: [TipoArrozController],
  providers: [TipoArrozService],
  exports: [TipoArrozService],
})
export class TipoArrozModule {}
