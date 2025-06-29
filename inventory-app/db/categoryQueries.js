const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getSingleCategory(name) {
  const { rows } = await pool.query("SELECT * FROM categories WHERE name=$1", [
    name,
  ]);
  return rows[0];
}

async function createCategory(name) {
  await pool.query("INSERT INTO categories(name) VALUES ($1)", [name]);
  return;
}
async function updateCategory(newName, oldName) {
  await pool.query("UPDATE categories SET name=$1 WHERE name=$2", [
    newName,
    oldName,
  ]);
  return;
}

async function deleteCategory(id) {
  await pool.query("DELETE FROM categories WHERE id=$1", [id]);
  return;
}

module.exports = {
  getAllCategories,
  getSingleCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};
