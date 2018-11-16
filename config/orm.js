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
  selectAll: function (table, callback) {
    var queryString = "SELECT * FROM " + table + ";";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) { throw err };
      callback(result);
    })
   },

  insertOne: function (table, columns, values, callback) { 
    var queryString = "INSERT INTO " + table;
    queryString += " (" + columns.toString() + ") ";
    queryString += "VALUES (" + printQuestionMarks(values.length) + ") ";
    console.log(queryString);

    connection.query(queryString, values, function (err, result) {
      if (err) { throw err };
      callback(result);
    })
  },
  
  updateOne: function (table, id, condition, callback) {
    var queryString = "UPDATE " + table;

    queryString += " SET " + objToSql(id) + " WHERE " + condition;
    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) { throw err };
      callback(result);
    })
  },
  
  deleteOne: function (table, burger, callback) {
    var queryString = "DELETE FROM " + table + " WHERE id = " + burger;
    console.log(queryString);
    connection.query(queryString, function (err, res) {
      if (err) { throw err };
      callback(res);
    })
  }
}

module.exports = orm;