import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieDirector } from './movie-director.entity';
import { Repository } from 'typeorm';
import { MovieNotFoundException } from '../../common/exception/MovieNotFoundException';
import * as _ from 'lodash';

@Injectable()
export class MovieDirectorsService {
  constructor(
    @InjectRepository(MovieDirector)
    private movieDirectorRepository: Repository<MovieDirector>,
  ) {}

  async getAllMovies(): Promise<MovieDirector[]> {
    return await this.movieDirectorRepository.find();
  }

  async getMovieById(id: number): Promise<MovieDirector> {
    const director: MovieDirector = await this.movieDirectorRepository.findOne(
      id,
    );

    if (!director) {
      throw new MovieNotFoundException();
    }

    return director;
  }

  async saveMovie(movieDirector: MovieDirector): Promise<MovieDirector> {
    return await this.movieDirectorRepository.save(movieDirector);
  }

  async updateMovie(
    id: number,
    movieDirector: MovieDirector,
  ): Promise<MovieDirector> {
    const movieDirectorFound: MovieDirector = await this.getMovieById(id);

    await this.movieDirectorRepository.update(
      id,
      _.assign(movieDirectorFound, movieDirector),
    );

    return movieDirectorFound;
  }

  async removeMovieById(id: number): Promise<void> {
    await this.movieDirectorRepository.delete(await this.getMovieById(id));
  }
}
