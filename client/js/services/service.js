angular.module('myApp')
	.factory('marenostrumService', function($http){

			function getEvents(){
				return $http.get("/api/events");
			}
			function getEvent(id){
				return $http.get("/api/event/" + id)
			}
			function postEvents(createdEvent){
				newEvent= JSON.stringify(createdEvent)
				return $http.post("/api/events", newEvent);
			}

		return {
			getEvents : getEvents,
			getEvent : getEvent,
			postEvents : postEvents
		}

	})