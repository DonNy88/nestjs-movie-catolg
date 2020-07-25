import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { MovieDirector } from './movie-directors/movie-director.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  duration: number;

  @Column({ nullable: true })
  genre: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToMany(type => MovieDirector)
  @JoinTable()
  directors: MovieDirector[];
}
