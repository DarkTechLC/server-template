const path = require('path');
const { Edge } = require('edge.js');

const { appConfig } = require('../config');

const view = new Edge({ cache: appConfig.isProd });

view.mount(path.join(__dirname, '..', 'views'));

const baseUrl = `http://${appConfig.host}:${appConfig.port}`;

view.global('asset', (pathToFile) => {
  const removeInitialSlash = (path = '') => {
    return path.trim() && path[0] === '/' ? path.slice(1, path.length) : path;
  };

  const url = [baseUrl, appConfig.publicPath, pathToFile]
    .map(String)
    .map(removeInitialSlash)
    .join('/');

  return url;
});

module.exports = {
  view,
};
