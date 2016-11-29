angular.module('myApp')
	.controller('homeController', function($scope, marenostrumService){
		
		$scope.getEvents = function(){

				marenostrumService.getEvents()
					.then (function(response){
						$scope.events = response.data;
					})

		} 

		$scope.getEvents();
	})
	.controller('newEventController', function($scope){
		console.log(this.event)
		this.createEvent = function() {
			console.log(this.event)
			// newEvent.event.push(this.event); 	
		};
		createdEvent = this.event;
		console.log(createdEvent)
			// marenostrumService.postEvents(createdEvent)
	});