import { Module } from '@nestjs/common';
import { TravelModule } from './travels/travel.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TravelModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
