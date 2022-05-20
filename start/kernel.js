const express = require('express');
const path = require('path');

const { ViewMiddleware } = require('../app/middlewares/ViewMiddleware');
const { SendPdfMiddleware } = require('../app/middlewares/SendPdfMiddleware');

const { appConfig } = require('../config');
const { router } = require('./routes');

const app = express();

app.use(
  appConfig.publicPath,
  express.static(path.join(__dirname, '..', 'public'))
);
app.use(ViewMiddleware);
app.use(SendPdfMiddleware);
app.use(router);

module.exports = {
  app,
};
