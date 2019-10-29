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

//all the menus in the db
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

app.get("/menus/:menuType", function(req, res) {
    db.ChinaMenu.find({menuType:req.params.menuType})
    .then((allMenu) => {
        console.log("Found this from db",allMenu)
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

//To create a new item
app.post("/new",function(req,res){
    console.log("New Item ",req.body)
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

//Delete an item
app.delete("menu/delete/:id", function(req, res) {
    db.ChinaMenu.deleteOne({_id: req.params.id})
    .then((response) => {
        // console.log(response);
        res.json({
            message: `Deleted tesla with id: ${req.params.id}`,
            error: false,
            data: response
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
})

//item based on id
app.get("/menus/:id", function(req, res) {
    db.ChinaMenu.findById(req.params.id)
    .then((singleMenu) => {
        res.json({
            message: "Requested single Menu",
            error: false,
            data: singleMenu
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    })
});

//
app.put("/menu/:id", function(req, res) {
    db.ChinaMenu.findByIdAndUpdate(req.body._id, req.body)
    .then(singleMenu => {
        res.json({
            message: `Updated Menu with id: ${singleMenu._id}`,
            error: false,
            data: singleMenu
        });
    }).catch(err => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
        })
    });
});

app.delete("/menus/:id", function(req, res) {
    db.ChinaMenu.deleteOne({_id: req.params.id})
    .then((response) => {
        // console.log(response);
        res.json({
            message: `Deleted tesla with id: ${req.params.id}`,
            error: false,
            data: response
        });
    }).catch((err) => {
        console.log(err);
        res.json({
            message: err.message,
            error: true
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