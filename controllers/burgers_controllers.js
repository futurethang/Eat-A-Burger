var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgersObject = {
      burgers: data
    };
    console.log(burgersObject);
    res.render("index", burgersObject);
  })
})

router.post("/api/burgers", function (req, res) {
  burger.insertOne([
    "name", "devoured"], [
      req.body.name, req.body.devoured
    ], function (result) {
      res.json({ id: resultId });
    })
})

router.put("api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})

router.delete("api/burgers/:id", function (req, res) {
  var burgerToDelete = req.params.id;
  burger.deleteOne(burgerToDelete, function (result) {
    console.log("burger deleted");
  })
})

module.exports = router;