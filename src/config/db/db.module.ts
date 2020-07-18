import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../../model/movie.model';
import config from '../config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: config.get('dbType') as 'postgres',
      host: config.get('dbHost'),
      port: config.get('dbPort') as number,
      username: config.get('dbUsername') || 'postgres',
      password: config.get('dbPassword') || '',
      database: config.get('dbName') || 'postgres',
      entities: [Movie],
      synchronize: true,
      logging: config.get('dbLogging') as boolean,
    }),
  ],
  //exports: [TypeOrmModule]
})
export class DbModule {}
