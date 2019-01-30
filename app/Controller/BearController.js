var express = require('express');
var bodyParser = require('body-parser');
var Bear = require('../models/bears');


var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(function(req,res,next) {
  console.log("Something is happening");
  next();
})

router.get('/', function(req, res) {
    res.status(200).json({ message: 'hooray! welcome to our api!' });
});

router.route('/bears')
      .post(function(req,res) {
        var bear = new Bear();
        bear.name = req.body.name;
        bear.save(function(err){
          if(err) {
            res.status(500).send(err)
          }
          res.status(200).json(bear);
        });
      })
      .get(function(req,res) {
        Bear.find(function(err,bears){
          if(err)res.status(500).send(err)
          res.status(200).json(bears)
        })
      })

router.route('/bears/:bear_id')
      .get(function(req,res) {
        Bear.findById(req.params.bear_id,function(err,bear) {
          if(err) res.status(500).send(err)
          res.status(200).json(bear)
        })
      })
      .put(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            bear.name = req.body.name;
            bear.save(function(err) {
                if (err)
                    res.status(500).send(err);
                res.status(200).json(bear);
            });

        });
      })
      .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.status(500).send(err);

            res.status(200).json({ message: 'Successfully deleted' });
        });
     });


module.exports = router;
