const mongoose = require('mongoose');

  let WorkoutScheme = mongoose.Schema({
    user_id:{
        type: String,
        required: true
      },
    program_name:{
      type: String,
      required: true
    },
    timestamp:{
      type: String,
      required: true
    }
  });
  var workoutlog = mongoose.model('WorkoutLog', WorkoutScheme);
  module.exports = {WorkoutLog : workoutlog}