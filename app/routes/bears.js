const BearController = require('../Controller/BearController');


module.exports = (router) => {
  router.get('/', function(req, res) {
      res.status(200).json({ message: 'hooray! welcome to our api!' });
  });
  router.route('/bears')
    .post(BearController.add)
    .get(BearController.getAll);
  router.route('/bears/:bear_id')
    .get(BearController.getById)
    .put(BearController.update)
    .delete(BearController.deleteById);
};
