require("dotenv").config();
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("./config/passport_strategy");
const app = express();

// routers
const signup_social = require("./routes/signup_social");

// middlewares
app.set("view engine", "ejs");
app.use(express.json(), express.urlencoded({extended: false}));
app.use(express.static("./public"));
app.use(passport.initialize());


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/privacy", (req, res) => {
    res.send("Privacy page");
});


app.use("/auth", signup_social);

app.listen(process.env.PORT||3000, (err) => {
    if(err) throw err;
    console.log("Server started");
});
