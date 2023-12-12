// controllers/skills.js

//call from list of skills
const skill = require('../models/todo');

module.exports = {
    index
}

function index(req, res) {
    res.render('skills/index', {
    skills: skill.getAll()
    });
}