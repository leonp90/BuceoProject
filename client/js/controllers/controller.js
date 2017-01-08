angular.module('myApp')
.controller('homeController', function($scope, marenostrumService){
		marenostrumService.getEvents()
		.then (function(response){
			$scope.events=JSON.stringify(response.data);
			console.log(response.data)
		})
})
.controller('newEventController', function($scope, marenostrumService){
	let createdEvent = {};
	this.createEvent = function() {
			createdEvent = this.event;
			marenostrumService.postEvents(createdEvent);

		};
})
.controller('eventController', function($scope, $routeParams, marenostrumService){
	 	const id = $routeParams.id
		marenostrumService.getEvent(id)
		.then (function(response){
			console.log(response.data)
			$scope.event = response.data;
		})
})
