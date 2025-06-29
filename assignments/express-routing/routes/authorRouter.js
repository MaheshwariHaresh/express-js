const { Router } = require("express");
const {
  getAuthorByIdController,
  getAllAuthorsController,
} = require("../controllers/authorController");

const authorRouter = Router();

authorRouter.get("/", getAllAuthorsController);
authorRouter.get("/:authorId", getAuthorByIdController);
module.exports = authorRouter;
