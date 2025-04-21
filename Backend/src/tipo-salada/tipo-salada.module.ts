import { Module } from '@nestjs/common';
import { TipoSaladaService } from './tipo-salada.service';
import { TipoSaladaController } from './tipo-salada.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TipoSaladaController],
  providers: [TipoSaladaService],
  exports: [TipoSaladaService],
})
export class TipoSaladaModule {}
