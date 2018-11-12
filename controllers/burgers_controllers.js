// THIS SCRIPT IS WHAT REPLACES THE DIFFERENT ROUTES FILES USED PREVIOUSLY

var express = require('express');
var app = express();
var router = express.Router();

var burger = require('../models/burger.js');

module.exports = function (app) {

  app.get("/", function (req, res) {
    burger.findAll()
      .then(function(data){
        res.json(data)
      })
    // burger.all(function (data) {
    //   var burgersObject = {
    //     burgers: data
    //   };
    //   console.log(burgersObject);
    //   res.render(burgersObject);
    // })
  })

  app.post("/api/new", function (req, res) {
    burger.create({
      burger_name: req.body.name,
      devoured: false
    }).then(function (data) {
      res.end();
    })
  })
}