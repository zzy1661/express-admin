var mysql = require('mysql')
var {dbSec} = require('../sec');
var crypto = require('crypto');
var decipher = crypto.createDecipher('aes192', dbSec);
var dec = decipher.update('11092b078079188a6d71e7e60a6cba38', 'hex', 'utf8');//编码方式从hex转为utf-8;
dec += decipher.final('utf8');//编码方式从utf-8;

var connection = mysql.createConnection({
  host     : '47.94.108.50',
  user     : 'root',
  password : dec,
  database : 'dev'
});

connection.connect()

connection.query('SELECT * from user', function (err, rows, fields) {
  if (err) throw err

  console.log(rows)
})

connection.end()