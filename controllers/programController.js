let {ExerciseProgram} = require('../models/program');
let {Exercise} = require('../models/program');

module.exports.getProgramsFromDb =  function(req, res){
    ExerciseProgram.find({}, function(err, programs){
        if(err){
            console.log(err);
            return res.status(404);
        } else{
           programs.reverse();
            return res.status(200).json(programs);
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
          return res.status(400).json(err);
        } else {
             return res.status(200).json(program);
        }
      });
    };

    module.exports.getProgramById =  function(req, res){
      console.log(req);
      ExerciseProgram.findOne({_id : req.params.id}, function(err, program){
          if(err){
              console.log(err);
              return res.status(404);
          } else if(program == null){
            return res.status(401);
          } else{
            program.exercises.reverse();
            return res.status(200).json(program);
          }
      });
  };

exports.createNewExercise = function(req, res){
    console.log(req.body);  
    if(req.body == null || req.body.name == null || req.body.program_id == null ||
         req.body.description == null ||req.body.set == null || req.body.reps == null){
        return res.status(400).json(res.body).send();
    }

  let exercise = new Exercise();
   exercise.name = req.body.name;
   exercise.description = req.body.description;
   exercise.set = req.body.set;
   exercise.reps = req.body.reps;

  ExerciseProgram.updateOne(
    {"_id" : req.body.program_id},
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


