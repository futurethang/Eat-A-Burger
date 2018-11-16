// Set up MySQL connection.
var mysql = require("mysql");
// var Sequelize = require("sequelize");

//////// MySQL ////////////
var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  port: 3306,
  user: "bf0a2e4d7888a8",
  password: "d932d01b",
  database: "heroku_6a32f2634e36fa1"
});

mysql://bf0a2e4d7888a8:d932d01b@us-cdbr-iron-east-01.cleardb.net/heroku_6a32f2634e36fa1?reconnect=true

// ////////// Sequelize ////////////
// var sequelize = new Sequelize("burgers_db", "root", "", {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });


////// Make My SQL connection. ///////////
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export My SQL connection for our ORM to use.
module.exports = connection;

// Export Sequelize connection for our ORM to use.
// module.exports = sequelize;
