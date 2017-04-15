var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/index.js');
var handler = require('./routes/requestHandler.js');
var path = require('path');


var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(auth.initialize())
app.use(express.static(__dirname + '/../client/dist'));

// serve up / but not sure if needed
app.get('/', function(req, res) {
  res.sendFile(__dirname, + '/../client/dist')
})

app.get('/getMentors', handler.getMentors);
app.get('/getMentorProfile', handler.getMentorProfile);
app.get('/getEvents/:uid', handler.getEvents);
app.get('/getResources/:uid', handler.getResources);
app.get('/*');




var server = app.listen(port, function() {
  console.log('App is listening on port: ', port);
});
