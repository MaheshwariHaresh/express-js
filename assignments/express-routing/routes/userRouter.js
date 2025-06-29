const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res) => res.send("All Users Here"));
userRouter.get("/:userId", (req, res) => {
  const { userId } = req.params;
  res.send(`user id is ${userId}`);
});

userRouter.post("/", (req, res) => res.send("All Users Here POST"));
userRouter.post("/:userId", (req, res) => {
  const { userId } = req.params;
  res.send(`POST user id is ${userId}`);
});

module.exports = userRouter;
