var express = require('express');
var app = module.exports = express();

app.configure(function () {
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.errorHandler());
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/../public'));
	app.use(express.cookieParser('s3cr3t0mg'));
	app.use(express.session(require('./sessionConfiguration')));

	app.set('view engine', 'jade');
	app.set('views', __dirname + '/../views');
});

app.configure('development', function () {
	app.set('view cache', false);
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
	app.set('view cache', true);
	app.use(express.errorHandler());
});

var routes = require('./routes');
var middleware = require('./middleware');
require('./routesSetup')(app, routes, middleware);


