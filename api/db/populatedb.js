import pkg from "pg";
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' })

const {Client} = pkg

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR ( 255 ) NOT NULL
);

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  item VARCHAR ( 255 ),
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

INSERT INTO categories (category) 
VALUES
  ('Fruits'),
  ('Vegetables'),
  ('Meat'),
  ('Snacks')
;

INSERT INTO items (item, category_id) 
VALUES
  ('Chips', 4),
  ('Apple', 1),
  ('Pork', 3),
  ('Broccoli', 2);
`
;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "inventory",
    port: 5432, 
  });
  await client.connect(); 
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
