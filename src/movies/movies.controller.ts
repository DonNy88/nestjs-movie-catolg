import { Controller, Get } from '@nestjs/common';
import { Movie } from '../model/movie.model';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getMovies(): Movie[] {
    return this.movieService.getAllMovies();
  }
}
