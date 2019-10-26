var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var AdminUserSchema = new Schema({

  name: {
    type: String,
    required: true
  },
 
  user_id: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var AdminUser = mongoose.model("AdminUser", AdminUserSchema);

// Export the Article model
module.exports = AdminUser;
