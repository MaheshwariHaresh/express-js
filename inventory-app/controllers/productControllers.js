const productPool = require("../db/productQueries");
const categoryPool = require("../db/categoryQueries");

async function getAllProductsController(req, res) {
  const products = await productPool.getAllProducts();
  res.render("products/index", { products: products });
}

async function createProductControllerGet(req, res) {
  const categories = await categoryPool.getAllCategories();
  const { name } = req.params;
  const product = await productPool.getSingleProduct(name);
  res.render("products/create", { product: product, categories: categories });
}

async function createProductControllerPost(req, res) {
  const { name, description, price, stock_quantity, category_id } = req.body;

  await productPool.createProduct(
    name,
    description,
    price,
    stock_quantity,
    category_id
  );
  res.redirect("/products");
}

async function getProductByNameController(req, res) {
  const { name } = req.params;
  const product = await productPool.getSingleProduct(name);
  res.render("products/show", { product: product });
}

async function updateProductControllerGet(req, res) {
  const categories = await categoryPool.getAllCategories();
  const { name } = req.params;
  const product = await productPool.getSingleProduct(name);

  res.render("products/edit", { product: product, categories: categories });
}
async function updateProductControllerPost(req, res) {
  const oldName = req.params.name;

  const { name, description, price, stock_quantity, category_id } = req.body;
  await productPool.updateProduct(
    name,
    description,
    price,
    stock_quantity,
    category_id,
    oldName
  );
  res.redirect("/products");
}

async function deleteProductController(req, res) {
  const { id } = req.params;

  await productPool.deleteProduct(id);
  res.redirect("/products");
}

module.exports = {
  getAllProductsController,
  createProductControllerGet,
  createProductControllerPost,
  updateProductControllerGet,
  updateProductControllerPost,
  deleteProductController,
  getProductByNameController,
};
