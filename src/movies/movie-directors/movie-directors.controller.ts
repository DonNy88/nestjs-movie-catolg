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
import { MovieDirector } from './movie-director.entity';
import { MovieDirectorsService } from './movie-directors.service';
import RespnseDto from '../../common/dto/ResponseDto';

@Controller('movies/directors')
export class MovieDirectorsController {
  constructor(private readonly movieDirectorsService: MovieDirectorsService) {}

  @Get('/all')
  async fetchAllMovieDirectors(): Promise<RespnseDto> {
    return new RespnseDto({
      data: await this.movieDirectorsService.getAllMovies(),
    });
  }

  @Get()
  async fetchMovie(@Query() id: number): Promise<RespnseDto> {
    return new RespnseDto({
      data: await this.movieDirectorsService.getMovieById(id),
    });
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async saveMovie(@Body() movie: MovieDirector): Promise<RespnseDto> {
    return new RespnseDto({
      statusCode: HttpStatus.CREATED,
      message: 'CREATED',
      data: await this.movieDirectorsService.saveMovie(movie),
    });
  }

  @Put()
  async updateMovie(
    @Query() id: number,
    @Body() movie: MovieDirector,
  ): Promise<RespnseDto> {
    return new RespnseDto({
      data: await this.movieDirectorsService.updateMovie(id, movie),
    });
  }

  @Delete()
  async deleteMovie(@Query() id: number): Promise<RespnseDto> {
    await this.movieDirectorsService.removeMovieById(id);

    return new RespnseDto({ message: 'MovieDirector has been removed' });
  }
}
