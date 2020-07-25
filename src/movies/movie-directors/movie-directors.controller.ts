import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { MovieDirector } from './movie-director.entity';
import { MovieDirectorsService } from './movie-directors.service';

@Controller('movies/directors')
export class MovieDirectorsController {
  constructor(private readonly movieDirectorsService: MovieDirectorsService) {}

  @Get('/all')
  async fetchAllMovieDirectors(): Promise<MovieDirector[]> {
    return await this.movieDirectorsService.getAllMovies();
  }

  @Get()
  async fetchMovie(@Query() id: number): Promise<MovieDirector> {
    return await this.movieDirectorsService.getMovieById(id);
  }

  @Post()
  async saveMovie(@Body() movie: MovieDirector): Promise<MovieDirector> {
    return await this.movieDirectorsService.saveMovie(movie);
  }

  @Put()
  async updateMovie(
    @Query() id: number,
    @Body() movie: MovieDirector,
  ): Promise<MovieDirector> {
    return await this.movieDirectorsService.updateMovie(id, movie);
  }

  @Delete()
  async deleteMovie(@Query() id: number): Promise<void> {
    await this.movieDirectorsService.removeMovieById(id);
  }
}
