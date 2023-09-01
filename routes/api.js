const express = require('express');
// const passport = require('passport');
// const { registration, login } = require('../app/controllers/auth');
const students = require('../app/controllers/students');
const welcome = require('../app/controllers/welcome');
const router = express.Router();


// router.post("/regstration", registration)
// router.post("/login", login)
// router.post("/login", (req, res, next) => {
//     passport.authenticate('local', (err, user, info) => {

//         if (err) return next(err)
//         if (!user) {
//             res.status(401);
//             res.end(info.message);
//             return;
//         }
//        res.send("success")
//     })(req, res, next)
// })

// router.get("/session", welcome.sessionTest)
router.post("/newStudent", students.createNewStudents)
// router.get("/search", students.search)
// router.get("/studentList/:page", students.studentList)
// router.get('/', welcome.welcome);

module.exports = router;