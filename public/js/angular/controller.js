var app = angular.module('myApp', ['CustomerModel'],function($interpolateProvider){
	$interpolateProvider.startSymbol('{_');
	$interpolateProvider.endSymbol('_}');
});

app.controller("customerController",function($scope,$http, Customer) {
	$scope.list_customer = function() {
		$http.get('customers/list').success(function(json){
			$scope.customer.list = json.customers;		
		});		
	};
	$scope.customer = Customer;
	$scope.list_customer();
	console.log($scope.customer.name);

	
});

