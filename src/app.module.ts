import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [MoviesModule, ConfigModule],
})
export class AppModule {}
