var express = require('express');
var app = express();
var db = require('./app/db/db');
var BearController = require('./app/Controller/BearController');

app.use('/api/v1', BearController);

app.get('*',function(req,res){
  res.status(404).send("Page Not Found");
})

module.exports = app;
