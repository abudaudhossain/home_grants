const express = require('express');
const students = require('../app/controllers/students');
const welcome = require('../app/controllers/welcome');
const router = express.Router();

router.get('/', welcome.welcome);
router.post("/newStudent", students.createNewStudents)
router.get("/studentList/:page", students.studentList)
router.get("/search", students.search )

module.exports = router;