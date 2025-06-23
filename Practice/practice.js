const express = require("express");
const app = express();

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const path = require("path");

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}));
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());
app.use(flash());
app.use(express.static("public"));
app.set("view engine", "ejs");




app.get(("/register"), (req, res) => {
    let {name}=req.query;
    req.session.name = name;
    req.flash("success", `Welcome to the website ${name}`);
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    let message = req.flash("success");
    res.render("msg.ejs", {message});
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});







