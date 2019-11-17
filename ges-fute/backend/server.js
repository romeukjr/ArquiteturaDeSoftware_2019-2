// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

// DATABASE SETUP
var mongoose   = require('mongoose');
var url = "mongodb://localhost:27017/gesfute_backend";
mongoose.connect(url); // connect to our database
// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'GesFute DB - Failed to connect! Error:'));

db.once('open', function() {
  console.log("GesFute DB - Connection is open!");
});

// ROUTES FOR OUR API
// =============================================================================
require('./routes/routes')(app); // configure our routes


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('GesFute API - Running on port ' + port);