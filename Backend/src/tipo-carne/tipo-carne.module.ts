import { Module } from '@nestjs/common';
import { TipoCarneService } from './tipo-carne.service';
import { TipoCarneController } from './tipo-carne.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
  controllers: [TipoCarneController],
  providers: [TipoCarneService],
  exports: [TipoCarneService],
})
export class TipoCarneModule {}
