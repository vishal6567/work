var express = require('express');
var router = express.Router();
var session_store;
const appRoot = require('app-root-path');
const db = require(`${appRoot}/db`);

router.post('/login', function (req, res, next) {
	console.log(req.session);
	console.log(req.body);
	db.getConnection(function (err, connection) {
		connection.query('select email, password from admin where email="' + req.body.email + '" and password=("' + req.body.password + '")', function (err, rows)
		//	connection.query('select * from users',function(err,rows)
		{
			console.log(rows);

			if (err) {
				//var errornya  = ("Error Selecting : %s ",err.code );  
				//console.log(err.code);
				console.log('login err', err);//, errornya); 

			} else {
				if (rows.length <= 0) {
					console.log('msg_error', "Wrong email address or password. Try again.");
					res.send("INVALID USER NAME AND PASSWORD..");
				}
				else {
					req.session.is_login = true;

					res.send(rows);

				}
			}
		});
	})
})
module.exports = router;
