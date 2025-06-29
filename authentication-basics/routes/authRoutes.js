const { Router } = require("express");
const passport = require("passport");
const isLoggedIn = require("../middlewares/isLoggedIn");
const isRegistered = require("../middlewares/isRegistered");
const {
  getLogoutUserController,
  registerUserController,
} = require("../controllers/authControllers");
const authRouter = Router();

authRouter.get("/login", isLoggedIn, (req, res) => {
  res.redirect("/");
});
authRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  })
);

authRouter.get("/register", isRegistered, (req, res) => {
  res.redirect("/");
});
authRouter.post("/register", registerUserController);
authRouter.get("/logout", getLogoutUserController);
module.exports = authRouter;
