const { view } = require('../../start/view');

const ViewMiddleware = (req, res, next) => {
  res.view = view;
  next();
};

module.exports = {
  ViewMiddleware,
};
