import * as rateLimit from 'express-rate-limit';
import config from '../config';

const middleware: any = rateLimit({
  max: config.get('rateLimitMax'),
  windowMs: config.get('rateLimitWindowMs'),
  skip: (req): boolean => req.url === '/health',
});

export default middleware;
