var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const bodyParser = require('body-parser');
const User = require('../models/user');
const jwt = require('jsonwebtoken')

module.exports.register = function (req, res) {
  console.log(req.body);
  if(req.body.username == null || req.body.password == null){
    return res.status(401);
  }
  User.findOne({ username: req.body.username })
    .then(user => {
      if (user) {
        return res.status(400).json(error);
      } else {
        const newUser = new User({
          username: req.body.username,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            console.log(err)
          } else {
            bcrypt.hash(newUser.password, salt,
              (err, hash) => {
                if (err) {
                  console.log(err)
                } else {
                  newUser.password = hash;
                  newUser.save(function(err){
                    if(err){
                      console.log(err);
                      return res.status(400).json(newUser);
                    } else{
                      res.status(200).json(newUser);
                    }
                  })
                }
              });
          }
        });
      }
    });
};

module.exports.login = function (req, res) {
  console.log(req.body);
  if(req.body.username == null || req.body.password == null){
    return res.status(401);
  }
  const password = req.body.password;
  const username = req.body.username;
  User.findOne({ username }, function(err, user){
    if(err){
      return res.status(404).json(user);
    } else{
      if(user == null || user.username == null|| user.password == null){
        return res.status(404).send();
      } else{
        bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            var jwt = user.generateJwt();
            res.json(jwt);
          } else {
            errors.password = "Password is incorrect";
            res.status(400).json(errors);
          }
        });
      }
    }});
  }