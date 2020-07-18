import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [MoviesModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
