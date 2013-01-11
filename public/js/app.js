(function() {
var App = angular.module('App', ['App.Controllers']);
App.config(function ($routeProvider, $locationProvider) {
			$locationProvider.html5Mode(true);
			$routeProvider.
					when('/', {controller: 'ListCtrl', templateUrl: '/partials/list'}).
					when('/new', {controller: 'NewCtrl', templateUrl: '/partials/detail'}).
					when('/edit/:passwordId', {controller: 'EditCtrl', templateUrl: '/partials/detail'}).
					otherwise({redirectTo: '/'});
		});
}());
