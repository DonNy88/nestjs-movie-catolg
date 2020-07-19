import { Injectable } from '@nestjs/common';
import { Movie } from '../model/movie.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieNotFoundException } from '../shared/exception/MovieNotFoundException';
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
    const movieFound: Movie = await this.movieRepository.findOne(id);

    if (!movieFound) {
      throw new MovieNotFoundException();
    }

    await this.movieRepository.update(id, _.assign(movieFound, movie));

    return movieFound;
  }

  async removeMovie(id: number): Promise<void> {
    // this.movieRepository
  }
}
