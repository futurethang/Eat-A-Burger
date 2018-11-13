var connection = require('../config/connection.js');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) { throw err };
      cb(result);
    })
   },

  insertOne: function (table, cols, vals, cb) { 
    var queryString = "INSERT INTO " + table;
    queryString += " (" + cols.toString() + ") ";
    queryString += "VALUES (" + printQuestionMarks(vals.length) + ") ";
    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) { throw err };
      cb(result);
    })
  },
  
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET " + objToSql(objColVals) + " WHERE " + condition;
    console.log(queryString);

    connection.query(queryString, function (err, res) {
      if (err) { throw err };
      cb(result);
    })
  },
  
  deleteOne: function (table, burger, cb) {
    var queryString = "DELETE FROM " + table + " WHERE name = " + burger;

    connection.query(queryString, function (err, res) {
      if (err) { throw err };
      cb(res);
    })
  }
}

module.exports = orm;