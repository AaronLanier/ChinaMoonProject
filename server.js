require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const RegisterController = require("./controllers/register");
const AuthController = require("./controllers/auth");

const PORT = process.env.PORT || 3001;

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


app.use("/api/register", RegisterController);
app.use("/api/auth", AuthController);

app.use(express.static(__dirname + "/client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`App is running on http://localhost:${PORT}`);
});
