const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();

  console.log("Usernames", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  res.render("userForm", { title: "user-form" });
}
async function createUsernamePost(req, res) {
  const { username } = req.body;

  await db.insertUsername(username);
  res.redirect("/");
}

async function searchUsernameGet(req, res) {
  const { username } = req.params;

  const usernames = await db.searchUsernames(username);
  console.log("users found ", usernames);
  res.send(usernames);
}
async function deleteUsernamesGet(req, res) {
  await db.deleteUsernames();
  console.log("all users deleted successfully");
  res.redirect("/");
}
module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchUsernameGet,
  deleteUsernamesGet,
};
