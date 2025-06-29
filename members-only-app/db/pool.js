const { Pool } = require("pg");
require("dotenv").config();
module.exports = new Pool({
  host: process.env.HOST_NAME,
  user: process.env.USER_NAME,
  database: process.env.DATABASE_NAME,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
});
