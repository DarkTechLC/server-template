require('dotenv').config();

const appConfig = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3333,
  env: process.env.NODE_ENV || 'production',
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  publicPath: '/public',
};

module.exports = {
  appConfig,
};
