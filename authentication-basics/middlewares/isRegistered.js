function isRegistered(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.render("form", {
    title: "Register Form",
    action: "/auth/register",
    method: "post",
    btn: "Register",
    path: "/auth/login",
    text: "already user? click here to login.",
  });
}

module.exports = isRegistered;
