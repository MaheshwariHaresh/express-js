const { createMessage, getAllMessages } = require("../models/messageModel");
async function createMessageController(req, res) {
  try {
    const { title, text } = req.body;

    await createMessage(title, text, req.user.id);
    res.redirect("/");
  } catch (error) {
    console.error("Error in creating message", error);
  }
}

async function getAllMessagesController(req, res) {
  const messages = await getAllMessages();
  res.render("index", {
    title: "all-massages",
    messages: messages,
  });
}

module.exports = { createMessageController, getAllMessagesController };
