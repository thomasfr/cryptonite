module.exports = function (app, server) {

	var secure = function secure(request, response, next) {
		if (!request.session.authenticated) {
			return response.redirect('login');
		}
		next();
	}

	return {
		all: [
			function (request, response, next) {
				console.log("authenticated?", request.session.authenticated);
				next();
			}
		],
		index: [
			secure
		],
		secure: [
			secure
		]
	}
};
