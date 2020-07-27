import Dto from './Dto';
import { HttpStatus } from '@nestjs/common';

export default class RespnseDto extends Dto {
  constructor({
    statusCode = HttpStatus.OK,
    message = 'OK',
    data,
  }: {
    statusCode?: number;
    message?: string;
    data?: any;
  }) {
    super(statusCode, message, data, undefined);
  }
}
