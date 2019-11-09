const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require('jsonwebtoken');

router.post("/", function(req, res) {
  const user = new db.AdminUser({
    name: req.body.name.toLowerCase(),
    username: req.body.username.toLowerCase(),
    password: req.body.password
  });
  console.log("About to save new user!!")
  user.save((err, newUser) => {
    if (err) {
      return res.status(500).json({
        message: "Error creating new user.",
        error: true,
        data: err
      });
    } else {
      const privateKey = "superSecretKey";
      const token = jwt.sign(
        {
          _id: newUser._id,
          username:newUser.username
        },
       "supersecretkey"
        );
      return res.json({
        message: "Successfully created new user.",
        error: false,
        data: token
      });
    }
  });
});
module.exports = router;