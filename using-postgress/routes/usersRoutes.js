const { Router } = require("express");
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchUsernameGet,
  deleteUsernamesGet,
} = require("../controllers/usersController");

const userRouter = Router();

userRouter.get("/", getUsernames);
userRouter.get("/new", createUsernameGet);
userRouter.post("/new", createUsernamePost);
userRouter.get("/search/:username", searchUsernameGet);
userRouter.get("/delete", deleteUsernamesGet);
module.exports = userRouter;
