(function () {

	var module = angular.module('App.Controllers', ['App.Services']);

	var ListCtrl = function ($scope, Passwords) {

		$scope.passwords = Passwords.getAll();

		$scope.remove = function () {
			console.log(arguments);
			Passwords.remove($scope.password);
			$location.path('/');
		}

	};
	ListCtrl.$inject = ['$scope', 'Passwords'];
	module.controller('ListCtrl', ListCtrl);

	var NewCtrl = function ($scope, $location, Passwords) {

		$scope.save = function () {
			Passwords.add($scope.password);
			$location.path('/');
		}

	};
	NewCtrl.$inject = ['$scope', '$location', 'Passwords'];
	module.controller('NewCtrl', NewCtrl);

	var EditCtrl = function ($scope, $location, $routeParams, Passwords) {
		$scope.password = Passwords.get($routeParams.passwordId);
		$scope.save = function () {
			Passwords.save($scope.password);
			$location.path('/');
		}
	};
	EditCtrl.$inject = ['$scope', '$location', '$routeParams', 'Passwords'];
	module.controller('EditCtrl', EditCtrl);

}());
