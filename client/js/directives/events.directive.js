angular.module('myApp')
	.directive('events', function () {
		return {
			strict: 'E',
			template: 'event.html'
			}
		}
	});