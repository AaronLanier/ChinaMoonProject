require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose connected successfully");
});

connection.on("error", (err) => {
    console.log("Mongoose default connection error: " + err);
});

app.get("/menus", function(req, res) {
    db.ChinaMenu.find({})
    .then((allMenu) => {
        res.json({
            message: "Requested all menus",
            error: false,
            data: allMenu
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});
app.post("/new",function(req,res){
    db.ChinaMenu.create(req.body)
    .then((newChinaMenu) => {
console.log("New Menu Added to the system: ",newChinaMenu);
res.json({
    message: "New item in the menu created",
    error:false,
    data:newChinaMenu
})
    }).catch((err)=>{
        console.log(err);
        res.json({
            message: err.message
        })
    })
})

app.use(express.static(__dirname + '/client/build'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
    console.log(`App is running on http://localhost:${PORT}`);
});