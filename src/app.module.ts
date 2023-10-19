import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthenModule } from './authen/authen.module';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';

@Module({
  imports: [UsersModule, AuthModule, AuthenModule, UtilisateursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
