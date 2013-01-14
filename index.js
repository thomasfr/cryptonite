var app = require('express')();
var spdy = require('spdy');

// mount the application
app.use('/', require('./lib/app'));

var spdyOptions = require('./configs/spdy-options');

// Create SPDY Server with configured options
var server = spdy.createServer(spdyOptions, app);

// Start SPDY Server
server.listen(8080, function () {
	console.log("Listening on https://localhost:8080");
});
