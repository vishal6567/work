var mysql = require('mysql');

var db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'db'
});
module.exports = db;