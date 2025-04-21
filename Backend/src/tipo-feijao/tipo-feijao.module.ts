import { Module } from '@nestjs/common';
import { TipoFeijaoService } from './tipo-feijao.service';
import { TipoFeijaoController } from './tipo-feijao.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
  controllers: [TipoFeijaoController],
  providers: [TipoFeijaoService],
  exports: [TipoFeijaoService],
})
export class TipoFeijaoModule {}
