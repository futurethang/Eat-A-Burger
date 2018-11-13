///// Require on ORM standard with MySQL
var orm = require('../config/orm.js');

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    })
  },

  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    })
  },

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    })
  },

  deleteOne: function (burger, cb) {
    orm.deleteOne(burger, cb, function (res) {
      cb(res);
    })
  }
}

module.exports = burger;