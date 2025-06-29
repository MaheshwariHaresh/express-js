const express = require("express");
const {
  getAllCategoriesController,
  getCategoryByNameController,
  createCategoryController,
  updateCategoryControllerGet,
  updateCategoryControllerPost,
  deleteCategoryController,
} = require("../controllers/categoryControllers");

const categoryRouter = express.Router();

// Render form to create a new category
categoryRouter.get("/create", (req, res) => {
  res.render("categories/create"); // Renders `views/categories/create.ejs`
});

// Display all categories
categoryRouter.get("/", getAllCategoriesController); // Renders `views/categories/index.ejs`

// Display a single category by name
categoryRouter.get("/:name", getCategoryByNameController); // Renders `views/categories/show.ejs`

// Handle form submission to create a new category
categoryRouter.post("/create", createCategoryController);

// Handle form submission to update a category
categoryRouter.post("/:name/update", updateCategoryControllerPost);

// Render form to edit a category
categoryRouter.get("/:name/edit", updateCategoryControllerGet); // Renders `views/categories/edit.ejs`

// Delete a category
categoryRouter.post("/:id/delete", deleteCategoryController);

module.exports = { categoryRouter };
