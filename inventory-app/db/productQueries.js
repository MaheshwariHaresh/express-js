const pool = require("./pool");

async function getAllProducts() {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
}
async function getSingleProduct(name) {
  const { rows } = await pool.query("SELECT * FROM products WHERE name=$1", [
    name,
  ]);
  return rows[0];
}
async function createProduct(
  name,
  description,
  price,
  stock_quantity,
  category_id
) {
  await pool.query(
    "INSERT INTO products(name, description, price, stock_quantity, category_id) VALUES($1,$2,$3,$4,$5)",
    [name, description, price, stock_quantity, category_id]
  );
}
async function updateProduct(
  name,
  description,
  price,
  stock_quantity,
  category_id,
  oldName
) {
  await pool.query(
    "UPDATE products SET name=$1, description=$2,price=$3, stock_quantity=$4, category_id=$5 WHERE name=$6",
    [name, description, price, stock_quantity, category_id, oldName]
  );
}
async function deleteProduct(id) {
  await pool.query("DELETE FROM products WHERE id=$1", [id]);
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
