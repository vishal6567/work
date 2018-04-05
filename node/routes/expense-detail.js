var express = require('express');
var router = express.Router();
const appRoot = require('app-root-path');
const db = require(`${appRoot}/db`);
router.get('/getExpetype', function (req, res, next) {
	db.getConnection(function (err, connection) {
		connection.query('select * from NewTable', function (err, rows) {
			if (err) throw err;
			else {
				console.log(rows);
				res.json(rows)
			}
		});
		connection.release();
	});
})
module.exports = router;