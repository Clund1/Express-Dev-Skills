var express = require('express');
var router = express.Router();

//Controller to get CRUD Functions
var skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills"

//GET /skills
router.get('/', skillsCtrl.index)
module.exports = router;
