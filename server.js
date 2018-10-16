const express = require("express");

const session = require("express-session");
const passport = require("./config/passport");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(session({ secret: "anything", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
  