const e = require("express");
const { Client } = require("pg");

const SQL = `CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);


CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0,
    category_id INT REFERENCES Categories(id) ON DELETE SET NULL
);`;

async function main() {
  console.log("seeding database...");
  const client = new Client({
    connectionString: "postgres://postgres:root@localhost:5432/inventory_app",
  });
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Tables created successfully");
  } catch (error) {
    console.error("Error creating tables", error);
  } finally {
    await client.end();
  }
}

main();
