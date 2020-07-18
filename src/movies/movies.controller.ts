import { Controller, Get, Query } from '@nestjs/common';
import { Movie } from '../model/movie.model';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get('/all')
  async getMovies(): Promise<Movie[]> {
    return await this.movieService.getAllMovies();
  }

  @Get()
  async getMovie(@Query('id') id: number): Promise<Movie> {
    console.log(`id: ${id}`);
    return await this.movieService.getMovieById(id);
  }
}
