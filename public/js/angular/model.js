
angular.module('CustomerModel', ['Ajax']);
angular.module('CustomerModel').factory('Customer', function(Request){
	var customer = {
		
		name : '',
		last_name : '',
		birth_date : '',
		list : []
	};
	customer.save = function() {
		var data = {};
		data.name = customer.name
		data.last_name = customer.last_name;
		data.birth_date = customer.birth_date;
		Request.url = 'customers/add';
		Request.params = data;
		Request.post().then(function(data) {
			alert(data.msg);			
			customer.clear();
			customer.get_list();
		},function(data) {
			alert(data.msg);
		});
	};
	customer.clear = function() {
		customer.name = '';
		customer.last_name = '';
		customer.birth_date = '';
	};
	customer.get_list = function() {
		Request.url = 'customers/list';
		Request.get().then(function(data) {
			customer.list = data.customers;
			console.log(data.customers);
		},function(data) {
			console.log(data.customers);
		});
	};
	return customer;
});

