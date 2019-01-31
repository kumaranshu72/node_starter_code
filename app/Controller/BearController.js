var express = require('express');
var bodyParser = require('body-parser');
var Bear = require('../models/bears');


module.exports = {
  add: (req, res) => {
    var bear = new Bear();
    bear.name = req.body.name;
    bear.save(function(err){
      if(err) {
        res.status(500).send(err)
      }
      res.status(200).json(bear);
    });
  },
  getAll: (req, res) => {
    Bear.find(function(err,bears){
      if(err)res.status(500).send(err)
      res.status(200).json(bears)
     })
   },
  getById: (req,res) => {
    Bear.findById(req.params.bear_id,function(err,bear) {
      if(err) res.status(500).send(err)
      res.status(200).json(bear)
    })
  },
  update: (req,res) => {
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
  },
  deleteById: (req,res) => {
    Bear.remove({
        _id: req.params.bear_id
    }, function(err, bear) {
        if (err)
            res.status(500).send(err);
        res.status(200).json({ message: 'Successfully deleted' });
    });
  }
}
