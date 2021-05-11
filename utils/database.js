const mysql = require('mysql2');

const pool = mysql.createPool({
  host:'localhost',
  user: 'bab40537af1644',
  password: '41a7b5a2',
  database: 'heroku_ed17c54729106d8'});

module.exports = pool.promise();