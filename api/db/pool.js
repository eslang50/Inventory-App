import pg from "pg"
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' })

const { Pool } = pg

export const pool = new Pool({
  host: "localhost", 
  user: process.env.DB_USER,
  database: "inventory",
  password: process.env.DB_PASSWORD,
  port: 5432 // The default port
});