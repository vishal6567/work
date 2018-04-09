var express = require('express');
var router = express.Router();
var authenti = require('../middlewares/authenti');
const appRoot = require('app-root-path');
const db = require(`${appRoot}/db`);
var dateTime = require('node-datetime');
var dt = dateTime.create();
var dat = dt.format('MM/DD/YYYY');
router.get('/getExpetype', authenti.is_login,function (req, res, next) {
	db.getConnection(function (err, connection) {
		connection.query('select * from expense_detail', function (err, rows) {
			if (err) throw err;
			else {
				console.log(rows);
				res.json(rows)
			}
		});
		connection.release();
	});
})
router.post('/reportDetail', authenti.is_login,function (req, res, next) {
	console.log("body" + (JSON.stringify(req.body)));
	dat = req.body.create_date;
    db.getConnection(function (error, conn) {
	var sql = "INSERT INTO  report (expense_type,create_date,business_purpos,report_date,amount,invoice,payment,comment) VALUES ('"+ req.body.expense_type +"','" + dat + "','" + req.body.business_purpos + "','" + req.body.report_date + "','" + req.body.amount + "','" + req.body.invoice + "','" + req.body.payment + "','" + req.body.comment + "')";
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
router.get('/getReportDetail', authenti.is_login,function (req, res, next) {
	db.getConnection(function (err, connection) {
		connection.query('select * from report', function (err, rows) {
			if (err) throw err;
			else {
				console.log(rows);
				res.json(rows)
			}
		});
		connection.release();
	});
})
router.delete('/reportDetailDelete/:id', authenti.is_login,function (req, res, next) {
	var user = { id: req.params.id }
	console.log("delete", req.params.id );
	db.getConnection(function (error, conn) {
		conn.query('DELETE FROM report WHERE id = '+ req.params.id, user, function (err, result) {
			if (err) {
				console.log('delete conection error', err);
				return res.json({ 'error': false, "msg": "PLESE TRY AGAIN..." })
			} else {
				console.log('success', 'User deleted successfully! id = ' + req.params.id)
				return res.json({ 'result': true, "msg": "DATA Deleted SUCCESS FULLY.." });
			}
		})
	})
})
router.get('/reportDetailId/:id', authenti.is_login,function (req, res, next) {
	db.getConnection(function (error, conn) {
		console.log("params", req.params.id);
		var sql = "SELECT * FROM  report where id = " + req.params.id;
		conn.query(sql, function (err, rows, fields) {
			if (err) {
				console.log('error', err)
			}
			else {
				console.log(rows)
				res.end(JSON.stringify(rows));
			}
		})
	})
})
router.put('/updateReportDetail/:id',authenti.is_login,function (req, res, next) {
	console.log("body" + (JSON.stringify(req.body)));
	db.getConnection(function (error, conn) {																																																																			
		conn.query('UPDATE report SET expense_type=?, create_date=?, business_purpos=? ,report_date=?, amount=?, invoice=?, payment=?, comment=? WHERE id = ' + req.params.id, [req.body.etexpense_type, req.body.create_date, req.body.business_purpos, req.body.report_date, req.body.amount, req.body.invoice, req.body.payment, req.body.comment], function (err, result) {
			if (err) {
				console.log('err', err)
				return res.json({ 'error': false, "msg": "PLESE TRY AGAIN..." })
			} else {
				console.log('success')
				return res.json({ 'result': true, "msg": "Update SUCCESS FULLY.." });
			}
		})
	})
})
module.exports = router;