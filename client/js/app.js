angular.module('myApp', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		
		$routeProvider
			.when('/admin', {
				templateUrl: '/static/admin/admin.html',
				controller: 'homeController'
			})
			.when('/admin/newevent', {
				templateUrl: '/static/admin/createEvent.html',
				controller: 'newEventController'
			})
			.when('/admin/events', {
				templateUrl: '/static/admin/createEvent.html',
				controller: 'newEventController'
			})
			.when('/admin/event/:id', {
				templateUrl: '/static/admin/event.html',
				controller: 'eventController'
			})
			.otherwise({
    			redirectTo: '/admin'
			});

	}]).run(['$rootScope', function( $rootScope){
		$rootScope.exit= function(){
			window.location='/';
		};
	}])