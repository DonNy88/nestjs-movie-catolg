import { HttpStatus } from '@nestjs/common';

export default abstract class Dto {
  constructor(
    public statusCode: number = HttpStatus.OK,
    public message: string = HttpStatus.OK.toString(),
    public data: any,
    public error: any,
  ) {}
}
