const { Router } = require("express");
const {
  createMessageController,
} = require("../controllers/messageControllers");
const messageRouter = Router();
// messageRouter.get("/", getAllMessagesController);
messageRouter.get("/create-message", (req, res) => {
  res.render("createMessage");
});
messageRouter.post("/create-message", createMessageController);
module.exports = messageRouter;
