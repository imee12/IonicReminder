var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

//mongoose.connect('mongodb://imee:imee@ds049661.mongolab.com:49661/demo');

//mongoose.connection.on('error', function() {
  //console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
//});



var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));



var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(allowCrossDomain);

app.use('/', require('./routes/index'));
app.set('port', process.env.PORT || 3000);

// // Force HTTPS on Heroku
// if (app.get('env') === 'production') {
//   app.use(function(req, res, next) {
//     var protocol = req.get('x-forwarded-proto');
//     protocol == 'https' ? next() : res.redirect('https://' + req.hostname + req.url);
//   });
// }
//
// app.use(express.static(path.join(_dirname, 'app')));
// app.use('/api/collections', reminders)

///////// START SERVER//////////
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
