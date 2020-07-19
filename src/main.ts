import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as cors from 'cors';
import config from './config';
import requestLogger from './middleware/requestLogger';
import rateLimiter from './middleware/rateLimiter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // returns the compression middleware
  app.use(compression());
  // helps you secure your Express apps by setting various HTTP headers
  app.use(helmet());
  // providing a Connect/Express middleware that can be used to enable CORS with various option
  app.use(cors());
  // log every http request with morgan
  app.use(requestLogger);
  // helps to prevent DoS attacks
  app.use(rateLimiter);

  await app.listen(config.get('port'));
}
bootstrap();
