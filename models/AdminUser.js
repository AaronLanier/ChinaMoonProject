var mongoose = require("mongoose");
//const bcrypt = require("bcryptjs");
const bcrypt = require('bcrypt');
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var AdminUserSchema = new Schema({
  name: {
    type: String,
    required: true,
    
  },
 
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date
  },
  created_at: {
    type: Date
  }
});
AdminUserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};
AdminUserSchema.pre("save", function (next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  if (this.password) {
    this.password = this.hashPassword(this.password);
  }
  if (this.username) {
    this.username = this.username.toLowerCase();
  }
  next();
});
// This creates our model from the above schema, using mongoose's model method
var AdminUser = mongoose.model("AdminUser", AdminUserSchema);
// Export the Article model
module.exports = AdminUser;