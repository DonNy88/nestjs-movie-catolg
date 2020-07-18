import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../../model/movie.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'm0v1es_user',
      password: 'sodoucs39sq4v5vv',
      database: 'nest_movie_db',
      entities: [Movie],
      synchronize: true,
    }),
  ],
  //exports: [TypeOrmModule]
})
export class DbModule {}
