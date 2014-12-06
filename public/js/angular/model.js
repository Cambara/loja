
angular.module('CustomerModel', []);
angular.module('CustomerModel').factory('Customer', function($http){
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
		$.post('customers/add',{customer:data},function(json) {
			alert(json.msg);

		});
		customer.clear();
	};
	customer.clear = function() {
		customer.name = '';
		customer.last_name = '';
		customer.birth_date = '';
	};
	return customer;
});

