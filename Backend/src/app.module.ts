import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import { TipoAcompanhamento } from './tipo-acompanhamento/entities/tipo-acompanhamento.entity';
import { TipoAcompanhamentoModule } from './tipo-acompanhamento/tipo-acompanhamento.module';
import { TipoArrozModule } from './tipo-arroz/tipo-arroz.module';
import { TipoCarneModule } from './tipo-carne/tipo-carne.module';
import { TipoFeijaoModule } from './tipo-feijao/tipo-feijao.module';
import { TipoSaladaModule } from './tipo-salada/tipo-salada.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, UsersModule, AuthModule, EmailModule,TipoAcompanhamentoModule,TipoArrozModule,TipoCarneModule,TipoFeijaoModule,TipoSaladaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
