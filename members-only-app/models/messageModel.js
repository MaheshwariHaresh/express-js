const pool = require("../db/pool");

async function createMessage(title, text, user_id) {
  await pool.query(
    "INSERT INTO messages(title, text, user_id) VALUES($1, $2, $3)",
    [title, text, user_id]
  );
}

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}
module.exports = { createMessage, getAllMessages };
