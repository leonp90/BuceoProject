angular.module('myApp')
	.factory('marenostrumService', function($http){

			function getEvents(){
				return $http.get("/api/events");
			}
			function postEvents(){
				return $http.post("/api/events");
			}

		return {
			getEvents : getEvents,
			postEvents : postEvents
		}

	})