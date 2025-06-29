function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.render("form", {
    title: "Login Form",
    action: "/auth/login",
    method: "post",
    btn: "Login",
    path: "/auth/register",
    text: "new user? click here to registration.",
  });
}

module.exports = isLoggedIn;
