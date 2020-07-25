import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { MovieDirectorsModule } from './movie-directors/movie-directors.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), MovieDirectorsModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
