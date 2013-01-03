var module = angular.module('App.controllers', []);

module.controller('ListCtrl', function ($scope, Passwords) {

	$scope.passwords = Passwords.getAll();

	$scope.remove = function () {
		console.log(arguments);
		Passwords.remove($scope.password);
		$location.path('/');
	}

});

module.controller('NewCtrl', function ($scope, $location, Passwords) {

	$scope.save = function () {
		Passwords.add($scope.password);
		$location.path('/');
	}

});

module.controller('EditCtrl', function ($scope, $location, $routeParams, Passwords) {
	$scope.password = Passwords.get($routeParams.passwordId);
	$scope.save = function () {
		Passwords.save($scope.password);
		$location.path('/');
	}
});

module.factory('Passwords', function () {
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
