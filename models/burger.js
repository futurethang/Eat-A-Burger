///// Require on ORM standard with MySQL
var orm = require('../config/orm.js');

var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (result) {
      callback(result);
    })
  },

  insertOne: function (columns, values, callback) {
    orm.insertOne("burgers", columns, values, function (result) {
      callback(result);
    })
  },

  updateOne: function (id, newCondition, callback) {
    orm.updateOne("burgers", id, newCondition, function (result) {
      callback(result);
    })
  },

  deleteOne: function (burger, callback) {
    orm.deleteOne("burgers", burger, function (result) {
      callback(result);
    })
  }
}

module.exports = burger;