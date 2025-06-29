const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { findUserByEmail, findUserById } = require("../models/userModel");
const { veriFyPassword } = require("../utils/password");

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      const user = await findUserByEmail(email);

      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      const match = await veriFyPassword(password, user.password_hash);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await findUserById(id);
  done(null, user);
});

module.exports = passport;
