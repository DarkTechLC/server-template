const http = require('http');

const { appConfig } = require('./config');
const { app } = require('./start/kernel');
const cron = require('./start/cron');

const server = http.createServer(app);

server.listen(appConfig.port, () => {
  console.log(`=> Server running at http://localhost:${appConfig.port}...`);

  cron.runTasks();
});
