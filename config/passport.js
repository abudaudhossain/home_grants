const passport = require("passport");
const User = require("../app/models/user");
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")

passport.use(
    new LocalStrategy(async (username1, password, done) => {
        try {
            const user = await User.findOne({ email: username1 });
            console.log("LocalStrategy", user)
            if (!user) { return done(null, false, { message: "can't not find you user" }); }
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    return done(null, user, { message: "Login success" });
                } else {
                    return done(null, false, { message: "Password wrong!" })
                }
            });
        } catch (error) {
            console.log(error)
            return done(error, false, {message: "Server Side Errro"})
        }
    }
    ));

// create session id
// whenever we login it creares user id inside session
passport.serializeUser((user, done) => {
    console.log(user, "form seri")
    done(null, user.id);
});

// find session info using session id
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        console.log(user, "form deseri")
        done(null, user);
    } catch (error) {
        done(error, false, );
    }
});

