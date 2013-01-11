var app = require('./lib/express');
var server = require('./lib/httpServer')(app);
var ws = require('./lib/websocketServer')(app, server);
var routes = require('./lib/routes');

app.get('/foo', routes.foo);

server.listen(8080);
console.log("Listening on https://localhost:8080");
