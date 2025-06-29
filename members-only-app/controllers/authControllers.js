const { insertUser, loginUser } = require("../models/userModel");
const { hashPassword } = require("../utils/password");
async function userRegisterController(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    await insertUser(firstName, lastName, email, hashedPassword);
    res.redirect("/auth/login");
  } catch (error) {
    console.error("error while registering user", error);
  }
}

module.exports = { userRegisterController };
