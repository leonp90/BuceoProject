angular.module('myApp', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		
		$routeProvider
			.when('/admin', {
				templateUrl: '/static/admin/admin.html',
				controller: 'homeController'
			})
			.otherwise({
    			redirectTo: '/admin'
			});

	}]).run(['$rootScope', function( $rootScope){
		$rootScope.exit= function(){
			window.location='/';
		};
	}])