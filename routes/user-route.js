const express = require('express');
const router = express.Router();    
const bodyParser = require('body-parser');
var authenticationController = require('../controllers/authenticationController');



router.post('/api/register', authenticationController.register)
router.post('/api/login',  authenticationController.login);

module.exports = router;