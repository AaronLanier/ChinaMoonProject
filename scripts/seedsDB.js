const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chinamoon");

const chinamoonSeed = [
  { catagoryName: "dinner", itemName: "kabab", price: 2.99 },
  {
    catagoryName: "dinner",
    itemName: "water",
    price: 2.99
  },
  {
    catagoryName: "lunch",
    itemName: "Chicken Fried Rice",
    price: 10.99
  }
];

db.ChinaMenu.remove({})
  .then(() => db.ChinaMenu.collection.insertMany(chinamoonSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
