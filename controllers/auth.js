const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../models");

router.post("/", function(req, res) {
  db.User.findOne({ username: req.body.username.toLowerCase() })
    .then(foundUser => {
      if (foundUser) {
        console.log(foundUser.checkPassword(req.body.password));
        if (foundUser.checkPassword(req.body.password)) {
          //TODO: create a JWT to send back
          res.json({
            message: "Welcome back!",
            error: false,
            data: "My jwt will go here"
          });
        } else {
          res.json({
            message: "Incorrect password. Please try again.",
            error: true,
            data: null
          });
        }
      } else {
        res.json({
            message: "No user found with that username. Please try again",
            error: true,
            data: null
          });
      }
    })
    .catch(err => {
      console.log(err);
      res.json({
        message: "There was a problem retrieving your account. Please try again.",
        error: true,
        data: null
      });
    });
});

module.exports = router;
