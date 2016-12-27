angular.module('myApp')
	.directive('calendar', ['$timeout', function ($timeout) {
		var _options = {
			timeFormat: 'H(:mm)',
			events: null 
		}
		return {
			strict: 'E',
			template: `
				<div id="calendar"></div>
			`,
			scope: {
				options: '=',
				events: '='

			},
			link: function($scope, $element, $attrs) {
				
				$timeout(function () {
					$element.fullCalendar(angular.extend(_options,$scope.options, {events: $scope.events}));
				}, 300);
			}
		}
	}]);

// {{ events | json }}