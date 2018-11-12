// Set up MySQL connection.
// var mysql = require("mysql");
var Sequelize = require("sequelize");

////////// MySQL ////////////
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

////////// Sequelize ////////////
var sequelize = new Sequelize("burgers_db", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


//////// Make My SQL connection. ///////////
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export My SQL connection for our ORM to use.
// module.exports = connection;

// Export Sequelize connection for our ORM to use.
module.exports = sequelize;
