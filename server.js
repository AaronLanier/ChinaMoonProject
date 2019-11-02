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

//create function to get token
function verifyToken(req, res, next) {
  //get the header value
  const bearerHeader = req.headers['authorization'];
  //check if bearer bearer is defined
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    //get token
    const bearerToken = bearer[1];
    //  // Store data in local storage
    //   this.localStorage.setItem('moonDataKey', bearerToken);

    //   // Get data
    //   req.token = this.localStorage.getItem('moonDataKey');

    req.token = bearerToken;
    next();

  } else {
    res.sendStatus(403);

  }
}


//create a protected route
//app.post('/api/posts', verifyToken, (req, res) => {
app.post('/admin', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      //res.sendStatus(403)
      res.json({
        message: "access denied"
      })
    } else {
      res.json({
        message: "Welcome to protected page",
        authData
      })

    }

  })


})





app.use("/api/register", RegisterController);
app.use("/api/auth", AuthController);

app.use(express.static(__dirname + "/client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`App is running on http://localhost:${PORT}`);
});
