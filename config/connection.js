// Set up MySQL connection.
var mysql = require("mysql");
// var Sequelize = require("sequelize");
var connection;

//////// MySQL ////////////
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });
}
  
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