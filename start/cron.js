const cron = require('node-cron');

const defaultConfig = {
  scheduled: false,
  timezone: 'America/Sao_Paulo',
};

cron.schedule(
  '* * * * *',
  () => {
    console.log('Shows this message every minute...');
  },
  defaultConfig
);

const tasks = cron.getTasks();
const runTasks = () => tasks.forEach((task) => task.start());

module.exports = {
  tasks,
  runTasks,
};
