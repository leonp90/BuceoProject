angular.module('myApp', ['ngRoute'])
	.config( function($routeProvider){

		$routeProvider
			.when('/', {
				templateUrl: 'views/admin/admin.html',
				controller: 'homeController'
			})
			.when('/newevent', {
				templateUrl: 'views/admin/createEvent.html',
				controller: 'newEventController'
			})



	})