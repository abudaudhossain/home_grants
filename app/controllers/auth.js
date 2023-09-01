const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');
const saltRounds = 10;

exports.registration = (req, res) => {
    try {
        const { name, email, password } = req.body;

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {

                const newUser = new User({ name, email, password: hash })
                newUser.save();

                res.send(newUser);
            });
        });
    } catch (error) {
        console.log(error)
    }
}

exports.login = async (req, res) => {
    passport.authenticate('local', (err, user, info) => {

        try {
            if (err) return next(err)
            if (!user) {
                res.status(401);
                res.end(info.message);
                return;
            }

            console.log("lign", req.isAuthenticated())
            return res.send("Login success")
        } catch (error) {

        }
    })(req, res)

    // const { email, password } = req.body;
    // const user = await User.findOne({ email })
    // console.log(user)
    // if (user) {
    //     bcrypt.compare(password, user.password, function (err, result) {
    //         if (result) {
    //             return res.send("Login success")
    //         } else {
    //             return res.send("wrong password")
    //         }
    //     });
    // } else {
    //     res.send("User Can not found")
    // }



}

// create session id
// whenever we login it creares user id inside session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// find session info using session id
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {

        done(error, false);
    }
});
