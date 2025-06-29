const pool = require("../db/pool");

async function findUserByEmail(email) {
  const { rows } = await pool.query("SELECT * FROM users WHERE email=$1", [
    email,
  ]);
  return rows[0];
}
async function findUserById(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
  return rows[0];
}
async function insertUser(first_name, last_name, email, password_hash) {
  await pool.query(
    "INSERT INTO users (first_name, last_name, email, password_hash) VALUES ($1, $2, $3, $4)",
    [first_name, last_name, email, password_hash]
  );
}

module.exports = { findUserByEmail, findUserById, insertUser };
