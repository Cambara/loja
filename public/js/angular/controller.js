var app = angular.module('myApp', ['CustomerModel'],function($interpolateProvider){
	$interpolateProvider.startSymbol('{_');
	$interpolateProvider.endSymbol('_}');
});

app.controller("customerController",function($scope, Customer) {
	$scope.customer = Customer;
	$scope.customer.get_list(); 
});

