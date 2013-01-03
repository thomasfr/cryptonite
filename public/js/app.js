// Declare app level module which depends on filters, and services
angular.module('App', ['App.controllers']).
		config(function ($routeProvider, $locationProvider) {
			$locationProvider.html5Mode(true);
			$routeProvider.
					when('/', {controller: 'ListCtrl', templateUrl: '/partials/list.html'}).
					when('/new', {controller: 'NewCtrl', templateUrl: '/partials/detail.html'}).
					when('/edit/:passwordId', {controller: 'EditCtrl', templateUrl: '/partials/detail.html'}).
					otherwise({redirectTo: '/'});
		});
