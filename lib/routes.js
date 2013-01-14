var get = module.exports.get = {};
var post = module.exports.post = {};
var del = module.exports.delete = {};
var put = module.exports.put = {};

get.index = function getIndex(request, response, next) {
	response.render('index');
};

get.partials = function getPartials(request, response, next) {
	var name = request.params.name;
	response.render('partials/' + name);
}

get.login = function getLogin(request, response, next) {
	if (request.session.authenticated) {
		return response.redirect('/');
	}
	response.render('login');
}

post.login = function postLogin(request, response, next) {
	console.log("Authenticated as", request.body.email);
	request.session.authenticated = true;
	return response.redirect('/');
}

get.logout = function getLogout(request, response, next) {
	request.session.authenticated = false;
	return response.redirect('/');
}
