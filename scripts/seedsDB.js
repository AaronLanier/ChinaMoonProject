const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chinamoon");

const chinamoonSeed = [
  { menuType: "allDayMenu", categoryName: "dinner", itemName: "kabab", price: 2.99 }
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
