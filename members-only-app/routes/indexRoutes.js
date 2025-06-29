const { Router } = require("express");
const { getAllMessages } = require("../models/messageModel");

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  const messages = await getAllMessages();
  res.render("index", { title: "home", messages: messages });
});
module.exports = indexRouter;
