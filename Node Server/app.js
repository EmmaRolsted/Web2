require('dotenv').config();
const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const database = require('./config/database');
const passport = require('./config/passport');
var jwt = require('express-jwt');
var cors = require('cors')

mongoose.connect(database.localdatabase, {useNewUrlParser: true,  useUnifiedTopology: true});
let db = mongoose.connection; 

// Check for DB connection
 db.once('open', function(){
    console.log('Connected to MongoDB');
});

//Check for DB errors
db.on('error', function(err){
    console.log(err)
}); 

//Init app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(cors())
//models


app.use(session({
  secret: 'love node',
  resave: true,
  saveUninitialized: true
}));

let users = require('./routes/user-route');
app.use('/users', users);

let programs = require('./routes/program-route');
app.use('/programs', programs);

let workoutLogs = require('./routes/workout-log-route')
app.use('/workout-logs', workoutLogs);
/* app.use(passport.initialize());
app.use(passport.session()); */

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({"message" : err.name + ": " + err.message});
    }
  });

  app.listen(3000, function(){
    console.log('Server started on port: ' + 3000);
});