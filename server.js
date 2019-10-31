require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const passport=require('passport');
const jwt=require('jsonwebtoken');

const app = express();
const bcrypt = require('bcrypt');
//const initializePassport=require('/passport-config');
//call the function with paramter
//initializePassport(passport);
const saltRounds = 10;
//const secretkey="testingTopScrect";



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
//create function to get token
function verifyToken(req, res, next){
  //get the header value
  const bearerHeader=req.headers['authorization'];
  //check if bearer bearer is defined
  if(typeof bearerHeader!=='undefined') {
    const bearer=bearerHeader.split(' ');
    //get token
    const bearerToken=bearer[1];
  //  // Store data in local storage
  //   this.localStorage.setItem('moonDataKey', bearerToken);

  //   // Get data
  //   req.token = this.localStorage.getItem('moonDataKey');

    req.token=bearerToken;
    next();

  }else{
    res.sendStatus(403); 
      
  }
}

//create a protected route
app.post('/api/posts', verifyToken,  (req, res)=> {
  jwt.verify(req.token, 'secretkey', (err, authData)=>{
    if(err){
      //res.sendStatus(403)
      res.json({
        message: "access denied"
      })
    }else{
      res.json({
        message: "Welcome to protected page",
        authData
      })

    }

  })


})

app.get("/api/admin/:userid", function(req, res) {
       let UserID = req.params.userid;
       //also get pwd and hash it with bcyrpt and compare with dbpwd
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

app.get('/api', (req,res)=>{
  res.json({
    message: "welcome to test api"
  });
  
})


app.post("/api/login", function (req, res) {
 //mock user
 const user={
   name : "Osy Osy",
   userid:"osy@gmail.com",
   password: "password"
 }
 jwt.sign({user:user}, 'secretkey',{expiresIn:'90s'}, (err, token)=>{
   res.json({
     token:token
   })

   
 })
});


app.use(express.static(__dirname + "/client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`App is running on http://localhost:${PORT}`);
});
