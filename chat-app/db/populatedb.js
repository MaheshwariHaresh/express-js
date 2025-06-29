const { Client } = require("pg");

const SQL = `CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  text VARCHAR(255),
  date TIMESTAMP
);
`;

async function main() {
  console.log("seeding ...");
  const client = new Client({
    connectionString: "postgresql://postgres:root@localhost:5432/message_board",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
