const express = require("express");
const path = require("path");
const passport = require("./config/passport");
const session = require("express-session");
const indexRouter = require("./routes/indexRoutes");
const authRouter = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(
  session({ secret: "mySecret", resave: false, saveUninitialized: false })
);
app.use(passport.session());
app.use((req, res) => {
  console.log(req.passport.session.user);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/auth", authRouter);

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
