module.exports = function (app, server) {
	return {
		index: function (request, response, next) {
			response.render('index');
		},

		partials: function (request, response, next) {
			var name = request.params.name;
			response.render('partials/' + name);
		},

		login: function (request, response, next) {
			if (request.session.authenticated) {
				return response.redirect('/');
			}
			response.render('login');
		},

		postLogin: function (request, response, next) {
			console.log("Authenticated as", request.body.email);
			request.session.authenticated = true;
			return response.redirect('/');
		},

		logout: function (request, response, next) {
			request.session.authenticated = false;
			return response.redirect('/');
		},

		api: {

		}
	}
};
