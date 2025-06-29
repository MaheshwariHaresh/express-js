const pool = require("../db/categoryQueries");
const productPool = require("../db/productQueries");

async function getAllCategoriesController(req, res) {
  const categories = await pool.getAllCategories();
  res.render("categories/index", { categories: categories });
}
async function getCategoryByNameController(req, res) {
  const products = await productPool.getAllProducts();

  const { name } = req.params;

  const category = await pool.getSingleCategory(name);
  const filterProducts = products.filter(
    (product) => (product.category_id = category.id)
  );
  console.log(filterProducts);
  res.render("categories/show", { category: category });
}

async function createCategoryController(req, res) {
  const { name } = req.body;
  await pool.createCategory(name);
  res.redirect("/categories");
}

async function updateCategoryControllerGet(req, res) {
  const { name } = req.params;
  const category = await pool.getSingleCategory(name);
  res.render("categories/edit", { category: category });
}

async function updateCategoryControllerPost(req, res) {
  const oldName = req.params.name;
  const { name } = req.body;
  await pool.updateCategory(name, oldName);
  res.redirect("/categories");
}

async function deleteCategoryController(req, res) {
  const { id } = req.params;
  await pool.deleteCategory(id);
  res.redirect("/categories");
}

module.exports = {
  getAllCategoriesController,
  getCategoryByNameController,
  createCategoryController,
  updateCategoryControllerGet,
  updateCategoryControllerPost,
  deleteCategoryController,
};
