//app.js
//Tutorial: https://www.sitepoint.com/using-node-mysql-javascript-client/

const mysql = require('mysql');

// CONNECT TO THE DATABASE
const connection = mysql.createConnection({
//   port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'sitepoint'
});

// // EXECUTING QUERIES - INSERT
// const employee = { name: 'Robert', location: 'Shaolin' };

// connection.query('INSERT INTO employees SET ?', employee, (err, res) => {
//   if(err) throw err;

//   console.log('Last Wu Member insert ID:', res.insertId);
// });

// // EXECUTING QUERIES - UPDATING
// connection.query(
//   'UPDATE employees SET name = ? WHERE ID= ?',
//   ['Dennis', 6],
//   (err, result) => {
//     if (err) throw err;

//     console.log(`Changed ${result.changedRows} row(s)`);
//   }
// );

// // EXECUTING QUERIES - DESTROYING
// connection.query(
//   'DELETE FROM employees WHERE id = ?', [5], (err, result) => {
//     if (err) throw err;

//     console.log(`DELTEED ${result.affectedRows} row(s)`);
//   }
// );

// // EXECUTING QUERIES - READING 
// connection.query('SELECT * FROM employees', (err,rows) => {
//   if(err) throw err;

//   console.log('Data received from Db:\n');
//   console.log(rows);

//   rows.forEach( (row) => {
//     console.log(`Wu-Member ${row.name} is in ${row.location}`);
//   });
// });

// // STORED PROCEDURE
// connection.query('CALL sp_getall()',function(err, rows) {
//   if (err) throw err;

//   console.log('Data received from STORED PROCEDURE Db:\n');
//   console.log(rows);
// });

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Wu-Connection Established!');
});

connection.end((err) => {

  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still 
  // before sneding a COM_QUIT packet to the MYSQL server. 
});

