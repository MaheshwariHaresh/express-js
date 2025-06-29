const { Router } = require("express");
const {
  getAllMessagesController,
  createMessageGetController,
  createMessagePostController,
} = require("../controllers/messageControllers");

const messageRouter = Router();

messageRouter.get("/", getAllMessagesController);
messageRouter.get("/create-message", createMessageGetController);
messageRouter.post("/create-message", createMessagePostController);

module.exports = messageRouter;
