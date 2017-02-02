var express = require('express');
var mysql =require('mysql');
var router =express.Router();


var connection =mysql.createConnection({
  'host' : config.rds.host,
  'user' : config.rds.user,
  'password' : config.rds.password,
  'database' : config.rds.retrofitpracticedatabase
});
router.get('/', function(req, res, next) {
	connection.query('select id, title, timestamp from board '+'order by timestamp desc;', function (error, cursor){
		res.json(cursor);
	});
});

module.exports =router;
