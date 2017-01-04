angular.module('myApp')
	.directive('events', function () {
		return {
			strict: 'E',
			templateUrl: '/static/admin/event.html'
			}
		});