var express = require('express');
var router = express.Router();
var authenti = require('../middlewares/authenti');
const appRoot = require('app-root-path');
const db = require(`${appRoot}/db`);

router.get('/pass', authenti.is_login, function (req, res, next) {
	db.getConnection(function (err, connection) {
		//run the query
		connection.query('select password from admin', function (err, rows) {
			if (err) throw err;
			else {
				console.log(rows);
				res.json(rows)
			}
		});
		connection.release();//release the connection
	});
})//end get
router.post('/cha_pass', authenti.is_login, function (req, res, next) {
	console.log(req.body.newpassword)
	console.log(req.body.password)
	db.getConnection(function (err, conn) {

		conn.query('UPDATE admin SET password = ? WHERE password=?',[req.body.newpassword,req.body.password], function (err, result) {
			//if(err) throw err
			if (err) {
				console.log('put conection error', err);
				return res.json({ 'error': false, "msg": "PLESE TRY AGAIN..." })
			} else {
				//console.log('success', 'Comapny Data Edit successfully!');
				return res.json({ 'result': true, "msg": "Update password SUCCESS FULLY.." });
			}
		})
	})
})
module.exports = router;