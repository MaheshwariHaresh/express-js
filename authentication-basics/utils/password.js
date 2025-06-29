const { hash, compare } = require("bcrypt");

async function hashPassword(password) {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
}

async function veriFyPassword(password, hashedPassword) {
  const match = await compare(password, hashedPassword);
  return match;
}
module.exports = { hashPassword, veriFyPassword };
