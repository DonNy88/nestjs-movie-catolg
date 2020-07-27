import { Injectable } from '@nestjs/common';
import { Movie } from './movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieNotFoundException } from '../common/exception/MovieNotFoundException';
import * as _ from 'lodash';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async getAllMovies(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  async getMovieById(id: number): Promise<Movie> {
    const movie: Movie = await this.movieRepository.findOne(id);

    if (!movie) {
      throw new MovieNotFoundException();
    }

    return movie;
  }

  async saveMovie(movie: Movie): Promise<Movie> {
    return await this.movieRepository.save(movie);
  }

  async updateMovie(id: number, movie: Movie): Promise<Movie> {
    const movieFound: Movie = await this.getMovieById(id);
    await this.movieRepository.update(id, _.assign(movieFound, movie));
    return movieFound;
  }

  async removeMovieById(id: number): Promise<void> {
    await this.movieRepository.delete(await this.getMovieById(id));
  }
}
