var mysql = require('mysql');

var db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'db'
});
module.exports = db;