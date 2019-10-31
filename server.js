require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport=require('passport');

const app = express();
const bcrypt = require('bcrypt');
//const initializePassport=require('/passport-config');
//call the function with paramter
//initializePassport(passport);
const saltRounds = 10;



const PORT = process.env.PORT || 3001;
//const PORT = process.env.PORT || 3300;

const db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose connected successfully");
});
connection.on("error", err => {
  console.log("Mongoose default connection error: " + err);
});

app.post('/api/new', function (req, res) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    db.AdminUser.create({
      name: req.body.name,
      userid: req.body.userid,
      password: hash
    }).then(function (data) {
      if (data) {
        console.log(data);
        //res.redirect('/Login');
      res.json({
          message: "Successfully created an account",
          error: false,
          user: data
        });

      }
    })
      .catch(err => {
        console.log(err);
        // res.json({
        //   message: err.message,
        //   error: true
        // });
       //res.redirect('/Registration');
      });
  });
});






app.post("/api/new", function(req, res) {  
  db.AdminUser.create(req.body)  
    .then(newAdminUser => {
      console.log("New User: ", newAdminUser);
      res.json({
        message: "Successfully created",
        error: false,
        data: newAdminUser
      });
     // res.redirect('/Login');
    })
    .catch(err => {
      console.log(err);
      res.json({
        message: err.message,
        error: true
      });
      //res.redirect('/Registration');
    });
});

app.get('/Login', (req,res)=>{
  res.render()
})

app.get("/api/admin/:userid", function(req, res) {
       let UserID = req.params.userid;
    db.AdminUser.find({ userid:UserID})
    .then(dBUser => {
      console.log(dBUser);
      res.json({
        message: "Logged in user",
        error: false,
        data: dBUser
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        message: err.message,
        error: true
      });
    });
});

app.use(express.static(__dirname + "/client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`App is running on http://localhost:${PORT}`);
});
