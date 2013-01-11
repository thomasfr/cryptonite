(function () {

	var Services = angular.module('App.Services', []);

	Services.factory('Passwords', function () {

		var passwords = [
			{
				"id": 0,
				"name": "Website",
				"password": "abcdefgh",
				"description": "abcdefgh",
				"creator": "abcdefgh"
			}
		];

		return {
			get: function (id) {
				return passwords[id];
			},
			getAll: function () {
				return passwords;
			},
			add: function (password) {
				password.id = passwords.length;
				passwords.push(password);
			},
			save: function (password) {
				password[password.id] = password;
			},
			remove: function (password) {
				delete passwords[password.id];
			}
		}

	});

}());
