if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const listings = require("./routers/listing");
const reviews = require("./routers/review");
const users = require("./routers/user");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const Listing = require("./models/listing");





app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/myLand");
    
}
main()
    .then(() => {
        console.log("Connected to MongoDB   ");
    })
    .catch((err) => {
        console.log(err);
    });





app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + (1000 * 60 * 60 * 24 * 30),
        maxAge: 1000 * 60 * 60 * 24 * 30
    }
}));
app.use(flash());


//Passport
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());







app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});





app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);
app.use("/", users);

app.get("/", async (req, res) => {
    const listings = await Listing.find({});
    res.render("listings/index.ejs",{listings});
});


//Middleware
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    res.status(statusCode);
    res.render('error', { err });
});





