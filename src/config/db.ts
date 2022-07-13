import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const user = 'postgres';
const password = process.env.DB_PASSWORD;
const host = 'localhost';
const port = 5432;
const database = 'drivenpass';

const { Pool } = pg;
const connection = new Pool({
  user,
  password, 
  host, 
  port, 
  database
});

export default connection;