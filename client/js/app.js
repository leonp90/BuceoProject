angular.module('myApp', ['ngRoute'])
	.config( function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		
		$routeProvider
			.when('/admin', {
				templateUrl: 'views/admin/admin.html',
				controller: 'homeController'
			})
			.when('/admin/newevent', {
				templateUrl: 'views/admin/createEvent.html',
				controller: 'newEventController'
			})
			.when('/admin/events', {
				templateUrl: 'views/admin/createEvent.html',
				controller: 'newEventController'
			})
			.when('/logout', {
				controller: 'exitController'
			})
			.otherwise({
    			redirectTo: '/admin'
			});
	});