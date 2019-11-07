const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

  const UserSchema = mongoose.Schema({
    username:{
      type: String,
      required: true
    },
    password:{
      type: String,
      required: true
    }
  });
  

  UserSchema.methods.generateJwt = function () {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7); // Use 1 hour for better security
    return jwt.sign({
    _id: this._id,
    name: this.username,
    exp: parseInt(expiry.getTime() / 1000), // as Unix time in seconds
    }, process.env.JWT_SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
    };
    
  module.exports = mongoose.model('User', UserSchema);