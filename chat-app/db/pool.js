const { Pool } = require("pg");
const dotenv = require("dotenv").config();
module.exports = new Pool({
  host: process.env.HOST_NAME,
  user: process.env.USER_NAME,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});
