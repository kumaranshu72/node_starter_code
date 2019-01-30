var mongoose = require('mongoose');
var {mongoUrl} = require('../config/config')

mongoose.connect(mongoUrl, {useNewUrlParser: true});
