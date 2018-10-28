const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const passport = require("./config/passport");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(session({
    secret: "anything",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/onedayindenver"
);


app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});