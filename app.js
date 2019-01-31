const express = require('express');
const app = express();
const db = require('./app/db/db');
const routes = require('./app/routes/index');
const router = express.Router();

app.use('/api/v1', routes(router));

app.get('*',function(req,res){
  res.status(404).send("Page Not Found");
})

module.exports = app;
