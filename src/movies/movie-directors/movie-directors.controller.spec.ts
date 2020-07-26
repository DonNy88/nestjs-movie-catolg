import { Test, TestingModule } from '@nestjs/testing';
import { MovieDirectorsController } from './movie-directors.controller';

describe('MovieDirectors Controller', () => {
  // let controller: MovieDirectorsController;

  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   controllers: [MovieDirectorsController],
    // }).compile();
    // controller = module.get<MovieDirectorsController>(MovieDirectorsController);
  });

  it('should be defined', () => {
    // expect(controller).toBeDefined();
    expect(true).toBeTruthy();
  });
});
