const express = require('express');
const router = express.Router();
var programController = require('../controllers/programController');
var jwt = require('express-jwt');
var auth = jwt({
secret: process.env.JWT_SECRET,
userProperty: 'payload'
});


router.get('/api/all', programController.getProgramsFromDb);
router.post('/api/add/exercise', auth, programController.createNewExercise);
router.post('/api/add/program', auth, programController.createNewProgram);

module.exports = router;