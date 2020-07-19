import * as morgan from 'morgan';
import config from '../config';

const isProd: boolean = config.get('env') === 'production';
const isTest: boolean = config.get('env') === 'test';

const middleware: any = morgan(isProd ? 'combined' : 'dev', {
  skip: (req): boolean => (isProd || isTest) && req.url === '/health',
});

export default middleware;
