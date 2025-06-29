const { Router } = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const indexRouter = Router();
indexRouter.get("/", ensureAuthenticated, (req, res) => {
  res.render("index", { title: "index", user: req.user });
});

module.exports = indexRouter;
