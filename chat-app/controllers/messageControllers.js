const db = require("../db/queries");

async function getAllMessagesController(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", { title: "all-messages", messages: messages });
}

async function createMessageGetController(req, res) {
  res.render("createMessage", { title: "create-message" });
}
async function createMessagePostController(req, res) {
  const { username, text } = req.body;
  console.log("username and text", username + " " + text);

  try {
    await db.insertMessage(username, text, new Date());
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getAllMessagesController,
  createMessageGetController,
  createMessagePostController,
};
