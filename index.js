var app = require('./lib/express');
var server = require('./lib/httpServer')(app);
var ws = require('./lib/websocketServer')(app, server);
var routes = require('./lib/routes')(app, server);
var middleware = require('./lib/middleware')(app, server);

app.get('/', middleware.all, middleware.index, routes.index);

app.get('/login', middleware.all, routes.login);
app.post('/login', middleware.all, routes.postLogin);
app.get('/logout', middleware.all, middleware.secure, routes.logout);

app.get('/partials/:name', routes.partials);

app.get('*', middleware.all, routes.index);

server.listen(8080, function () {
	console.log("Listening on https://localhost:8080");
});
