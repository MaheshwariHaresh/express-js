const express = require("express");
const {
  getAllProductsController,
  getProductByNameController,
  createProductControllerGet,
  createProductControllerPost,
  updateProductControllerGet,
  updateProductControllerPost,
  deleteProductController,
} = require("../controllers/productControllers");

const productRouter = express.Router();

// Display all products
productRouter.get("/", getAllProductsController); // Renders `views/products/index.ejs`

// Render form to create a new product
productRouter.get("/create", createProductControllerGet); // Renders `views/products/create.ejs`);

// Display a single product by ID
productRouter.get("/:name", getProductByNameController); // Renders `views/products/show.ejs`

// Handle form submission to create a new product
productRouter.post("/create", createProductControllerPost);

// Handle form submission to update a product
productRouter.post("/:name/update", updateProductControllerPost);

// Render form to edit a product
productRouter.get("/:name/edit", updateProductControllerGet); // Renders `views/products/edit.ejs`

// Delete a product
productRouter.post("/:id/delete", deleteProductController);

module.exports = { productRouter };
