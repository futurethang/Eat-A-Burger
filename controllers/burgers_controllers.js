var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", function (request, result) {
  burger.selectAll(function (data) {
    var burgersObject = {
      burgers: data
    };
    console.log(burgersObject);
    result.render("index", burgersObject);
  })
})

router.get("/api/burgers", function (request, result) {
  burger.selectAll(function (data) {
    result.json(data);
  })
})

router.post("/api/burgers", function (request, result) {
  burger.insertOne([
    "burger_name", "devoured"], [
      request.body.burger_name, request.body.devoured
    ], function (res) {
      result.json({ id: res.insertId });
    })
})

router.put("/api/burgers/:id", function (request, result) {
  var id = "id = " + request.params.id;
  var condition = request.body.devoured;
  console.log("id", id);

  burger.updateOne({
    devoured: condition
  }, id, function (res) {
    if (res.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return result.status(404).end();
    } else {
      result.status(200).end();
    }
  })
})

router.delete("/api/burgers/:id", function (request, res) {
  var burgerId = request.params.id;
  console.log("burger id: " + burgerId);
  burger.deleteOne(burgerId, function (result) {
    console.log("burger deleted");
    console.log(result);
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      console.log("200?")
      res.status(200).end();
    }
  })
})

module.exports = router;