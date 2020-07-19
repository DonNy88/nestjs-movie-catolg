import { Controller, Get, Query, Post, Body, Put } from '@nestjs/common';
import { Movie } from '../model/movie.model';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get('/all')
  async fetchAllMovies(): Promise<Movie[]> {
    return await this.movieService.getAllMovies();
  }

  @Get()
  async fetchMovie(@Query('id') id: number): Promise<Movie> {
    return await this.movieService.getMovieById(id);
  }

  @Post()
  async saveMovie(@Body() movie: Movie): Promise<Movie> {
    return await this.movieService.saveMovie(movie);
  }

  @Put()
  async updateMovie(@Query() id: number, @Body() movie: Movie): Promise<Movie> {
    return await this.movieService.updateMovie(id, movie);
  }

  // @Delete()
  // async deleteMovie(@Query() id: number): Promise<void> {
  //   await this.movieService.removeMovieById(id);
  // }
}
