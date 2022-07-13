import connection from './../config/db.js';

import * as usersService from './../services/usersService.js';

export interface User {
  id: number,
  email: string, 
  password: string
}

async function post(user: usersService.CreateDataUser){
  const { email, password } = user;
  return await connection.query(
    `INSERT INTO users (email, password) VALUES ($1, $2);`
  , [email, password]);
}

async function findByEmail(email: string){
  const result = await connection.query<User>(
    `SELECT * FROM users WHERE email = $1;`
  , [email]);

  return result.rows[0];
}

export {
  post,
  findByEmail
}