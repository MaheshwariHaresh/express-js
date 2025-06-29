const { Router } = require("express");
const passport = require("passport");
const { userRegisterController } = require("../controllers/authControllers");
const authRouter = Router();

authRouter.get("/login", (req, res) => {
  res.render("loginForm");
});
authRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/messages",
    failureRedirect: "/auth/login",
  })
);

authRouter.get("/register", (req, res) => {
  res.render("registerForm");
});

authRouter.post("/register", userRegisterController);
authRouter.get("/user/join-club", (req, res) => {
  res.render("joinTheCLub");
});

authRouter.get("/logout", (req, res) => {
  req.logOut(() => {
    res.redirect("/auth/login");
  });
});
module.exports = authRouter;
