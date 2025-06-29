const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(username, text, date) {
  await pool.query(
    "INSERT INTO messages(username,text,date) VALUES ($1,$2,$3)",
    [username, text, date]
  );
}

// async function searchUsernames(username) {
//   const { rows } = await pool.query(
//     "SELECT * FROM usernames WHERE username=$1",
//     [username]
//   );
//   return rows;
// }

// async function deleteUsernames() {
//   await pool.query("DELETE FROM usernames");
// }
module.exports = {
  getAllMessages,
  insertMessage,
};
