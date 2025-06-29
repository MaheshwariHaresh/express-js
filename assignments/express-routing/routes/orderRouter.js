const { Router } = require("express");

const orderRouter = Router();

orderRouter.get("/", (req, res) => res.send("All Orders Here"));
orderRouter.get("/:orderId", (req, res) => {
  const { orderId } = req.params;
  res.send(`Order id is ${orderId}`);
});

module.exports = orderRouter;
