import * as convict from 'convict';

const config: convict.Config<any> = convict({
  env: {
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    format: Number,
    default: 3000,
    env: 'PORT',
  },
  // logLevel: {
  //   format: String,
  //   default: 'info',
  //   env: 'LOG_LEVEL'
  // },
  // logFilenameDeafult: {
  //   format: String,
  //   default: 'log/logger.default.log',
  //   env: 'LOG_FILENAME_DEAFULT'
  // },
  // logFilenameSilly: {
  //   format: String,
  //   default: 'log/logger.silly.log',
  //   env: 'LOG_FILENAME_DEAFULT'
  // },
  // logFilenameError: {
  //   format: String,
  //   default: 'log/logger.error.log',
  //   env: 'LOG_FILENAME_ERROR'
  // },
  // jwtPrivateKey: {
  //   format: String,
  //   default: '',
  //   env: 'JWT_PRIVATE_KEY',
  //   sensitive: true
  // },
  // jwtExpiresTime: {
  //   format: Number,
  //   default: '',
  //   env: 'JWT_EXPIRES_TIME',
  //   sensitive: true
  // },
  dbType: {
    format: String,
    default: 'postgres',
    env: 'DB_TYPE',
    sensitive: true,
  },
  dbHost: {
    format: String,
    default: 'localhost',
    env: 'DB_HOST',
    sensitive: true,
  },
  dbPort: {
    format: Number,
    default: 5432,
    env: 'DB_PORT',
    sensitive: true,
  },
  dbUsername: {
    format: String,
    default: 'postgres',
    env: 'DB_USERNAME',
    sensitive: true,
  },
  dbPassword: {
    format: String,
    default: 'postgres',
    env: 'DB_PASS',
    sensitive: true,
  },
  dbName: {
    format: String,
    default: 'postgres',
    env: 'DB_NAME',
    sensitive: true,
  },
  // dbReplica: {
  //   format: Boolean,
  //   default: false,
  //   env: 'DB_REPLICA',
  //   sensitive: true
  // },
  // dbReplicaHost: {
  //   format: String,
  //   default: 'localhost',
  //   env: 'DB_REPLICA_HOST',
  //   sensitive: true
  // },
  // dbSelector: {
  //   format: String,
  //   default: 'RANDOM',
  //   env: 'DB_SELECTOR',
  //   sensitive: true
  // },
  dbSynchronize: {
    format: Boolean,
    default: true,
    env: 'DB_SYNCHRONIZE',
    sensitive: true,
  },
  // dbSsl: {
  //   format: Boolean,
  //   default: false,
  //   env: 'DB_SSL',
  //   sensitive: true
  // },
  // dbSslCa: {
  //   format: String,
  //   default: '',
  //   env: 'DB_SSL_CA',
  //   sensitive: true
  // },
  dbLogging: {
    format: Boolean,
    default: true,
    env: 'DB_LOGGING',
    sensitive: true,
  },
  // dbConnectionName: {
  //   format: String,
  //   default: 'loyal-db-connection',
  //   env: 'DB_CONNECTION_NAME',
  //   sensitive: true
  // },
  // redisHost: {
  //   format: String,
  //   default: 'localhost',
  //   env: 'REDIS_HOST',
  //   sensitive: true
  // },
  // redisPort: {
  //   format: Number,
  //   default: 6379,
  //   env: 'REDIS_PORT',
  //   sensitive: true
  // },
  // redisPassword: {
  //   format: String,
  //   default: '',
  //   env: 'REDIS_PASSWORD',
  //   sensitive: true
  // },
  // rateLimitMax: {
  //   format: Number,
  //   default: 12,
  //   env: 'RATE_LIMIT_MAX'
  // },
  // rateLimitWindowMs: {
  //   format: Number,
  //   default: 2 * 60 * 1000, // 2 mins
  //   env: 'RATE_LIMIT_WINDOW_MS'
  // },
  // rateLimitRedisStorePrefix: {
  //   format: String,
  //   default: 'loyal-auth-redis-limt',
  //   env: 'RATE_LIMIT_REDIS_STORE_PREFIX',
  //   sensitive: true
  // },
  // rateLimitRedisStoreDb: {
  //   format: Number,
  //   default: 1,
  //   env: 'RATE_LIMIT_REDIS_STORE_DB',
  //   sensitive: true
  // }
});

const _env: string = config.get('env');

config.loadFile(
  `.${_env !== 'production' ? '/dist' : ''}/config/env/${_env}.json`,
);
config.validate({ allowed: 'strict' });

export default config;
