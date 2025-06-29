const express = require("express");
const passport = require("./config/passport");
const session = require("express-session");
const authRouter = require("./routes/authRoutes");
const indexRouter = require("./routes/indexRoutes");
const messageRouter = require("./routes/messageRoutes");
require("dotenv").config();
const path = require("path");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(
  session({ secret: "mySecret", resave: false, saveUninitialized: false })
);
app.use(passport.session());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/messages", messageRouter);

const APP_PORT = process.env.APP_PORT || 8080;
app.listen(APP_PORT, () => {
  console.log("server is running on port", APP_PORT);
});
