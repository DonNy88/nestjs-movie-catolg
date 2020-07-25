import { Module } from '@nestjs/common';
import { MovieDirectorsService } from './movie-directors.service';
import { MovieDirectorsController } from './movie-directors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieDirector } from './movie-director.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieDirector])],
  providers: [MovieDirectorsService],
  controllers: [MovieDirectorsController],
})
export class MovieDirectorsModule {}
