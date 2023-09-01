
module.exports = {
    welcome: (req, res) => {
        try {
            console.log("ii", req.isAuthenticated())
            if (req.isAuthenticated()) {
                res.send("Auth wlacme")
                return;
            } 
            res.send({
                user: req,
                message: "un Walcame"
            });
        } catch (error) {
            console.log(error)
        }
    },

    sessionTest: (req, res) => {
        try {
            console.log(req.session)
            req.session.HG ? req.session.HG++ : req.session.HG = 1;
            res.send(req.session)

        } catch (error) {
            console.log(error)
        }
    }
}