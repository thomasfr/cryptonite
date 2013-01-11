(function() {
var App = angular.module('App', ['App.Controllers']);
App.config(function ($routeProvider, $locationProvider) {
			$locationProvider.html5Mode(true);
			$routeProvider.
					when('/', {controller: 'ListCtrl', templateUrl: '/partials/list.html'}).
					when('/new', {controller: 'NewCtrl', templateUrl: '/partials/detail.html'}).
					when('/edit/:passwordId', {controller: 'EditCtrl', templateUrl: '/partials/detail.html'}).
					otherwise({redirectTo: '/'});
		});
}());
