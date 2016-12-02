angular.module('myApp')
	.factory('marenostrumService', function($http){

			function getEvents(){
				return $http.get("/api/events");
			}
			function postEvents(createdEvent){
				newEvent= JSON.stringify(createdEvent)
				return $http.post("/api/events", newEvent);
			}
			function exit(){
				return $http.redirect("www.google.com");
			}

		return {
			getEvents : getEvents,
			postEvents : postEvents,
			exit : exit
		}

	})