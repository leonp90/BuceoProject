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
	.controller('newEventController', function($scope, marenostrumService){
		createdEvent = {};
		this.createEvent = function() {
			console.log(this.event)
			createdEvent = this.event;
			// newEvent.event.push(this.event); 
			console.log(createdEvent);
			marenostrumService.postEvents(createdEvent)
				
		}
	})

	.controller('exitController', function($scope, marenostrumService){
		$scope.exit = function(){
			marenostrumService.exit()
			
		}
		$scope.exit(); 
	})