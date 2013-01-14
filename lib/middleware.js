module.exports.isAuthenticated = function (request, response, next) {
	console.log("Session:", request.session);
	console.log("Authenticated?", request.session.authenticated);
	next();
};
module.exports.authRequired = function (request, response, next) {
	if (!request.session.authenticated) {
		return response.redirect('/login');
	}
	next();
};

