const BearController = require('../controllers/BearController');


module.exports = (router) => {
/**
 * This function comment is parsed by Anshu
 * @route GET /
 * @group hello - working of API
 * @typedef Response
 * @returns {object} 200 - A string "hooray! welcome to our api!"
 */
  router.get('/', function(req, res) {
      res.status(200).json({ message: 'hooray! welcome to our api!' });
  });
  router.route('/bears')
 /**
   * This function comment is parsed by Anshu
   * @route POST /bears
   * @group Add a Bear - Adding a new Bear
   * @produces application/json
   * @consumes application/json
   * @param {string} name.body.required - Bear Name
   * @returns {object} 200 - Newly created Bear
   * @return {object} 500 - Internal Server Error
   */
    .post(BearController.add)
    .get(BearController.getAll);
  router.route('/bears/:bear_id')
    .get(BearController.getById)
    .put(BearController.update)
    .delete(BearController.deleteById);
};
