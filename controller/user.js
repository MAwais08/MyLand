const User = require("../models/user");



//Sign Up get   Route
module.exports.signUp = (req, res) => {
    res.render("users/signUp");
}

//Sign Up Post Route
module.exports.signUpPost = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to the site!");
            res.redirect("/listings");
        });
        
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}


//Login get Route
module.exports.login = (req, res) => {
    res.render("users/login");
}

//Login post Route
module.exports.loginPost = (req, res) => {
    req.flash("success", "Welcome back!");
    const redirectUrl = res.locals.returnTo || "/listings";
    res.redirect(redirectUrl);
}

//Logout Route
module.exports.logout = (req, res, next) => {
    req.logout(function(err) {
        if (err) { 
            return next(err); 
        }
        req.flash("success", "Logged out successfully!");
        res.redirect("/listings");
    });
}