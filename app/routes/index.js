const bears = require('./bears');

module.exports = (router) => {
  bears(router);
  return router;
}
