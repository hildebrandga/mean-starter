var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var async = require('async');
var config = require('./api/config/config.js');

var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(cors());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json 
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));

// views is directory for all template files
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
  //response.render('index.html');
});

require('./api.js')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
