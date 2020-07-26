import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Movie } from './movie.entity';
import { MoviesService } from './movies.service';
import RespnseDto from '../common/dto/ResponseDto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get('/all')
  async fetchAllMovies(): Promise<RespnseDto> {
    return new RespnseDto({
      data: await this.movieService.getAllMovies(),
    });
  }

  @Get()
  async fetchMovie(@Query() id: number): Promise<RespnseDto> {
    return new RespnseDto({
      data: await this.movieService.getMovieById(id),
    });
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async saveMovie(@Body() movie: Movie): Promise<RespnseDto> {
    return new RespnseDto({
      statusCode: HttpStatus.CREATED,
      message: 'CREATED',
      data: await this.movieService.saveMovie(movie),
    });
  }

  @Put()
  async updateMovie(
    @Query() id: number,
    @Body() movie: Movie,
  ): Promise<RespnseDto> {
    return new RespnseDto({
      data: await this.movieService.updateMovie(id, movie),
    });
  }

  @Delete()
  async deleteMovie(@Query() id: number): Promise<RespnseDto> {
    await this.movieService.removeMovieById(id);

    return new RespnseDto({ message: 'Movie removed' });
  }
}
