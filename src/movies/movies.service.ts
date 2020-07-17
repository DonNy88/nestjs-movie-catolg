import { Injectable } from '@nestjs/common';
import { Movie } from '../model/movie.model';

@Injectable()
export class MoviesService {
  getAllMovies(): Movie[] {
    return [
      {
        title: 'Test',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus lacus, posuere et gravida at, commodo a felis. Etiam dictum justo eu auctor rhoncus. Pellentesque eget sapien sodales, sodales leo ut, facilisis dui. Etiam placerat et arcu sed accumsan. Cras diam diam, tincidunt luctus mauris a, vulputate ultrices turpis. Duis laoreet eros bibendum molestie ullamcorper. Ut tempor sem augue, non vulputate nunc efficitur vel. Vestibulum vel porta nibh, sit amet porttitor eros. Ut condimentum nisl id ultrices sollicitudin. Vestibulum at vestibulum nisl.',
        duration: 300,
        genre: 'Thriller',
        id: 1,
      } as Movie,
    ];
  }
}
