
angular.module('Ajax', []);
angular.module('Ajax').factory('Request', function($http,$q){
	var request = {
		
		url : '',
		params : {}
	};
	request.get = function() {
		return $http.get(this.url).then(
			function(response) {
				return response.data;	
			}, function(response) {
				return $q.reject(response.data);
			}
		);
	};
	request.post = function() {
		return $http.post(this.url,this.params).then(
			function(response) {
				return response.data;	
			}, function(response) {
				return $q.reject(response.data);
			}
		);
	};
	return request;
});

