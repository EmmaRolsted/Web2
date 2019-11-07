var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = require('../models/user')

module.exports = passport => {
  passport.use(
      new Strategy(opts, (payload, done) => {
           User.findById(payload.id)
               .then(user => {
                   if(user){
                     return done(null, {
                         id: user.id,
                         name: user.username
                     });
                   }
                   return done(null, false);
                }).catch(err => console.error(err));
            })
         );
   };