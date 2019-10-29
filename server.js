require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;
//const PORT = process.env.PORT || 3300;

const db = require("./models");

const app = express();

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

app.post("/api/new", function(req, res) {
  db.AdminUser.create(req.body)
    .then(newAdminUser => {
      console.log("New User: ", newAdminUser);
      res.json({
        message: "Successfully created",
        error: false,
        data: newAdminUser
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



app.get("/api/admin/:userid", function(req, res) {
       let UserID = req.params.userid;
    db.AdminUser.find({ userid:UserID})
    .then(User => {
      console.log(User);
      res.json({
        message: "Logged in user",
        error: false,
        data: User
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
