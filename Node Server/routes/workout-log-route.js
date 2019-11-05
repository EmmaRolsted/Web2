const express = require('express');
const router = express.Router();    
var workoutLogController = require('../controllers/workoutLogController');
var jwt = require('express-jwt');
var auth = jwt({
secret: process.env.JWT_SECRET,
userProperty: 'payload'
});

router.get('/api/all', auth, workoutLogController.getLogsFromDb);
router.post('/api/log', auth, workoutLogController.createNewLog);

module.exports = router;