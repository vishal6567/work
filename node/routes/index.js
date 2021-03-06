var express = require('express');
var router = express.Router();
var authenti = require('../middlewares/authenti');
var dateTime = require('node-datetime');
var dt = dateTime.create();
dt.format('m/d/Y');
const appRoot = require('app-root-path');
const db = require(`${appRoot}/db`); 

router.post('/expenseType', authenti.is_login,function (req, res, next) {
  console.log("body" + (JSON.stringify(req.body.expensetype)));
  var dat = new Date(dt.now());
  console.log(dat);
	db.getConnection(function (error, conn) {
  var sql = "INSERT INTO newtable (date,expense_type) VALUES ('"+ dat +"','" + req.body.expensetype + "')";
		conn.query(sql, function (err, result) {
			//if(err) throw err
			if (err) {
				console.log('post conection error', err);
				return res.json({ 'error': true, "msg": "PLESE TRY AGAIN..." })
			} else {
				console.log('success', 'Data added successfully!');
				return res.json({ 'result': false, "msg": "DATA ADDED SUCCESS FULLY.." });
			}
		})
	})
})
router.get('/getExpensetype', authenti.is_login,function (req, res, next) {
	db.getConnection(function (err, connection) {
		//run the query
		connection.query('select * from newtable', function (err, rows) {
			if (err) throw err;
			else {
				console.log(rows);
				res.json(rows)
			}
		});
		connection.release();
	});
})
router.delete('/expensetypeDelete/:expense_type', authenti.is_login,function (req, res, next) {
	var user = { expense_type: req.params.expense_type }
	console.log("delete", req.params.expense_type);
	db.getConnection(function (error, conn) {
		//var sql = "INSERT INTO users (name,age,email) VALUES ('"+req.body.name+"','"+req.body.age+"','"+req.body.email+"')";

		conn.query('DELETE FROM newtable WHERE expense_type = ?' ,[ req.params.expense_type],function (err, result) {
			//if(err) throw err
			if (err) {
				console.log('delete conection error', err);
				return res.json({ 'error': false, "msg": "PLESE TRY AGAIN..." })
			} else {
				console.log('success', 'User deleted successfully! expense_type = ' + req.params.expense_type)
				return res.json({ 'result': true, "msg": "DATA Deleted SUCCESS FULLY.." });
			}
		})
	})
})
module.exports = router;
