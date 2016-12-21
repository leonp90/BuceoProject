angular.module('myApp')
.controller('homeController', function($scope, marenostrumService){

	$scope.events = [];
	$scope.getEvents = function(){

		marenostrumService.getEvents()
		.then (function(response){
			$scope.events=response.data;
		})
	} 
	$scope.getEvents();
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