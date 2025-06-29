const { hashPassword } = require("../utils/password");
const { insertUser } = require("../models/userModel");

async function registerUserController(req, res) {
  const { username, password } = req.body;
  const hashedPassword = await hashPassword(password);
  await insertUser(username, hashedPassword);
  res.redirect("/auth/login");
}
function getLogoutUserController(req, res) {
  req.logout(() => {
    res.redirect("/auth/login");
  });
}

module.exports = { registerUserController, getLogoutUserController };
