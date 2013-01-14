module.exports = function (app, routes, middleware) {

	app.get('/', [middleware.isAuthenticated, middleware.authRequired], routes.get.index);
	app.get('/login', [middleware.isAuthenticated], routes.get.login);
	app.post('/login', [middleware.isAuthenticated], routes.post.login);
	app.get('/logout', [middleware.isAuthenticated, middleware.authRequired], routes.get.logout);

	app.get('/partials/:name', routes.get.partials);

	app.get('*', [middleware.isAuthenticated], routes.get.index);

	return app;

}
