const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames(username) VALUES ($1)", [username]);
}

async function searchUsernames(username) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username=$1",
    [username]
  );
  return rows;
}

async function deleteUsernames() {
  await pool.query("DELETE FROM usernames");
}
module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsernames,
  deleteUsernames,
};
