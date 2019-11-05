let {ExerciseProgram} = require('../models/program');
let {Exercise} = require('../models/program');

module.exports.getProgramsFromDb =  function(req, res){
    ExerciseProgram.find({}, function(err, programs){
        if(err){
            console.log(err);
            return res.status(404);
        } else{
           programs.reverse();
            return res.json(programs);
        }
    });
};

module.exports.createNewProgram =  function(req, res){
    console.log(req.body);
    if(req.body == null || req.body.name == null){
        return res.status(400).json(res.body);
    }

    const name = req.body.name;

    let program = new ExerciseProgram();
        program.name = name;

      program.save(function(err){
        if(err){
          console.log(err);
          return res.json(err);
        } else {
             return res.status(200);
        }
      });
    };

    module.exports.getProgramById =  function(req, res){
      ExerciseProgram.findOne({_id : req._id}, function(err, program){
          if(err){
              console.log(err);
              return res.status(404);
          } else{
              return res.json(program);
          }
      });
  };

exports.createNewExercise = function(req, res){
    console.log(req.body);  
    if(req.body == null || req.body.name == null ||req.body.program_name == null ||
         req.body.description == null ||req.body.set == null || req.body.reps == null){
        return res.status(400).json(res.body).send();
    }

  let exercise = new Exercise();
   exercise.name = req.body.name;
   exercise.description = req.body.description;
   exercise.set = req.body.set;
   exercise.reps = req.body.reps;

  ExerciseProgram.updateOne(
    {"name" : req.body.program_name},
    {$push: {exercises : exercise}},
  function(err){
    if(err){
      console.log(err)
      return res.status(400).send();
    } else{
        return res.status(200).send();
    }
  })
} 


