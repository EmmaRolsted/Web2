let mongoose =require('mongoose');

//Exercise Schema
let exerciseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    set: {
        type: String,
        required: true
    },
    reps:{
        type: String,
        required: true
    }

});


let ExerciseProgramSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    exercises:  [exerciseSchema]
});

let program = mongoose.model('ExerciseProgram', ExerciseProgramSchema);
let exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = {ExerciseProgram: program, Exercise : exercise }