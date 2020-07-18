import { Injectable } from '@nestjs/common';
import { Movie } from '../model/movie.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  getAllMovies(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  getMovieById(id: number): Promise<Movie> {
    return this.movieRepository.findOne(id);
  }
}
