var app =require('./app');

var port = 3000 || process.env.PORT;

app.listen(port);
console.log('Magic happens on port ' + port);
