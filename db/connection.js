const mysql = require('mysql2');

// connect to the database
const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'sql696518ACS!',
      database: 'employeeTracker_db'
    },
    console.log(`Connected to the employeeTracker database.`)
  );

  connection.connect(function(err){
      if (err) throw err;
  })

  module.exports = connection
  