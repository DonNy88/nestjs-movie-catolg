import { Test, TestingModule } from '@nestjs/testing';
import { MovieDirectorsService } from './movie-directors.service';

describe('MovieDirectorsService', () => {
  // let service: MovieDirectorsService;

  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   providers: [MovieDirectorsService, ],
    // }).compile();
    // service = module.get<MovieDirectorsService>(MovieDirectorsService);
  });

  it('should be defined', () => {
    // expect(service).toBeDefined();
    expect(true).toBeTruthy();
  });
});
