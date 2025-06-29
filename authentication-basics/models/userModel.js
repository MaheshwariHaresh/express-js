const pool = require("../db/pool");

async function findUserByName(username) {
  const { rows } = await pool.query("SELECT * FROM users WHERE username=$1", [
    username,
  ]);
  return rows[0];
}
async function findUserById(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
  return rows[0];
}
async function insertUser(username, password) {
  await pool.query("INSERT INTO users (username, password) VALUES($1, $2)", [
    username,
    password,
  ]);
}
module.exports = { findUserByName, findUserById, insertUser };
