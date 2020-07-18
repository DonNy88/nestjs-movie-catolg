import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as morgan from 'morgan';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // returns the compression middleware
  app.use(compression());
  // helps you secure your Express apps by setting various HTTP headers
  app.use(helmet());
  // providing a Connect/Express middleware that can be used to enable CORS with various option
  app.use(cors());
  // log every http request with morgan
  app.use(
    morgan('combined', { skip: (req): boolean => req.url === '/health' }),
  );

  await app.listen(config.get('port'));
}
bootstrap();
