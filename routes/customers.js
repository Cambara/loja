/*
	GET customers listing
*/


exports.index = function(req,res) {
	res.render('./customer/list',{page_title:"Customers - Node.js"});	
}
exports.list = function(req, res) {
	req.getConnection(function(err,connection){

		connection.query('SELECT * FROM customer',function(err,rows) {
			if(err)
				console.log('Error Selecting : %s',err);
			res.json({ customers: rows });
			});
		});
};

exports.add = function(req,res) {
	res.render('./customer/add_customer',{page_title:'Add Customers-Node.js'});	
};

// exports.edit = function(req,res) {
// 	var id = req.params.id;

// 	req.getConnection(function(err,connection) {
// 		connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows) 
// 		{
// 			if(err)
// 				console.log("Error Selecting : %s",err);
// 			res.render("edit_customer",{page_title:"Edit Customers -Node.js",data:rows});

// 		});
// 	});
// };

exports.save = function(req,res) {
	var data = JSON.parse(JSON.stringify(req.body));
	var input = data.customer;
	req.getConnection(function(err, connection) 
	{
		var data = {
			name : input.name,
			last_name : input.last_name,
			birth_date : input.birth_date
		};

		var query = connection.query("INSERT INTO customer set ?",data,function(err,rows) 
		{
			if (err) { console.log("Error inserting : %s",err);};
			// res.redirect('/customers');
			res.json({ msg: 'Cliente Adicionado' });
		});
	});
}