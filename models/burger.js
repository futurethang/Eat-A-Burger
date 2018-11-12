///// Require on ORM standard with MySQL
// var orm = require('orm.js');

////// Requeire using Sequelize ////////
var Sequelize = require('sequelize');

var sequelize = require('../config/connection.js');

var Burger = sequelize.define('burger', {
  burger_name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN,
})

Burger.sync();

module.exports = Burger;