let {WorkoutLog} = require('../models/workout-log');

module.exports.getLogsFromDb =  function(req, res){
    WorkoutLog.find({user_id : req.payload.name}, function(err, logs){
        if(err){
            return res.status(404);
        } else{
            logs.reverse();
            return res.json(logs);
        }
    });
};

module.exports.createNewLog =  function(req, res){
    console.log(req.body);
    console.log(req.payload);
    if(req.body == null || req.payload.name == null){
        return res.status(400).json(res.body).send();
    }

    let log = new WorkoutLog();
    log.user_id = req.payload.name;
    log.content = req.body.content;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today =  dd + '/' + mm + '/' + yyyy;
    log.timestamp = today;

    log.save(function(err){
    if(err){
    console.log(err);
    return res.json(err).send();
    } else {
    return res.status(200).send();
    }
    });
    };
