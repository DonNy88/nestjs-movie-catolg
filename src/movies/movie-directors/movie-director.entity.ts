import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MovieDirector {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  middleName: string;

  @Column()
  surname: string;
}
